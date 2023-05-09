import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
//
import Calendar from "react-calendar";
// ck
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const NewsEdit = ({ activeNewsItem, setIsEditPageShow }) => {
  const notify = (message) => toast.success(message);
  //
  const [calendarData, onChangeCalendarData] = useState(new Date(`${activeNewsItem.published.split('-')[0]}-${activeNewsItem.published.split('-')[1]}-${activeNewsItem.published.split('-')[2]}`));
  const formattedPublishedDate = `${calendarData.getFullYear()}-${(''+calendarData.getMonth()).length === 2 ? calendarData.getMonth()+1 : '0'+(calendarData.getMonth()+1)}-${(''+calendarData.getDate()).length === 2 ? calendarData.getDate() : '0'+calendarData.getDate()}`
  //
  const [contentData, setContentData] = useState('');

  // form
  const validate = (values) => {
    const errors = {};

    if (!values.banner) {
      errors.banner = "*Required";
    } else if (values.banner.length < 4) {
      errors.banner = "Must be 4 characters or more";
    }

    if (!values.author) {
      errors.author = "*Required";
    } else if (values.author.length < 2) {
      errors.author = "Must be 2 characters or more";
    }

    if (!values.title) {
      errors.title = "*Required";
    } else if (values.title.length < 2) {
      errors.title = "Must be 2 characters or more";
    }

    if (!values.description) {
      errors.description = "*Required";
    } else if (values.description.length < 2) {
      errors.description = "Must be 2 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      id: activeNewsItem.id,
      banner: activeNewsItem.banner,
      author: activeNewsItem.author,
      title: activeNewsItem.title,
      description: activeNewsItem.description,
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const { error } = await supabase
        .from("News")
        .update({
          banner: values.banner,
          author: values.author,
          title: values.title,
          description: values.description,
          content: contentData,
          published: formattedPublishedDate,
        })
        .match({ id: values.id });

      if (error) {
        console.error(error.message);
      } else {
        notify("News updated! 👍");
        resetForm();
        setIsEditPageShow(false);
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
          title
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
        <textarea
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
        data={activeNewsItem.content}
        onReady={(editor) => {
          // . store the "editor" and use when it is needed.
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

      <button type="submit" className="btn btn-success">
        Update
      </button>
    </form>
  );
};

export default NewsEdit;
