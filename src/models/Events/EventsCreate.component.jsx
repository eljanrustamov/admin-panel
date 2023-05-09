import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
// 
import {formatMonth} from '../../utils/utils'

const EventsCreate = ({ setIsCreatePageShow }) => {
  const [isActive, setIsActive] = useState(false);
  // 
  const [dateTime, onChangeDateTimePicker] = useState(new Date());
  const getDateTime = () => {
    //
    const day = ''+dateTime.getDate();
    //
    let month = formatMonth(dateTime.getMonth());
    //
    const hour = `${
      ("" + dateTime.getHours()).length < 2
        ? "0" + dateTime.getHours()
        : dateTime.getHours()
    }:${
      ("" + dateTime.getMinutes()).length < 2
        ? "0" + dateTime.getMinutes()
        : dateTime.getMinutes()
    }`;

    return { month, day, hour };
  };
  //
  const notify = (message) => toast.success(message);
  // form
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      setIsActive(true);

      const { error } = await supabase.from("Events").insert({
        title: values.title,
        month: getDateTime().month,
        day: getDateTime().day,
        hour: getDateTime().hour,
      });

      if (error) {
        console.error(error.message);
      } else {
        notify("New event added succesfully!");
        resetForm();
        setIsCreatePageShow(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
        <DateTimePicker onChange={onChangeDateTimePicker} value={dateTime} />
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

export default EventsCreate;
