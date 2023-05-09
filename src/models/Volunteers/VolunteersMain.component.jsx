import React, { useEffect, useState } from "react";
import { VolunteersMainStyled } from "./Volunteers.styles";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlineArrowBack } from "react-icons/md";
import VolunteersDisplay from "./VolunteersDisplay.component";
import { useWindowWidth } from "@react-hook/window-size";
import VolunteersCreate from "./VolunteersCreate.component";
import VolunteersEdit from "./VolunteersEdit.component";
import { ToastContainer, toast } from "react-toastify";

const VolunteersMain = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const windowWidth = useWindowWidth();
  const [isEditPageShow, setIsEditPageShow] = useState(false);
  const [isCreatePageShow, setIsCreatePageShow] = useState(false);
  const [activeVolunteersItem, setActiveVolunteersItem] = useState(null);

  return (
    <VolunteersMainStyled
      forWidth={`${isSidebarOpen ? "250px" : "0px"}`}
      onClick={() => {
        windowWidth <= 978 && setIsSidebarOpen(false);
      }}
    >
      <div className="content-header">
        <h3 className="title">./Volunteers</h3>
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
            <VolunteersCreate setIsCreatePageShow={setIsCreatePageShow} />
          </div>
        ) : isEditPageShow ? (
          <VolunteersEdit
            activeVolunteersItem={activeVolunteersItem}
            setIsEditPageShow={setIsEditPageShow}
          />
        ) : (
          <VolunteersDisplay
            isEditPageShow={isEditPageShow}
            setIsEditPageShow={setIsEditPageShow}
            setActiveVolunteersItem={setActiveVolunteersItem}
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
    </VolunteersMainStyled>
  );
};

export default VolunteersMain;
