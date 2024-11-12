import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand">All Users</a>
        <Link to={"/"} className="btn btn-primary">
          Add User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
