import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";


const VolunteersEdit = ({ activeVolunteersItem, setIsEditPageShow }) => {

  const notify = (message) => toast.success(message);

  // form
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "*Required";
    } else if (values.name.length < 4) {
      errors.name = "Must be 4 characters or more";
    }

    if (!values.role) {
      errors.role = "*Required";
    } else if (values.role.length < 2) {
      errors.role = "Must be 2 characters or more";
    }
    return errors;
  };
  
  const formik = useFormik({
    initialValues: {
      id: activeVolunteersItem.id,
      name: activeVolunteersItem.name,
      role: activeVolunteersItem.role,
      img: activeVolunteersItem.img
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const { error } = await supabase
        .from("Volunteers")
        .update({
          name: values.name,
          role: values.role,
          img: values.img
        })
        .match({ id: values.id });

      if (error) {
        console.error(error.message);
      } else {
        notify("Volunteer updated! 👍");
        resetForm();
        setIsEditPageShow(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div className="text-danger">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <input
          type="text"
          className="form-control"
          id="role"
          onChange={formik.handleChange}
          value={formik.values.role}
        />
        {formik.errors.role ? (
          <div className="text-danger">{formik.errors.role}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="img" className="form-label">
          img
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

export default VolunteersEdit;
