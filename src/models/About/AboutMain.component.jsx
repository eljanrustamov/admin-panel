import React, { useEffect, useState } from "react";
import { AboutMainStyled } from "./About.styles";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlineArrowBack } from "react-icons/md";
import AboutDisplay from "./AboutDisplay.component";
import { useWindowWidth } from "@react-hook/window-size";
import AboutCreate from "./AboutCreate.component";
import AboutEdit from "./AboutEdit.component";
import { ToastContainer, toast } from "react-toastify";

const AboutMain = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const windowWidth = useWindowWidth();
  const [isEditPageShow, setIsEditPageShow] = useState(false);
  const [isCreatePageShow, setIsCreatePageShow] = useState(false);
  const [activeAboutItem, setActiveAboutItem] = useState(null);

  return (
    <AboutMainStyled
      forWidth={`${isSidebarOpen ? "250px" : "0px"}`}
      onClick={() => {
        windowWidth <= 978 && setIsSidebarOpen(false);
      }}
    >
      <div className="content-header">
        <h3 className="title">./About</h3>
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
            <AboutCreate setIsCreatePageShow={setIsCreatePageShow} />
          </div>
        ) : isEditPageShow ? (
          <AboutEdit
            activeAboutItem={activeAboutItem}
            setIsEditPageShow={setIsEditPageShow}
          />
        ) : (
          <AboutDisplay
            isEditPageShow={isEditPageShow}
            setIsEditPageShow={setIsEditPageShow}
            setActiveAboutItem={setActiveAboutItem}
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
    </AboutMainStyled>
  );
};

export default AboutMain;
