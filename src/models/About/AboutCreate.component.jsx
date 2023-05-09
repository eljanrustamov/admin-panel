import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AboutCreate = ({ setIsCreatePageShow }) => {

  const [isActive, setIsActive] = useState(false);

  
  // 
  const notify = (message) => toast.success(message);;
  // form
  const validate = (values) => {
    const errors = {};
    if (!values.fullText) {
      errors.fullText = "Required";
    }

    if (!values.shortText) {
      errors.shortText = "Required";
    } else if (values.shortText.length < 4) {
      errors.shortText = "Must be 4 characters or more";
    }
   
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      fullText: "",
      shortText: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      setIsActive(true);
      const { error } = await supabase.from("About").insert({
        fullText: values.fullText,
        shortText: values.shortText,
      });
      if (error) {
        console.error(error.message);
      } else {
        notify("New about added succesfully!");
        resetForm();
        setIsCreatePageShow(false);
      }
    },
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="fullText" className="form-label">
          Full text
        </label>
        <textarea
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
          Short text
        </label>
        <textarea
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


      <button type="submit" className="btn btn-primary" onClick={notify} disabled={isActive}>
        Create
      </button>
    </form>
  );
};

export default AboutCreate;
