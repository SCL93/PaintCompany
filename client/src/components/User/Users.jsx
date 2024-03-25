import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "../../css/Paint.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://paintcompany.onrender.com/user/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="user-list">
      {users.map((user) => {
        return <UserCard key={user.id} user={user}></UserCard>;
      })}
    </div>
  );
};

export default Users;
