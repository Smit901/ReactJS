import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import DisplayUser from "./pages/user/DisplayUser";
import AddUser from "./pages/user/AddUser";
import UserDetails from "./pages/user/UserDetails";
import EditUser from "./pages/user/EditUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<DisplayUser />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
