import { createContext, useContext, useState } from "react";

const DataProvider = createContext({});

const UserData = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone_no: "",
    state: "",
    city: "",
  });

  const title = {
    0: "User Info",
    1: "Address Info",
    2: "User Details",
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const disableNext =
    (data.name === "" && data.email === "" && data.password === "") ||
    (data.address === "" &&
      data.phone_no === "" &&
      data.state === "" &&
      data.city === "");
      

  return (
    <DataProvider.Provider
      value={{ data, setData, handleChange, title, disableNext }}
    >
      {children}
    </DataProvider.Provider>
  );
};

// eslint-disable-next-line
export const useData = () => {
  return useContext(DataProvider);
};

export default UserData;
