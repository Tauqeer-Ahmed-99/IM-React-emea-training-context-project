import React from "react";

import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";

import "./tableitem.css";

const TableItem = ({
  name,
  contact,
  handleEditClick,
  handleDeleteClick,
}: {
  name: string;
  contact: number;
  handleEditClick: () => void;
  handleDeleteClick: () => void;
}) => {
  return (
    <div className="table-item">
      <span>{name}</span>
      <span>{contact}</span>
      <span>
        <img src={EditIcon} alt="Edit" onClick={handleEditClick} />
      </span>
      <span>
        <img src={DeleteIcon} alt="Delete" onClick={handleDeleteClick} />
      </span>
    </div>
  );
};

export default TableItem;
