import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VolunteersCreate = ({ setIsCreatePageShow }) => {

  const [isActive, setIsActive] = useState(false);
``
  
  // 
  const notify = (message) => toast.success(message);;
  // form
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.role) {
      errors.role = "Required";
    } else if (values.role.length < 4) {
      errors.role = "Must be 4 characters or more";
    }
    if (!values.img) {
        errors.img = "Required";
      } else if (values.img.length < 4) {
        errors.img = "Must be 4 characters or more";
      }
     
   
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      role: "",
      img: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      setIsActive(true);
      const { error } = await supabase.from("Volunteers").insert({
        name: values.name,
        role: values.role,
        img: values.img,
      });
      if (error) {
        console.error(error.message);
      } else {
        notify("New volunteer added succesfully!");
        resetForm();
        setIsCreatePageShow(false);
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

export default VolunteersCreate;
