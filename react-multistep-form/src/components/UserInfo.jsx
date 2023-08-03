import { useData } from "../context/UserData";

const UserInfo = () => {
  const { data, handleChange } = useData();
  return (
    <div className="w-80">
      <div className="flex flex-col m-2">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          className="text-slate-950"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col m-2">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          className="text-slate-950"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col m-2">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          className="text-slate-950"
          value={data.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UserInfo;
