import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  
  const navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const LoginData = { username, password };
    console.log("LoginData==>", LoginData);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", LoginData);
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      setError({});

      navigate("/");
      

    } catch (error) {

      console.error("Login Error ==>", error);
      
    }finally{
      setLoading(false);
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="col-md-6 mx-auto">
          <div className="card shadow-lg rounded-4 border-0">
            <div className="card-body p-4">
              <h3 className="text-center text-primary mb-4">Login to SmartHire</h3>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={HandleLogin}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                 
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                 
                </div>

                <div className="d-grid mb-3">
                  {error && <div className="alert alert-danger">{error}</div>}
                      {loading ? (
                        <button type="submit" className="btn btn-primary btn-lg" disabled>
                          <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                          Please wait...
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-primary btn-lg">
                          Login
                        </button>
                      )}
                    </div>
              </form>
             

              <div className="text-center mt-3">
                <span>Don't have an account? </span>
                <Link to="/register" className="fw-bold text-primary">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
