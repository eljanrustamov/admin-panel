import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { NewsDisplayStyled } from "./News.styles";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

const NewsDisplay = ({
  isEditPageShow,
  setIsEditPageShow,
  setActiveNewsItem,
}) => {
  const [NewsData, setNewsData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //
  const notify = (message) => toast.success(message);

  const getNewsData = async () => {
    const { data, error } = await supabase.from("News").select();
    setNewsData(data);
    setIsLoading(false);
  };

  const handleClickEdit = (news) => {
    setIsEditPageShow(!isEditPageShow);
    setActiveNewsItem(news);
  };
  const removeNewsItem = async (id) => {
    setIsLoading(true);
    await supabase.from("News").delete().eq("id", id);
    notify(`[ID${id}]:🔴 Item removed!`);
    getNewsData();
  };

  // get News data
  useEffect(() => {
    setIsLoading(true);
    getNewsData();
  }, []);

  return (
      <NewsDisplayStyled>
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
                <th scope="col">Banner</th>
                <th scope="col">Author</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Content</th>
                <th scope="col">Published</th>
              </tr>
            </thead>
            <tbody>
              {NewsData?.map((news) => (
                <tr key={news.id}>
                  <th scope="row">{news.id}</th>
                  <td>{news.banner}</td>
                  <td>{news.author}</td>
                  <td>{news.title}</td>
                  <td>{news.description}</td>
                  <td>{news.content}</td>
                  <td>{news.published}</td>
                  <td className="actions">
                    <BiEdit
                      size={30}
                      color={"var(--color-yellow)"}
                      onClick={() => handleClickEdit(news)}
                      className="mb-3"
                    />
                    <RiDeleteBin6Fill
                      size={30}
                      color={"var(--color-red)"}
                      onClick={() => removeNewsItem(news.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </NewsDisplayStyled>
  );
};

export default NewsDisplay;
