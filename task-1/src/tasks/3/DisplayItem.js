import React from "react";

const DisplayItem = ({ tasks }) => {
  return (
    <div>
      {tasks.map((val, index) => (
        <div key={index} className="task__list button-89">
          <center>
            <p>{val}</p>
          </center>
        </div>
      ))}
    </div>
  );
};

export default DisplayItem;
