import axios from "axios";
import styles from "./User.module.css";
import PropTypes from "prop-types";
import config from "../config/config";

const User = ({ id, img, name, email,fetchData, dispatch }) => {
  User.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete record?");
    if (confirmed) {
      const res = await axios.delete(`${config.BASE_URL}/${id}`);
      if (res.statusText === "OK") {
        fetchData();
        dispatch({ type: "clear_form" });
      }
    }
  };

  const handleEdit = async (id, name, email) => {
    dispatch({ type: "click_edit", name: name, email: email, tmpId: id });
  };

  return (
    <div className={styles.main}>
      <img src={img} alt={name} />
      <div className={styles.user__details}>
        <h5>{name}</h5>
        <p>{email}</p>
      </div>
      <div>
        <button onClick={() => handleEdit(id, name, email)}>
          <h3>Edit</h3>
        </button>
        <button onClick={() => handleDelete(id)}>
          <h3>Delete</h3>
        </button>
      </div>
    </div>
  );
};

export default User;
