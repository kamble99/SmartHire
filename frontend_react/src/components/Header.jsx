import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
      <div className="container-fluid">
        {/* Left side - Website Name */}
        <a className="navbar-brand fw-bold text-primary" >
          SmartHire
        </a>

        {/* Right side - Register & Login */}
        <div className="d-flex ms-auto">
          <a to="/register" className="btn btn-outline-primary me-2">
            Register
          </a>
          <a to="/login" className="btn btn-primary">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
