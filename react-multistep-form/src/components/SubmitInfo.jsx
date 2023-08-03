import { useData } from "../context/UserData";

const SubmitInfo = () => {
  const { data } = useData();
  // console.log(data);
  return (
    <div className="w-80">
      <div className="flex justify-around m-2">
        <label>Name:</label>
        <p>{data.name}</p>
      </div>
      <div className="flex justify-around m-2">
        <label>Email:</label>
        <p>{data.email}</p>
      </div>
      <div className="flex justify-around m-2">
        <label>Password:</label>
        <p>{data.password}</p>
      </div>
      <div className="flex justify-around m-2">
        <label>Address:</label>
        <p>{data.address}</p>
      </div>
      <div className="flex justify-around m-2">
        <label>Phone_no:</label>
        <p>{data.phone_no}</p>
      </div>
      <div className="flex justify-around m-2">
        <label>State:</label>
        <p>{data.state}</p>
      </div>
      <div className="flex justify-around m-2">
        <label>City:</label>
        <p>{data.city}</p>
      </div>
    </div>
  );
};

export default SubmitInfo;
