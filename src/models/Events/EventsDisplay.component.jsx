import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { EventsDisplayStyled } from "./Events.styles";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

const EventsDisplay = ({
  isEditPageShow,
  setIsEditPageShow,
  setActiveEventsItem,
}) => {
  const [eventsData, setEventsData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //
  const notify = (message) => toast.success(message);

  const getEventsData = async () => {
    const { data, error } = await supabase.from("Events").select();
    setEventsData(data);
    setIsLoading(false);
  };

  const handleClickEdit = (event) => {
    setIsEditPageShow(!isEditPageShow);
    setActiveEventsItem(event);
  };
  const removeEventsItem = async (id) => {
    setIsLoading(true);
    await supabase.from("Events").delete().eq("id", id);
    notify(`[ID${id}]:🔴 Item removed!`);
    getEventsData();
  };

  // get Events data
  useEffect(() => {
    setIsLoading(true);
    getEventsData();
  }, []);

  return (
      <EventsDisplayStyled>
        {isLoading ? (
          <TailSpin
            height="100"
            width="100"
            color="#323A45"
            ariaLabel="tail-spin-loading"
            radius="8"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Month</th>
                <th scope="col">Day</th>
                <th scope="col">Hour</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {eventsData?.map((event) => (
                <tr key={event.id}>
                  <th scope="row">{event.id}</th>
                  <td>{event.title}</td>
                  <td>{event.month}</td>
                  <td>{event.day}</td>
                  <td>{event.hour}</td>
                  <td className="actions">
                    <BiEdit
                      size={30}
                      color={"var(--color-yellow)"}
                      onClick={() => handleClickEdit(event)}
                      className="mb-3"
                    />
                    <RiDeleteBin6Fill
                      size={30}
                      color={"var(--color-red)"}
                      onClick={() => removeEventsItem(event.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </EventsDisplayStyled>
  );
};

export default EventsDisplay;
