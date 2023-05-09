import React, { useEffect, useState } from "react";
import { NewsMainStyled } from "./News.styles";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlineArrowBack } from "react-icons/md";
import NewsDisplay from "./NewsDisplay.component";
import { useWindowWidth } from "@react-hook/window-size";
import NewsCreate from "./NewsCreate.component";
import NewsEdit from "./NewsEdit.component";
import { ToastContainer, toast } from "react-toastify";

const NewsMain = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const windowWidth = useWindowWidth();
  const [isEditPageShow, setIsEditPageShow] = useState(false);
  const [isCreatePageShow, setIsCreatePageShow] = useState(false);
  const [activeNewsItem, setActiveNewsItem] = useState(null);

  
  return (
    <NewsMainStyled
      forWidth={`${isSidebarOpen ? "250px" : "0px"}`}
      onClick={() => {
        windowWidth <= 978 && setIsSidebarOpen(false);
      }}
    >
      <div className="content-header">
        <h3 className="title">./News</h3>
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
            <NewsCreate setIsCreatePageShow={setIsCreatePageShow} />
          </div>
        ) : isEditPageShow ? (
          <NewsEdit
            activeNewsItem={activeNewsItem}
            setIsEditPageShow={setIsEditPageShow}
          />
        ) : (
          <NewsDisplay
            isEditPageShow={isEditPageShow}
            setIsEditPageShow={setIsEditPageShow}
            setActiveNewsItem={setActiveNewsItem}
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
    </NewsMainStyled>
  );
};

export default NewsMain;
