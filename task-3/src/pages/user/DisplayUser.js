import React from "react";
import { useContextData } from "../../context/UsersContext";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const DisplayUser = () => {
  const { users, deleteUser } = useContextData();
  const navigate = useNavigate();
  return (
    <div className="content__container">
      <div className="user__header">
        <h1>Users</h1>
        <button className="button-17" onClick={() => navigate("/user/add")}>
          Add new user
        </button>
      </div>
      <div className="sub__container">
        {users.map((val, index) => {
          return (
            <div className="user__card" key={index}>
              <img
                src={val.pic}
                alt=""
                onClick={() => navigate(`/user/${val.id}`)}
              />
              <br />
              <div className="detail__container">
                <div>
                  <h4>{val.name}</h4>
                </div>
                <div>
                  <EditOutlined
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/user/edit/${val.id}`)}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <DeleteOutlined
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteUser(val.id)}
                  />
                </div>
              </div>

              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayUser;
