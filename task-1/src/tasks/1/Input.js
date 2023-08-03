import React from "react";

const Input = ({ task, setTask }) => {
  return (
    <input type="text" id="task" className="input" value={task} onChange={(e) => setTask(e.target.value)} />
  );
};

export default Input;
