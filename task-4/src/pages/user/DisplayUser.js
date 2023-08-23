import React, { useEffect, useState } from "react";
import { useContextData } from "../../context/UsersContext";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { escapeRegExp, isEmpty } from "lodash";
import { Modal } from "antd";
import Pagination from "@mui/material/Pagination";

const DisplayUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, deleteUser } = useContextData();
  const [search, setSearch] = useState("");
  const [filteredUser, setFilteredUser] = useState(users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);

  let pageNo = searchParams.get("pageNo");
  let searchString = searchParams.get("search");

  useEffect(() => {
    const escapedSearch = escapeRegExp(search);
    // console.log(escapedSearch);
    const regex = new RegExp(escapedSearch, "i"); // "i" flag for case-insensitive matching
    const result = users.filter((val) => {
      return val["name"].match(regex);
    });
    setFilteredUser(result);
    if (search) {
      setSearchParams({ pageNo: page, search: search });
      if (Math.ceil(result.length / 5) < +pageNo) {
        setSearchParams({ pageNo: 1, search: search });
      }
    } else {
      setSearchParams({ pageNo: pageNo });
    }
  }, [search, users]);

  useEffect(() => {
    if (isEmpty(pageNo)) {
      setSearchParams({ pageNo: page });
    } else {
      setPage(pageNo);
    }
    if (!isEmpty(searchString)) setSearch(searchString);
  }, [pageNo]);

  useEffect(() => {
    let searchString = searchParams.get("search");

    if (searchString) {
      setSearch(searchString);
    }
  }, []);

  useEffect(() => {
    if (!isEmpty(id)) {
      setIsModalOpen(true);
    }
  }, [id]);

  const handleChange = (event, value) => {
    setPage(value);
    if (search) {
      setSearchParams({ pageNo: value, search: search });
    } else {
      setSearchParams({ pageNo: value });
    }
  };

  const handleOk = () => {
    deleteUser(+id);
    navigate("/user");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    navigate("/user");
    setIsModalOpen(false);
  };

  return (
    <div className="content__container">
      {!isEmpty(id) && (
        <Modal
          title="Delete"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {/* <div className="delete__modal">
            <br />
            <img src={users[id - 1].pic} alt="" height={100} width={150} />
            <br />
            <label>
              Name: <strong>{users[id - 1].name}</strong>
            </label>
            <br />
            <label>
              Email: <strong>{users[id - 1].email}</strong>
            </label>
          </div>
          <br />
          <br /> */}
          <p style={{ color: "red" }}>
            Are you sure you want to delete record?
          </p>
        </Modal>
      )}

      <div className="user__header">
        <h1>Users</h1>
        <button className="button-17" onClick={() => navigate("/user/add")}>
          Add new user
        </button>
      </div>
      <TextField
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label="Search here"
        variant="standard"
      />
      <div className="data__table">
        {!isEmpty(filteredUser) && (
          <table>
            <tbody>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Email</th>
                <th>Profile Image</th>
                <th>Actions</th>
              </tr>
              {filteredUser.slice(+page * 5 - 5, +page * 5).map((val) => {
                return (
                  <tr key={val.id}>
                    <td>
                      <center>{val.id}</center>
                    </td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>
                      <img src={val.pic} alt="" height={100} width={100} />
                    </td>
                    <td>
                      {" "}
                      <img
                        src="/delete.png"
                        alt=""
                        height={35}
                        width={35}
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`/user/delete/${val.id}`)}
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <img
                        src="/edit2.png"
                        alt=""
                        height={35}
                        width={35}
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`/user/edit/${val.id}`)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {isEmpty(filteredUser) && (
          <div style={{ padding: "20px" }}>
            <center>
              <h3>user not found!</h3>
            </center>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination
          count={Math.ceil(filteredUser.length / 5)}
          page={+page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default DisplayUser;
