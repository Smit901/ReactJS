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
  const [filteredUser, setFilteredUser] = useState(users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  let pageNo = searchParams.get("pageNo");
  let searchString = searchParams.get("search");
  let recordLimit = searchParams.get("recordLimit");

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [pageLimit, setPageLimit] = useState(5);

  const defalutQueryString = {
    pageNo: page,
    recordLimit: pageLimit,
  };

  useEffect(() => {
    // Check if any of the default parameters are not present in the URL
    for (const [key, value] of Object.entries(defalutQueryString)) {
      if (!searchParams.has(key)) {
        searchParams.set(key, value);
      }
    }
    // Update the URL with the default query parameters
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    setPage(pageNo);
    setSearch(searchString);
    setPageLimit(recordLimit);
    if (!searchString) {
      setSearch("");
    }
  }, [pageNo, searchString, recordLimit]);

  useEffect(() => {
    const escapedSearch = escapeRegExp(search);
    // console.log(escapedSearch);
    const regex = new RegExp(escapedSearch, "i"); // "i" flag for case-insensitive matching
    const result = users.filter((val) => {
      return val["name"].match(regex);
    });
    setFilteredUser(result);
    if (
      result.slice(+page * pageLimit - pageLimit, +page * pageLimit).length ===
      0
    ) {
      searchParams.set("pageNo", 1);
      setSearchParams(searchParams);
    }
  }, [search, users]);

  // ! Delete
  useEffect(() => {
    if (!isEmpty(id)) {
      setIsModalOpen(true);
    }
  }, [id]);

  const handleChange = (event, value) => {
    searchParams.set("pageNo", value);
    setSearchParams(searchParams);
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

  const handlePageLimit = (e) => {
    const val = +e.target.value;
    searchParams.set("recordLimit", val);
    setSearchParams(searchParams);
    if (filteredUser.slice(+page * val - val, +page * val).length === 0) {
      searchParams.set("pageNo", 1);
      setSearchParams(searchParams);
    }
  };

  const handleSearch = (e) => {
    const val = e.target.value;
    searchParams.set("search", val);
    setSearchParams(searchParams);
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
        onChange={handleSearch}
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
              {filteredUser
                .slice(+page * pageLimit - pageLimit, +page * pageLimit)
                .map((val) => {
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
          count={Math.ceil(filteredUser.length / pageLimit)}
          page={+page}
          onChange={handleChange}
        />
        &nbsp;&nbsp;&nbsp;
        <select value={pageLimit} onChange={handlePageLimit}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayUser;
