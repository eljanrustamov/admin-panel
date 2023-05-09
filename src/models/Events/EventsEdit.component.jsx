import React, { useState } from "react";
import { useFormik } from "formik";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
//
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
// 
import {formatMonth, formatDay} from '../../utils/utils'

const EventsEdit = ({ activeEventsItem, setIsEditPageShow }) => {

  // 
  const notify = (message) => toast.success(message);
  // 
  const formattedMonth = (''+formatMonth(activeEventsItem.month)).length == 2 ? formatMonth(activeEventsItem.month)+1 : '0'+(formatMonth(activeEventsItem.month)+1)
  const formattedDay = (''+formatDay(activeEventsItem.day)).length == 2 ? formatDay(activeEventsItem.day) : '0'+ formatDay(activeEventsItem.day);
  const formattedHour = activeEventsItem.hour.split(':')[0];
  const formattedMinutes = activeEventsItem.hour.split(':')[1];
  const [dateTime, onChangeDateTimePicker] = useState(new Date(`2023-${formattedMonth}-${formattedDay}T${formattedHour}:${formattedMinutes}:00`));
  // 
  const getDateTime = () => {
    //
    const day = ''+dateTime.getDate();
    //
    const month = formatMonth(dateTime.getMonth());
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

  // form
  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "*Required";
    } else if (values.title.length < 4) {
      errors.title = "Must be 4 characters or more";
    }

    return errors;
  };
  
  const formik = useFormik({
    initialValues: {
      id: activeEventsItem.id,
      title: activeEventsItem.title,
    },
    validate,
    onSubmit: async (values, { resetForm }) => {

      const { error } = await supabase
        .from("Events")
        .update({
          title: values.title,
          month: getDateTime().month,
          day: getDateTime().day,
          hour: getDateTime().hour
        })
        .match({ id: values.id });

      if (error) {
        console.error(error.message);
      } else {
        notify("Event updated! 👍");
        resetForm();
        setIsEditPageShow(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
      <DateTimePicker onChange={onChangeDateTimePicker} value={dateTime} />
    </div>

      <button type="submit" className="btn btn-success">
        Update
      </button>
    </form>
  );
};

export default EventsEdit;
