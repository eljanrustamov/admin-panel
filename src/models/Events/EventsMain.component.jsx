import React, { useEffect, useState } from "react";
import { EventsMainStyled } from "./Events.styles";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlineArrowBack } from "react-icons/md";
import EventsDisplay from "./EventsDisplay.component";
import { useWindowWidth } from "@react-hook/window-size";
import EventsCreate from "./EventsCreate.component";
import EventsEdit from "./EventsEdit.component";
import { ToastContainer, toast } from "react-toastify";

const EventsMain = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const windowWidth = useWindowWidth();
  const [isEditPageShow, setIsEditPageShow] = useState(false);
  const [isCreatePageShow, setIsCreatePageShow] = useState(false);
  const [activeEventsItem, setActiveEventsItem] = useState(null);
  
  return (
    <EventsMainStyled
      forWidth={`${isSidebarOpen ? "250px" : "0px"}`}
      onClick={() => {
        windowWidth <= 978 && setIsSidebarOpen(false);
      }}
    >
      <div className="content-header">
        <h3 className="title">./Events</h3>
        {isCreatePageShow ? (
          <button
            className="prev-btn"
            onClick={() => setIsCreatePageShow(!isCreatePageShow)}
          >
            <MdOutlineArrowBack size={20} style={{ marginRight: "5px" }} />
            Go to back
          </button>
        ) : isEditPageShow ? (
          <button
            className="prev-btn"
            onClick={() => setIsEditPageShow(!isEditPageShow)}
          >
            <MdOutlineArrowBack size={20} style={{ marginRight: "5px" }} />
            Go to back
          </button>
        ) : (
          <button
            className="create-btn"
            onClick={() => setIsCreatePageShow(!isCreatePageShow)}
          >
            Create <BiAddToQueue />
          </button>
        )}
      </div>

      <div className="content-body row justify-content-center w-100">
        {isCreatePageShow ? (
          <div className="col-md-8">
            <EventsCreate setIsCreatePageShow={setIsCreatePageShow} />
          </div>
        ) : isEditPageShow ? (
          <EventsEdit
            activeEventsItem={activeEventsItem}
            setIsEditPageShow={setIsEditPageShow}
          />
        ) : (
          <EventsDisplay
            isEditPageShow={isEditPageShow}
            setIsEditPageShow={setIsEditPageShow}
            setActiveEventsItem={setActiveEventsItem}
          />
        )}
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </EventsMainStyled>
  );
};

export default EventsMain;
