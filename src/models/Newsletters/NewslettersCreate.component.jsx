import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewslettersCreate = ({ setIsCreatePageShow }) => {

  const [isActive, setIsActive] = useState(false);

  
  // 
  const notify = (message) => toast.success(message);;
  // form
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
   
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      setIsActive(true);
      const { error } = await supabase.from("Newsletters").insert({
        email: values.email,
      });
      if (error) {
        console.error(error.message);
      } else {
        notify("New newsletter added succesfully!");
        resetForm();
        setIsCreatePageShow(false);
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
          type="email"
          className="form-control"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
      </div>



      <button type="submit" className="btn btn-primary" onClick={notify} disabled={isActive}>
        Create
      </button>
    </form>
  );
};

export default NewslettersCreate;
