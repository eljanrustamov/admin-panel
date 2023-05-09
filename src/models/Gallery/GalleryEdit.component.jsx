import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";


const GalleryEdit = ({ activeGalleryItem, setIsEditPageShow }) => {

  const notify = (message) => toast.success(message);

  // form
  const validate = (values) => {
    const errors = {};

    if (!values.img) {
      errors.img = "*Required";
    } else if (values.img.length < 4) {
      errors.img = "Must be 4 characters or more";
    }
   
    return errors;
  };
  
  const formik = useFormik({
    initialValues: {
      id: activeGalleryItem.id,
      img: activeGalleryItem.img,
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const { error } = await supabase
        .from("Gallery")
        .update({
          img: values.img,
        })
        .match({ id: values.id });

      if (error) {
        console.error(error.message);
      } else {
        notify("Item updated! 👍");
        resetForm();
        setIsEditPageShow(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="img" className="form-label">
          Img url
        </label>
        <input
          type="text"
          className="form-control"
          id="img"
          onChange={formik.handleChange}
          value={formik.values.img}
        />
        {formik.errors.img ? (
          <div className="text-danger">{formik.errors.img}</div>
        ) : null}
      </div>

      <button type="submit" className="btn btn-success">
        Update
      </button>
    </form>
  );
};

export default GalleryEdit;
