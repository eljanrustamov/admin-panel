import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GalleryDisplayStyled } from "./Gallery.styles";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

const GalleryDisplay = ({
  isEditPageShow,
  setIsEditPageShow,
  setActiveGalleryItem,
}) => {
  const [galleryData, setGalleryData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //
  const notify = (message) => toast.success(message);

  const getGalleryData = async () => {
    const { data, error } = await supabase.from("Gallery").select();
    setGalleryData(data);
    setIsLoading(false);
  };

  const handleClickEdit = (gallery) => {
    setIsEditPageShow(!isEditPageShow);
    setActiveGalleryItem(gallery);
  };
  const removeGalleryItem = async (id) => {
    setIsLoading(true);
    await supabase.from("Gallery").delete().eq("id", id);
    notify(`[ID${id}]:🔴 Item removed!`);
    getGalleryData();
  };

  // get Gallery data
  useEffect(() => {
    setIsLoading(true);
    getGalleryData();
  }, []);

  return (
      <GalleryDisplayStyled>
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
                <th scope="col">Img url</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {galleryData?.map((gallery) => (
                <tr key={gallery.id}>
                  <th scope="row">{gallery.id}</th>
                  <td>{gallery.img}</td>
                  <td className="actions">
                    <BiEdit
                      size={30}
                      color={"var(--color-yellow)"}
                      onClick={() => handleClickEdit(gallery)}
                      className="mb-3"
                    />
                    <RiDeleteBin6Fill
                      size={30}
                      color={"var(--color-red)"}
                      onClick={() => removeGalleryItem(gallery.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </GalleryDisplayStyled>
  );
};

export default GalleryDisplay;
