import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { SlidersDisplayStyled } from "./Sliders.styles";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";


const SlidersDisplay = ({
  isEditPageShow,
  setIsEditPageShow,
  setActiveSliderItem,
}) => {
  const [slidersData, setSlidersData] = useState();

  //
  const notify = (message) => toast.success(message);

  const getSlidersData = async () => {
    const { data, error } = await supabase.from("Sliders").select();
    setSlidersData(data);
  };
  const handleClickEdit = (slider) => {
    setIsEditPageShow(!isEditPageShow);
    setActiveSliderItem(slider);
  };
  const removeSliderItem = async (id) => {
    await supabase.from("Sliders").delete().eq("id", id);
    notify(`[ID${id}]:🔴 Slider removed!`);
    getSlidersData();
  };

  // get sliders data
  useEffect(() => {
    getSlidersData();
  }, []);

  return (
    <SlidersDisplayStyled>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Image Url</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {slidersData?.map((slider) => (
            <tr key={slider.id}>
              <th scope="row">{slider.id}</th>
              <td>{slider.head}</td>
              <td className="table-cell">{slider.body}</td>
              <td>{slider.img}</td>
              <td className="table-cell actions">
                <BiEdit
                  size={30}
                  color={"var(--color-yellow)"}
                  onClick={() => handleClickEdit(slider)}
                  className="mb-3"
                />
                <RiDeleteBin6Fill
                  size={30}
                  color={"var(--color-red)"}
                  onClick={() => removeSliderItem(slider.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SlidersDisplayStyled>
  );
};

export default SlidersDisplay;

// <tr key={slider.id}>
//               <th scope="row">{slider.id}</th>
//               <td>{slider.head}</td>
//               <td>{slider.body}</td>
//               <td>{slider.img}</td>
//               <td className="actions">
//                 <BiEdit
//                   size={25}
//                   color={"var(--color-yellow)"}
//                   onClick={() => handleClickEdit(slider)}
//                 />
//                 <RiDeleteBin6Fill
//                   size={25}
//                   color={"var(--color-red)"}
//                   onClick={() => removeSliderItem(slider.id)}
//                 />
//               </td>
//             </tr>
