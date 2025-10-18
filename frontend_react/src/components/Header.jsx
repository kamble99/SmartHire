import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";



const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
      <div className="container-fluid">
        {/* Left side - Website Name */}
        <Link className="navbar-brand fw-bold text-primary" to='/'>
          SmartHire
        </Link>

        {/* Right side - Register & Login */}
        <div className="d-flex ms-auto">
          <Button text='Login' class=' btn-outline-primary me-2 ' url='/login'/>
          
          <Button text='Register' to="/register" class="btn-primary " url='/register'/>
        </div>
      </div>  
    </nav>
  );
};

export default Header;
