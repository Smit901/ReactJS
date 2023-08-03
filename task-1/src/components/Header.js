import React from "react";

const Header = ({task}) => {
  return (
    <div className="header">
      <div className="header__topic">
        <center>
          <p>
            {task}
          </p>
        </center>
      </div>
    </div>
  );
};

export default Header;
