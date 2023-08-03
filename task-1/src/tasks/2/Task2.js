import React, { useState } from "react";
import DisplayItem from "./DisplayItem";
import Input from "./Input";

const Task2 = () => {
  const [task, setTask] = useState("");
  const [displayText, setDisplayText] = useState("");

  return (
    <div className="task__content">
      <Input task={task} setTask={setTask} setDisplayText={setDisplayText} />
      <DisplayItem displayText={displayText} />
    </div>
  );
};

export default Task2;
