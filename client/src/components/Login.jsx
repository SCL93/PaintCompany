import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Login.css";
import { useGlobalContext } from "../context";

const Login = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setRoles } = useGlobalContext();

  // maps DB permissions to strings for easy viewing
  function mapPermissions(input) {
    let permissions;
    switch (input) {
      case 1:
        permissions = "view";
        break;
      case 2:
        permissions = "view/edit";
        break;
      case 3:
        permissions = "admin";
        break;
      default:
        permissions = "view";
    }
    return permissions;
  }

  const handleSubmit = () => {
    axios
      .post("https://paintcompany.onrender.com/auth/login", {
        username,
        password,
      })
      .then((res) => {
        if (res.data.login) {
          // set global role based on permission on sucessful login
          // redirect to appropriate landing page based on role
          setRoles(mapPermissions(res.data.role));
          if (mapPermissions(res.data.role) === "view") {
            navigate("/paints");
          }
          if (mapPermissions(res.data.role) === "view/edit") {
            navigate("/paints");
          }
          if (mapPermissions(res.data.role) === "admin") {
            navigate("/users");
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-login" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
