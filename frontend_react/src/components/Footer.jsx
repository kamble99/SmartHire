import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start border-top py-3 mt-auto w-100">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left side - Website name */}
        <span className="text-primary fw-bold">SmartHire</span>

        {/* Right side - Copyright */}
        <small className="text-muted">
          © {new Date().getFullYear()} SmartHire. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
