import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { VolunteersDisplayStyled } from "./Volunteers.styles";
import supabase from "../../config/supabaseConfig";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

const VolunteersDisplay = ({
  isEditPageShow,
  setIsEditPageShow,
  setActiveVolunteersItem,
}) => {
  const [volunteersData, setVolunteersData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //
  const notify = (message) => toast.success(message);

  const getVolunteersData = async () => {
    const { data, error } = await supabase.from("Volunteers").select();
    setVolunteersData(data);
    setIsLoading(false);
  };

  const handleClickEdit = (volunteer) => {
    setIsEditPageShow(!isEditPageShow);
    setActiveVolunteersItem(volunteer);
  };
  const removeVolunteersItem = async (id) => {
    setIsLoading(true);
    await supabase.from("Volunteers").delete().eq("id", id);
    notify(`[ID${id}]:🔴 Volunteer was removed!`);
    getVolunteersData();
  };

  // get Volunteers data
  useEffect(() => {
    setIsLoading(true);
    getVolunteersData();
  }, []);

  return (
      <VolunteersDisplayStyled>
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
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Img</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {volunteersData?.map((volunteer) => (
                <tr key={volunteer.id}>
                  <th scope="row">{volunteer.id}</th>
                  <td>{volunteer.name}</td>
                  <td>{volunteer.role}</td>
                  <td>{volunteer.img}</td>
                  <td className="actions">
                    <BiEdit
                      size={30}
                      color={"var(--color-yellow)"}
                      onClick={() => handleClickEdit(volunteer)}
                      className="mb-3"
                    />
                    <RiDeleteBin6Fill
                      size={30}
                      color={"var(--color-red)"}
                      onClick={() => removeVolunteersItem(volunteer.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </VolunteersDisplayStyled>
  );
};

export default VolunteersDisplay;
