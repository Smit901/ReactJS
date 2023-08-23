import React, { useState, createContext, useContext, useEffect } from "react";
import config from "../config/config";
import axios from "axios";

const UsersData = createContext([]);

const UsersContext = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    const data = await axios(`${config.BASE_URL}`);
    setUsers(data.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  // getUserData();

  const addUser = async (data) => {
    const res = await axios.post(`${config.BASE_URL}`, data);
    if (res.statusText === "Created") {
      getUserData();
    }
    // console.log("add user");
    // let id = users[users.length - 1].id + 1;
    // setUsers((prev) => [...prev, { id, ...data }]);
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(`${config.BASE_URL}/${id}`);
    if (res.statusText === "OK") {
      getUserData();
    }
    // const confirmed = window.confirm("Are you sure you want to delete record?");
    // if (true) {
    //   const data = users.filter((val) => val.id !== id);
    //   setUsers(data);
    // }
  };

  const editUser = async (id, data) => {
    const res = await axios.patch(`${config.BASE_URL}/${id}`, data);
    if (res.statusText === "OK") {
      getUserData();
    }
    // const updatedData = users.map((val) => (+val.id === +id ? data : val));
    // setUsers(updatedData);
  };

  return (
    <UsersData.Provider value={{ users, addUser, deleteUser, editUser }}>
      {children}
    </UsersData.Provider>
  );
};

export function useContextData() {
  const contextValue = useContext(UsersData);
  return contextValue;
}

export default UsersContext;
