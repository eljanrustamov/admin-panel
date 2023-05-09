import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";


const AboutEdit = ({ activeAboutItem, setIsEditPageShow }) => {

  const notify = (message) => toast.success(message);

  // form
  const validate = (values) => {
    const errors = {};

    if (!values.fullText) {
      errors.fullText = "*Required";
    } else if (values.fullText.length < 4) {
      errors.fullText = "Must be 4 characters or more";
    }

    if (!values.shortText) {
      errors.shortText = "*Required";
    } else if (values.shortText.length < 2) {
      errors.shortText = "Must be 2 characters or more";
    }
    return errors;
  };
  
  const formik = useFormik({
    initialValues: {
      id: activeAboutItem.id,
      fullText: activeAboutItem.fullText,
      shortText: activeAboutItem.shortText,
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const { error } = await supabase
        .from("About")
        .update({
          fullText: values.fullText,
          shortText: values.shortText,
        })
        .match({ id: values.id });

      if (error) {
        console.error(error.message);
      } else {
        notify("About updated! 👍");
        resetForm();
        setIsEditPageShow(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="fullText" className="form-label">
          fullText
        </label>
        <input
          type="text"
          className="form-control"
          id="fullText"
          onChange={formik.handleChange}
          value={formik.values.fullText}
        />
        {formik.errors.fullText ? (
          <div className="text-danger">{formik.errors.fullText}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="shortText" className="form-label">
          shortText
        </label>
        <input
          type="text"
          className="form-control"
          id="shortText"
          onChange={formik.handleChange}
          value={formik.values.shortText}
        />
        {formik.errors.shortText ? (
          <div className="text-danger">{formik.errors.shortText}</div>
        ) : null}
      </div>

      <button type="submit" className="btn btn-success">
        Update
      </button>
    </form>
  );
};

export default AboutEdit;
