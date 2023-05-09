import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AboutDisplayStyled } from "./About.styles";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

const AboutDisplay = ({
  isEditPageShow,
  setIsEditPageShow,
  setActiveAboutItem,
}) => {
  const [aboutData, setAboutData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //
  const notify = (message) => toast.success(message);

  const getAboutData = async () => {
    const { data, error } = await supabase.from("About").select();
    setAboutData(data);
    setIsLoading(false);
  };

  const handleClickEdit = (about) => {
    setIsEditPageShow(!isEditPageShow);
    setActiveAboutItem(about);
  };
  const removeAboutItem = async (id) => {
    setIsLoading(true);
    await supabase.from("About").delete().eq("id", id);
    notify(`[ID${id}]:🔴 Item removed!`);
    getAboutData();
  };

  // get About data
  useEffect(() => {
    setIsLoading(true);
    getAboutData();
  }, []);

  return (
      <AboutDisplayStyled>
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
                <th scope="col">Full text</th>
                <th scope="col">Short text</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {aboutData?.map((about) => (
                <tr key={about.id}>
                  <th scope="row">{about.id}</th>
                  <td>{about.fullText}</td>
                  <td>{about.shortText}</td>
                  <td className="actions">
                    <BiEdit
                      size={30}
                      color={"var(--color-yellow)"}
                      onClick={() => handleClickEdit(about)}
                      className="mb-3"
                    />
                    <RiDeleteBin6Fill
                      size={30}
                      color={"var(--color-red)"}
                      onClick={() => removeAboutItem(about.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </AboutDisplayStyled>
  );
};

export default AboutDisplay;
