import React, { useEffect, useState } from "react";
import { useContextData } from "../../context/UsersContext";
import { useNavigate, useParams } from "react-router-dom";
import { isEmpty } from "lodash";

const UserDetails = () => {
  const navigate = useNavigate();
  const { users } = useContextData();
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    const data = users.filter((val) => +val.id === +id);
    setUser(data[0]);
    console.log(data);
  }, [users, id]);

  return (
    <div className="content__container">
      <div className="container__header">
        <center>
          <h1>User details</h1>
        </center>
        <button className="button-17" onClick={() => navigate(-1)}>
          back
        </button>
      </div>
      <div className="user__container">
        {!isEmpty(user) ? (
          <div className="user__details">
            <div>
              <img src={user.pic} alt="" height="300" width="500" />
            </div>
            <div className="user__subdetails">
              <div>
                <label>Name:- </label>
                <p>{user.name}</p>
              </div>
              <br />
              <div>
                <label>Email:- </label>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        ) : (
          <center>
            <h2>User not found...</h2>
          </center>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
