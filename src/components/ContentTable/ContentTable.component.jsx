import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ContentTableWrapper } from "./ContentTable.styles";
import { useState } from "react";

const ContentTable = ({ currentTable, tableData }) => {
  const [columnNames, setColumnNames] = useState();

  console.log(tableData);
  // useEffect(() => {
  //   supabase
  //     .from(`${currentTable.name}`)
  //     .select("*")
  //     .then((response) => {
  //       setColumnNames(Object.keys(response.data[0]));
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <ContentTableWrapper className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col">Image Url</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      {tableData?.map((t) => (
        <tbody key={t.id}>
          <tr>
            <th scope="row">{t.id}</th>
            <td>{t.head}</td>
            <td>{t.body}</td>
            <td>{t.img}</td>
            <td className="actions">
              <BiEdit size={25} color={"var(--color-yellow)"} />
              <RiDeleteBin6Fill size={25} color={"var(--color-red)"} />
            </td>
          </tr>
        </tbody>
      ))}
    </ContentTableWrapper>
  );
};

export default ContentTable;