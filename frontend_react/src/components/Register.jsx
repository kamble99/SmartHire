import React, { use } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const [first_name, Setfirstname] = useState("");
  const [last_name, Setlastname] = useState("");
  const [username, Setusername] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [phone_number, Setphone] = useState("");
  const [role, Setrole] = useState("candidate");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const HandleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    const RegistrationData = {
      first_name, last_name, username, email, password, phone_number, role
    }
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", RegistrationData)
      console.log('Response.data==>', response.data)
      console.log('Registration Successfull');
      setError({})
      setSuccess(true);
    } catch (error) {
      setError(error.response.data)
      console.log('Registration Failed', error.response.data);

    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Create Your SmartHire Account</h2>
            <p className="text-muted">
              Join SmartHire today and simplify your recruitment journey.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body p-4">
                  <h4 className="text-center mb-4 text-secondary">Register</h4>

                  <form onSubmit={HandleRegistration}>

                    <div className="row mb-3">
                      <div className="col">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          name="first_name"
                          className="form-control"
                          value={first_name}
                          onChange={(e) => Setfirstname(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          name="last_name"
                          className="form-control"
                          value={last_name}
                          onChange={(e) => Setlastname(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          value={username}
                          onChange={(e) => Setusername(e.target.value)}
                          required
                        />
                        <small>{error.username && <div className="text-danger">{error.username[0]}</div>}</small>
                      </div>


                      <div className="col">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => Setemail(e.target.value)}
                        />
                        <small>{error.email && <div className="text-danger">{error.email[0]}</div>}</small>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => Setpassword(e.target.value)}
                          required
                        />
                        <small>{error.password && <div className="text-danger">{error.password[0]}</div>}</small>
                      </div>

                      <div className="col">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="text"
                          name="phone_number"
                          className="form-control"
                          value={phone_number}
                          onChange={(e) => Setphone(e.target.value)}
                        />
                      </div>
                    </div>


                    <div className="mb-4">
                      <label className="form-label">Role</label>
                      <select
                        name="role"
                        className="form-select"
                        value={role}
                        onChange={(e) => Setrole(e.target.value)}
                      >
                        <option value="candidate">Candidate</option>
                        <option value="recruiter">Recruiter</option>

                      </select>
                    </div>
                    {success && <div className="alert alert-success">Registration Successful! You can now <Link to="/login">login</Link></div>}
                    <div className="d-grid mb-3">
                      {loading ? (
                        <button type="submit" className="btn btn-primary btn-lg" disabled>
                          <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                          Registering...
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-primary btn-lg">
                          Register
                        </button>
                      )}
                    </div>
                    <div className="text-center">
                      <span>Already have an account? </span>
                      <Link to="/login" className="text-primary fw-bold">
                        Login
                      </Link>
                    </div>
                  </form>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register