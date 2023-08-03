import React, { useState } from "react";
import Input from "./Input";
import DisplayItem from "./DisplayItem";

const Task3 = () => {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (value) => {
    setTasks((prev) => [...prev, value]);
  };

  return (
    <div className="task__content">
      <Input handleAdd={handleAdd} />
      <DisplayItem tasks={tasks} />
    </div>
  );
};

export default Task3;
