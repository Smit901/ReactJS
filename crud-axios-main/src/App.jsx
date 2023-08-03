import { useEffect, useReducer } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";
import UserList from "./components/UserList";
import config from "./config/config";

const initialValue = {
  users: [],
  name: "",
  email: "",
  isEdit: false,
  tmpId: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "users":
      return { ...state, users: action.payload };
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "click_edit":
      return {
        ...state,
        name: action.name,
        email: action.email,
        isEdit: true,
        tmpId: action.tmpId,
      };
    case "click_cancle":
      return { ...state, name: "", email: "", isEdit: false, tmpId: "" };
    case "clear_form":
      return { ...state, name: "", email: "", tmpId: "", isEdit: false };
    default:
      throw new Error("Unknown action type...");
  }
};

function App() {
  const [{ name, email, isEdit, users, tmpId }, dispatch] = useReducer(
    reducer,
    initialValue
  );

  // const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const data = await axios(`${config.BASE_URL}`);
    if (data.data) dispatch({ type: "users", payload: data.data });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Form name={name} email={email} tmpId={tmpId} dispatch={dispatch} isEdit={isEdit} fetchData={fetchData} />
      <UserList users={users} dispatch={dispatch} fetchData={fetchData} />
    </>
  );
}

export default App;
