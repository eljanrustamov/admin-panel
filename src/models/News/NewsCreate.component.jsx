import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import Calendar from "react-calendar";
// ck
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const NewsCreate = ({ setIsCreatePageShow }) => {
  const [isActive, setIsActive] = useState(false);
  //
  const [calendarData, onChangeCalendarData] = useState(new Date());
  const formattedPublishedDate = `${calendarData.getFullYear()}-${
    ("" + calendarData.getMonth()).length === 2
      ? calendarData.getMonth() + 1
      : "0" + (calendarData.getMonth() + 1)
  }-${
    ("" + calendarData.getDate()).length === 2
      ? calendarData.getDate()
      : "0" + calendarData.getDate()
  }`;
  //
  const [contentData, setContentData] = useState('');

  // 
  const notify = (message) => toast.success(message);
  // form
  const validate = (values) => {
    const errors = {};
    if (!values.banner) {
      errors.banner = "Required";
    }

    if (!values.author) {
      errors.author = "Required";
    } else if (values.author.length < 4) {
      errors.author = "Must be 4 characters or more";
    }
    if (!values.title) {
      errors.title = "Required";
    } else if (values.title.length < 4) {
      errors.title = "Must be 4 characters or more";
    }
    if (!values.description) {
      errors.description = "Required";
    } else if (values.description.length < 4) {
      errors.description = "Must be 4 characters or more";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      banner: "",
      author: "",
      title: "",
      description: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      console.log('yes')
      setIsActive(true);
      const { error } = await supabase.from("News").insert({
        banner: values.banner,
        author: values.author,
        title: values.title,
        description: values.description,
        content:contentData,
        published: formattedPublishedDate,
      });
      if (error) {
        console.error(error.message);
      } else {
        notify("New item added succesfully!");
        resetForm();
        setIsCreatePageShow(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="banner" className="form-label">
          Banner
        </label>
        <input
          type="text"
          className="form-control"
          id="banner"
          onChange={formik.handleChange}
          value={formik.values.banner}
        />
        {formik.errors.banner ? (
          <div className="text-danger">{formik.errors.banner}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          author
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          onChange={formik.handleChange}
          value={formik.values.author}
        />

        {formik.errors.author ? (
          <div className="text-danger">{formik.errors.author}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        {formik.errors.title ? (
          <div className="text-danger">{formik.errors.title}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        {formik.errors.description ? (
          <div className="text-danger">{formik.errors.description}</div>
        ) : null}
      </div>

        <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContentData(data);
          }}
        />
      </div>

      <div className="mb-3">
        <h6>Published</h6>
        <Calendar
          onChange={onChangeCalendarData}
          value={calendarData}
          className="published"
        />

        <p className="calendar-data-preview">{formattedPublishedDate}</p>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={notify}
        disabled={isActive}
      >
        Create
      </button>
    </form>
  );
};

export default NewsCreate;
