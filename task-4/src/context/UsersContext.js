import React, { useState, createContext, useContext } from "react";

const UsersData = createContext([]);

const UsersContext = ({ children }) => {
  const [users, setUsers] = useState([
    {
      "id": 1,
      "name": "Terry",
      "email": "atuny0@sohu.com",
      "password": "9uQFF1Lh",
      "pic": "https://robohash.org/hicveldicta.png"
    },
    {
      "id": 2,
      "name": "Sheldon",
      "email": "hbingley1@plala.or.jp",
      "password": "CQutx25i8r",
      "pic": "https://robohash.org/doloremquesintcorrupti.png"
    },
    {
      "id": 3,
      "name": "Terrill",
      "email": "rshawe2@51.la",
      "password": "OWsTbMUgFc",
      "pic": "https://robohash.org/consequunturautconsequatur.png"
    },
    {
      "id": 4,
      "name": "Miles",
      "email": "yraigatt3@nature.com",
      "password": "sRQxjPfdS",
      "pic": "https://robohash.org/facilisdignissimosdolore.png"
    },
    {
      "id": 5,
      "name": "Mavis",
      "email": "kmeus4@upenn.edu",
      "password": "aUTdmmmbH",
      "pic": "https://robohash.org/adverovelit.png"
     },
    {
      "id": 6,
      "name": "Alison",
      "email": "jtreleven5@nhs.uk",
      "password": "zY1nE46Zm",
      "pic": "https://robohash.org/laboriosamfacilisrem.png"
    },
    {
      "id": 7,
      "name": "Oleta",
      "email": "dpettegre6@columbia.edu",
      "password": "YVmhktgYVS",
      "pic": "https://robohash.org/cupiditatererumquos.png"
     },
    {
      "id": 8,
      "name": "Ewell",
      "email": "ggude7@chron.com",
      "password": "MWwlaeWcOoF6",
      "pic": "https://robohash.org/quiaharumsapiente.png"
     },
    {
      "id": 9,
      "name": "Demetrius",
      "email": "nloiterton8@aol.com",
      "password": "HTQxxXV9Bq4",
      "pic": "https://robohash.org/excepturiiuremolestiae.png"
     },
    {
      "id": 10,
      "name": "Eleanora",
      "lastName": "Price",
      "email": "umcgourty9@jalbum.net",
      "password": "i0xzpX",
      "pic": "https://robohash.org/aliquamcumqueiure.png"
    },
    {
      "id": 11,
      "name": "Marcel",
      "email": "acharlota@liveinternet.ru",
      "password": "M9lbMdydMN",
      "pic": "https://robohash.org/impeditautest.png"
      },
    {
      "id": 12,
      "name": "Assunta",
      "email": "rhallawellb@dropbox.com",
      "password": "esTkitT1r",
      "pic": "https://robohash.org/namquaerataut.png",
    }
  ]);

  const addUser = (data) => {
    console.log("add user");
    let id = users[users.length-1].id + 1;
    setUsers((prev) => [...prev, { id, ...data }]);
  };

  const deleteUser = (id) => {
    console.log("deleteUser");
    // const confirmed = window.confirm("Are you sure you want to delete record?");
    if (true) {
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
