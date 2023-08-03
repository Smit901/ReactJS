import React, { useState } from "react";
import Input from "./Input";
import DisplayItem from "./DisplayItem";

const Task4 = () => {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (val) => {
    const value = { id: tasks.length + 1, value: val };
    setTasks((prev) => [...prev, value]);
  };

  const handleDelete = (id) => {
    const res = tasks.filter(val=> val.id !== id);
    setTasks(res);
  }

  return (
    <div className="task__content">
      <Input handleAdd={handleAdd} />
      <DisplayItem tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
};

export default Task4;
