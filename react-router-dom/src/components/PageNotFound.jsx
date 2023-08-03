import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page_not_found">
      <center>page not found</center>
      <br />
      <center>
        <button onClick={() => navigate("/")}>back to homepage</button>
      </center>
    </div> 
  );
};

export default PageNotFound;
