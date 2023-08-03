import React from "react";

const DisplayItem = ({ tasks, handleDelete }) => {
  return (
    <div>
      {tasks.map((val, index) => (
        <div key={val.id} className="tasklist__container">
          <div className="button-89">
            <center>
              <p>{val.value}</p>
            </center>
          </div>
          <div className="remove__item" onClick={() => handleDelete(val.id)}>
          &times;
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayItem;
