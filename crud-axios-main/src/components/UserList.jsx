import User from "./User";

const UserList = ({users,fetchData,dispatch}) => {

  
  return (
    <div>
      {users.map((val) => (
        <User
          key={val.id}
          id={val.id}
          img={val.avatar}
          name={val.name}
          email={val.email}
          fetchData={fetchData}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default UserList;
