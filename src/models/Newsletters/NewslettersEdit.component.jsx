import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";


const NewslettersEdit = ({ activeNewslettersItem, setIsEditPageShow }) => {

  const notify = (message) => toast.success(message);

  // form
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "*Required";
    } else if (values.email.length < 4) {
      errors.email = "Must be 4 characters or more";
    }
    return errors;
  };
  
  const formik = useFormik({
    initialValues: {
      id: activeNewslettersItem.id,
      email: activeNewslettersItem.email,
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const { error } = await supabase
        .from("Newsletters")
        .update({
          email: values.email,
        })
        .match({ id: values.id });

      if (error) {
        console.error(error.message);
      } else {
        notify("Newsletter updated! 👍");
        resetForm();
        setIsEditPageShow(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
      </div>
      
      <button type="submit" className="btn btn-success">
        Update
      </button>
    </form>
  );
};

export default NewslettersEdit;
