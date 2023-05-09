import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { NewslettersDisplayStyled } from "./Newsletters.styles";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

const NewslettersDisplay = ({
  isEditPageShow,
  setIsEditPageShow,
  setActiveNewslettersItem,
}) => {
  const [newslettersData, setNewslettersData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //
  const notify = (message) => toast.success(message);

  const getNewslettersData = async () => {
    const { data, error } = await supabase.from("Newsletters").select();
    setNewslettersData(data);
    setIsLoading(false);
  };

  const handleClickEdit = (newsletter) => {
    setIsEditPageShow(!isEditPageShow);
    setActiveNewslettersItem(newsletter);
  };
  const removeNewslettersItem = async (id) => {
    setIsLoading(true);
    await supabase.from("Newsletters").delete().eq("id", id);
    notify(`[ID${id}]:🔴 Item removed!`);
    getNewslettersData();
  };

  // get Newsletters data
  useEffect(() => {
    setIsLoading(true);
    getNewslettersData();
  }, []);

  return (
      <NewslettersDisplayStyled>
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
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newslettersData?.map((newsletter) => (
                <tr key={newsletter.id}>
                  <th scope="row">{newsletter.id}</th>
                  <td>{newsletter.email}</td>
                  <td className="actions">
                    <BiEdit
                      size={30}
                      color={"var(--color-yellow)"}
                      onClick={() => handleClickEdit(newsletter)}
                      className="mb-3"
                    />
                    <RiDeleteBin6Fill
                      size={30}
                      color={"var(--color-red)"}
                      onClick={() => removeNewslettersItem(newsletter.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </NewslettersDisplayStyled>
  );
};

export default NewslettersDisplay;
