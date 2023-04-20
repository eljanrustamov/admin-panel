import React, { useEffect, useState } from "react";
import { MainContentWrapper } from "./MainContent.styles";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlineArrowBack } from "react-icons/md";
import ContentTable from "../ContentTable/ContentTable.component";
import { useWindowWidth } from "@react-hook/window-size";
import supabase from "../../config/supabaseConfig.js";

const MainContent = ({
  isOpen,
  setIsOpen,
  activeIndex,
  setActiveIndex,
  isShowEditPage,
  setIsShowEditPage,
  tables,
}) => {
  const windowWidth = useWindowWidth();
  const currentTable = tables.find((table) => table.id === activeIndex);
  const [tableData, setTableData] = useState();

  useEffect(() => {
    const getTableData = async () => {
      const { data, error } = await supabase.from(`${currentTable.name}`).select();
      setTableData(data);
    };
    getTableData();
  }, [activeIndex]);



  return (
    
    <MainContentWrapper
      forWidth={`${isOpen ? "250px" : "0px"}`}
      onClick={() => {
        windowWidth <= 978 && setIsOpen(false);
      }}
    >

      <div className="content-header">
        <h3 className="title">Test</h3>
        {isShowEditPage ? (
          <button
            className="prev-btn"
            onClick={() => setIsShowEditPage(!isShowEditPage)}
          >
            <MdOutlineArrowBack size={20} style={{ marginRight: "5px" }} />
            Go to back
          </button>
        ) : (
          <button
            className="create-btn"
            onClick={() => setIsShowEditPage(!isShowEditPage)}
          >
            Create <BiAddToQueue />
          </button>
        )}
      </div>

      <div className="content-body row justify-content-center">
        {isShowEditPage ? (
          <div class="col-md-8">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Body
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Image Url
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Share
              </button>
            </form>
          </div>
        ) : (
          <ContentTable currentTable={currentTable} tableData={tableData}/>
        )}
      </div>

    </MainContentWrapper>
  );
};

export default MainContent;
