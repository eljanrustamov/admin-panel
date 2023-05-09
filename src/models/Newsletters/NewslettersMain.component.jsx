import React, { useEffect, useState } from "react";
import { NewslettersMainStyled } from "./Newsletters.styles";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlineArrowBack } from "react-icons/md";
import NewslettersDisplay from "./NewslettersDisplay.component";
import { useWindowWidth } from "@react-hook/window-size";
import NewslettersCreate from "./NewslettersCreate.component";
import NewslettersEdit from "./NewslettersEdit.component";
import { ToastContainer, toast } from "react-toastify";

const NewslettersMain = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const windowWidth = useWindowWidth();
  const [isEditPageShow, setIsEditPageShow] = useState(false);
  const [isCreatePageShow, setIsCreatePageShow] = useState(false);
  const [activeNewslettersItem, setActiveNewslettersItem] = useState(null);

  return (
    <NewslettersMainStyled
      forWidth={`${isSidebarOpen ? "250px" : "0px"}`}
      onClick={() => {
        windowWidth <= 978 && setIsSidebarOpen(false);
      }}
    >
      <div className="content-header">
        <h3 className="title">./Newsletters</h3>
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
            <NewslettersCreate setIsCreatePageShow={setIsCreatePageShow} />
          </div>
        ) : isEditPageShow ? (
          <NewslettersEdit
            activeNewslettersItem={activeNewslettersItem}
            setIsEditPageShow={setIsEditPageShow}
          />
        ) : (
          <NewslettersDisplay
            isEditPageShow={isEditPageShow}
            setIsEditPageShow={setIsEditPageShow}
            setActiveNewslettersItem={setActiveNewslettersItem}
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
    </NewslettersMainStyled>
  );
};

export default NewslettersMain;
