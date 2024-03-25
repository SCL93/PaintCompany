import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { toast } from "react-toastify";
import "../../css/AddEditCard.css";

const EditUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { roles } = useGlobalContext();

  // get selected user, then populate form with user values
  useEffect(() => {
    axios
      .get("https://paintcompany.onrender.com/user/user/" + id)
      .then((res) => {
        setUsername(res.data.username);
        setRole(res.data.role);
      })
      .catch((err) => console.log(err));
  }, []);

  // include global "roles" in req.body for backend permission validation
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://paintcompany.onrender.com/user/user/" + id, {
        username,
        password,
        role,
        roles,
      })
      .then((res) => {
        if (res.data.updated) {
          toast.success("Edit Sucessful", {
            position: "top-center",
            toastId: "edit",
          });
          navigate("/users");
        } else {
          toast.error("Edit Error", {
            position: "top-center",
            toastId: "edit",
          });
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="user-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Edit User</h2>
        <div className="form-group">
          <label htmlFor="user">Username:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={username}
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
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value={1}>View</option>
            <option value={2}>View/Edit</option>
            <option value={3}>Admin</option>
          </select>
        </div>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditUser;
