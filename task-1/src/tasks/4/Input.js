import React, { useState } from "react";

const Input = ({ handleAdd }) => {
  const [value, setValue] = useState("");

  const addHandler = () => {
    handleAdd(value);
    setValue("");
  };

  return (
    <>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="button-85"
        onClick={addHandler}
        disabled={value === ""}
      >
        Add
      </button>
    </>
  );
};

export default Input;
