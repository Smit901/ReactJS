import React from "react";

const ProgressBar = ({ title, index }) => {
  return (
    <div>
      {index + 1} / {Object.keys(title).length}
    </div>
  );
};

export default ProgressBar;
