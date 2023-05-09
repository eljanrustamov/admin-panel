import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GalleryCreate = ({ setIsCreatePageShow }) => {

  const [isActive, setIsActive] = useState(false);
  
  // 
  const notify = (message) => toast.success(message);;
  // form
  const validate = (values) => {
    const errors = {};
    if (!values.img) {
      errors.img = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      img: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      setIsActive(true);
      const { error } = await supabase.from("Gallery").insert({
        img: values.img,
      });
      if (error) {
        console.error(error.message);
      } else {
        notify("New item for gallery was added succesfully!");
        resetForm();
        setIsCreatePageShow(false);
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

      <button type="submit" className="btn btn-primary" onClick={notify} disabled={isActive}>
        Create
      </button>
    </form>
  );
};

export default GalleryCreate;
