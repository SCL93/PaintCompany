import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import "../css/Navbar.css";

// nav is role-based (along backend verification)

const NavBar = () => {
  const { roles } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div>Paint Company</div>
      </div>
      <div className="navbar-right">
        {roles === "view" && (
          <>
            <Link to="/paints" className="nav-bar link">
              Paints
            </Link>
          </>
        )}
        {roles === "view/edit" && (
          <>
            <Link to="/paints" className="nav-bar link">
              Paints
            </Link>
            <Link to="/addpaint" className="nav-bar link">
              Add Paint
            </Link>
          </>
        )}
        {roles === "admin" && (
          <>
            <NavLink to="/adduser" className="nav-bar link">
              Add User
            </NavLink>
            <NavLink to="/users" className="nav-bar link">
              Users
            </NavLink>
          </>
        )}
        {roles === "" ? (
          <div></div>
        ) : (
          // show logout ONLY when logged in and role is set
          <Link to="/logout" className="nav-bar link">
            Log Out
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
