import { useId } from "react";
import axios from "axios";
import styles from "./Form.module.css";
import config from "../config/config";

const Form = ({ name, email, tmpId, isEdit, fetchData, dispatch }) => {
  const id = useId();
  const handleAdd = async (name, email) => {
    if (!name || !email) return;
    const id = Math.random();
    const data = {
      id: id,
      name: name,
      email: email,
      avatar: `https://i.pravatar.cc/48?u=${id}`,
    };
    const res = await axios.post(`${config.BASE_URL}`, data);
    if (res.statusText === "Created") {
      dispatch({ type: "clear_form" });
      fetchData();
    }
  };

  const handleUpdate = async () => {
    if (!name || !email || !tmpId) return;

    const data = {
      id: tmpId,
      name: name,
      email: email,
      avatar: `https://i.pravatar.cc/48?u=${tmpId}`,
    };
    const res = await axios.patch(`${config.BASE_URL}/${tmpId}`, data);
    if (res.statusText === "OK") {
      fetchData();
      dispatch({ type: "clear_form" });
    }
  };

  const handleCancle = (e) => {
    e.preventDefault();
    dispatch({ type: "click_cancle" });
  };

  return (
    <div className={styles.form}>
      <center>
        <h1>{isEdit ? "Edit User" : "Add new user"}</h1>
      </center>
      <label htmlFor={`${id}--name`}>Name:</label>
      <input
        id={`${id}--name`}
        type="text"
        placeholder="name..."
        value={name}
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
      />
      <br />
      <label htmlFor={`${id}--email`}>Email:</label>
      <input
        id={`${id}--email`}
        type="email"
        placeholder="email..."
        value={email}
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
      />
      <br />
      {isEdit ? (
        <div style={{ display: "flex" }}>
          <button onClick={handleCancle}>Cancle</button>
          &nbsp;&nbsp;
          <button type="submit" onClick={handleUpdate}>
            Update
          </button>
        </div>
      ) : (
        <button type="submit" onClick={() => handleAdd(name, email)}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Form;
