import { useData } from "../context/UserData";

const AddressInfo = () => {
  const { data, handleChange } = useData();
  return (
    <div className="w-80">
      <div className="flex flex-col m-2">
        <label>Address:</label>
        <input
          type="text"
          name="address"
          className="text-slate-950"
          value={data.address}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col m-2">
        <label>Phone_no:</label>
        <input
          type="number"
          name="phone_no"
          className="text-slate-950"
          value={data.phone_no}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col m-2">
        <label>State:</label>
        <input
          type="text"
          name="state"
          className="text-slate-950"
          value={data.state}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col m-2">
        <label>City:</label>
        <input
          type="text"
          name="city"
          className="text-slate-950"
          value={data.city}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AddressInfo;
