import React, { useState, createContext, useContext } from "react";

const UsersData = createContext([]);

const UsersContext = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Smit Dudhat",
      email: "smitdudhdat10@gmail.com",
      password: "12345678",
      pic: "https://res-console.cloudinary.com/dkszzqegh/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/eGphb3g1bW5lbXJjcWM2cndxaW0=/template_primary",
    },
  ]);

  const addUser = (data) => {
    console.log("add user");
    setUsers((prev) => [...prev, { id: prev.length + 1, ...data }]);
  };

  const deleteUser = (id) => {
    console.log("deleteUser");
    const confirmed = window.confirm("Are you sure you want to delete record?");
    if (confirmed) {
      const data = users.filter((val) => val.id !== id);
      setUsers(data);
    }
  };

  const editUser = (id, data) => {
    const updatedData = users.map((val) => (+val.id === +id ? data : val));
    setUsers(updatedData);
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
