import React, { useState } from "react";

const ColumnForm = ({ onAddColumn }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddColumn(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter column name"
        className="form-control me-2"
      />
      <button type="submit" className="btn btn-primary">
        Add Column
      </button>
    </form>
  );
};

export default ColumnForm;
