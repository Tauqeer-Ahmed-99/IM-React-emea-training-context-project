import React from "react";

import "./table-header.css";

const TableHeader = () => {
  return (
    <div className="table-header">
      <span>Name</span>
      <span>Contact</span>
      <span>Edit</span>
      <span>Delete</span>
    </div>
  );
};

export default TableHeader;
