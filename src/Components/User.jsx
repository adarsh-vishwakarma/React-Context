import React, { useContext } from "react";
import { userContext } from "../Context/Context";
import { Link } from "react-router-dom";

const User = () => {
  const { users,setUsers } = useContext(userContext);
  return (
    <div>
      <h1 className="text-3xl">User List</h1>
      <div className="flex w-1/2 flex-col mt-10">
        {users.map((item, index) => (
          <Link key={item.id} to={`/user/${item.id}`} className="mb-3 bg-red-100 p-3">
            {item.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
