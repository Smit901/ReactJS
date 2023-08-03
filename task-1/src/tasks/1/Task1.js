import React, { useState } from "react";
import DisplayItem from "./DisplayItem";
import Input from "./Input";

const Task1 = () => {
  const [task, setTask] = useState("");
  return (
    <div className="task__content">
      <Input task={task} setTask={setTask} />
      <br/>
      <DisplayItem task={task} /> 
    </div>
  );
};

export default Task1;
