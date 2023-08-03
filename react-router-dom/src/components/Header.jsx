// import React from 'react'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <nav className="navigation">
        <NavLink to="/Unsplash">Unsplash</NavLink>
        <NavLink to="/Pexels">Pexels</NavLink>
        <NavLink to="/Nasa">Nasa</NavLink>
    </nav>
  )
}

export default Header