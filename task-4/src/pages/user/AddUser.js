import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContextData } from "../../context/UsersContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import TextField from "@mui/material/TextField";

const AddUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users, addUser, editUser } = useContextData();
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState("");
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (!isEmpty(id)) {
      setIsEdit(true);
      const data = users.filter((val) => +val.id === +id);
      if (isEmpty(data)) {
        setError("Invalid user id!");
        // setDefaultValue({ name: "", email: "", password: "" });
      } else {
        setPic(data[0].pic);
        setValue("name", data[0].name);
        setValue("email", data[0].email);
        setValue("password", data[0].password);
      }
    } else {
      setIsEdit(false);
    }
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email address is invalid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, setValue, formState } =
    useForm(formOptions);
  const { errors } = formState;

  const postDetails = (pics) => {
    setLoading(true);

    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "mern-chat-app");
      data.append("cloud_name", "dkszzqegh");
      fetch("https://api.cloudinary.com/v1_1/dkszzqegh/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    const userData = {
      ...data,
      pic: pic,
    };
    console.log(userData);
    if (pic !== "") {
      if (isEdit) {
        editUser(id, { id, ...userData });
        setPic("");
        toast.success("User updated...");
        navigate(-1);
      } else {
        addUser(userData);
        reset();
        toast.success("User added...");
        navigate(-1);
      }
    } else {
      toast.error("Please Select an Image!");
    }
  };

  return (
    <div className="content__container">
      <div className="container__header">
        <center>
          <h1>{!isEdit ? "Add User" : "Edit User"}</h1>
        </center>
        <button className="button-17" onClick={() => navigate(-1)}>
          back
        </button>
      </div>
      {!isEmpty(error) ? (
        <center>
          <h3>{error}</h3>
        </center>
      ) : (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__field">
            <label htmlFor="name">Name</label>
            <br />
            <TextField
              id="name"
              type="text"
              label="name"
              variant="outlined"
              {...register("name")}
            />
            <p className="error__message">{errors.name?.message}</p>
          </div>
          <div className="form__field">
            <label htmlFor="email">Email</label>
            <br />
            <TextField
              id="email"
              type="text"
              label="email"
              variant="outlined"
              {...register("email")}
            />
            <p className="error__message">{errors.email?.message}</p>
          </div>
          <div className="form__field">
            <label htmlFor="password">Password</label>
            <br />
            <TextField
              id="password"
              type="password"
              label="password"
              variant="outlined"
              {...register("password")}
            />
            <p className="error__message">{errors.password?.message}</p>
          </div>
          {pic && (
            <div className="form__field">
              <img src={pic} alt="" height={150} width={200} />
            </div>
          )}

          <div className="form__field">
            <label htmlFor="pic">Upload your Picture</label>
            <input
              id="pic"
              type="file"
              name="pic"
              accept="image/*"
              onChange={(e) => postDetails(e.target.files[0])}
            />
            <p>{loading && "Loading..."}</p>
          </div>
          <br />
          <div className="form__field">
            <button type="submit" className="button-17">
              Submit
            </button>
          </div>
          <br />
          <br />
        </form>
      )}

      <Toaster
        position="top-center"
        containerStyle={{
          top: 10,
        }}
        reverseOrder={true}
      />
    </div>
  );
};

export default AddUser;
