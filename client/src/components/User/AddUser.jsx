import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { toast } from "react-toastify";
import "../../css/AddEditCard.css";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(1);
  const navigate = useNavigate();
  const { roles } = useGlobalContext();

  // include global roles in req.body for backend permission validation
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://paintcompany.onrender.com/user/add", {
        username,
        password,
        role,
        roles,
      })
      .then((res) => {
        if (res.data.added) {
          toast.success("Add Successful", {
            position: "top-center",
            toastId: "add",
          });
          navigate("/users");
        } else {
          toast.error("Add Error", {
            position: "top-center",
            toastId: "add",
          });
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="user-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Permissions:</label>
          <select
            name="role"
            id="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value={1}>View</option>
            <option value={2}>View/Edit</option>
            <option value={3}>Admin</option>
          </select>
        </div>
        <button type="submit">Add </button>
      </form>
    </div>
  );
};

export default AddUser;
