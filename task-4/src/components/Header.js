import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__container">
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/user">User</NavLink>
      </ul>
    </div>
  );
};

export default Header;
