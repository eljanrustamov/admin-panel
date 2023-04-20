import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";


const SlidersEdit = ({ activeSliderItem, setIsEditPageShow }) => {

  const notify = (message) => toast.success(message);

  // form
  const validate = (values) => {
    const errors = {};
    if (!values.head) {
      errors.head = "Required";
    }

    if (!values.body) {
      errors.body = "Required";
    } else if (values.body.length < 4) {
      errors.body = "Must be 4 characters or more";
    }
    if (!values.img) {
      errors.img = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      id: activeSliderItem.id,
      head: activeSliderItem.head,
      body: activeSliderItem.body,
      img: activeSliderItem.img,
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const { error } = await supabase
        .from("Sliders")
        .update({
          head: values.head,
          body: values.body,
          img: values.img,
        })
        .match({ id: values.id });

      if (error) {
        console.error(error.message);
      } else {
        notify("Slider updated! 👍");
        resetForm();
        setIsEditPageShow(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="head" className="form-label">
          Head
        </label>
        <input
          type="text"
          className="form-control"
          id="head"
          onChange={formik.handleChange}
          value={formik.values.head}
        />
        {formik.errors.head ? (
          <div className="text-danger">{formik.errors.head}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <input
          type="text"
          className="form-control"
          id="body"
          onChange={formik.handleChange}
          value={formik.values.body}
        />
        {formik.errors.body ? (
          <div className="text-danger">{formik.errors.body}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Image Url
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

export default SlidersEdit;
