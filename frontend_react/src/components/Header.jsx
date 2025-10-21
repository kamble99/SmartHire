import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3 px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left side — Brand */}
        <Link className="navbar-brand fw-bold text-primary fs-4" to="/">
          SmartHire
        </Link>

        {/* Center — Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-primary" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-primary" to="/jobs">
                Job List
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-primary" to="/jobform">
                Job Form
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-primary" to="/applications">
                Applications
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-primary" to="/resume-ats">
                Resume ATS
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side — Auth Buttons */}
        <div className="d-flex align-items-center">
          {!accessToken ? (
            <>
              <Button text="Login" class="btn-outline-primary me-2 fw-semibold" url="/login" />
              <Button text="Register" class="btn-primary fw-semibold" url="/register" />
            </>
          ) : (
            <button
              className="btn btn-outline-danger fw-semibold"
              onClick={handleLogout} 
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
