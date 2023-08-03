import React from "react";

const Input = ({ task, setTask, setDisplayText }) => {
  return (
    <>
      <input
        type="text"
        id="task"
        className="input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="button-85" onClick={() => setDisplayText(task)}>Get Text</button>
      <br/>
      <br/>
    </>
  );
};

export default Input;
