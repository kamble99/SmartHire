import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="bg-light text-dark border-top pt-5 pb-3 mt-auto w-100">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-primary">SmartHire</h5>
            <p className="text-muted">
              SmartHire is an AI-powered recruitment platform that helps companies
              automate hiring — from job posting and candidate matching to
              interview scheduling and communication.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-primary">Contact Us</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                support@smarthire.com
              </li>
              <li>
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                +91 9324862643
              </li>
              <li>
                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                Navi Mumbai , Maharashtra, India
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-primary">Follow Us</h5>
            <div>
              <a href="#" className="text-dark me-3 fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark me-3 fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/sahilkamble05/" className="text-dark me-3 fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />
        <div className="text-center text-muted">
          <small>
            © {new Date().getFullYear()} SmartHire. 2025@All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
