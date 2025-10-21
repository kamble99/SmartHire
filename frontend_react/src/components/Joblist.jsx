import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/jobs/")
      .then(response => setJobs(response.data))
      .catch(error => console.error("Error fetching jobs:", error));
  }, []);

  const handleViewDetails = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 text-primary">Available Jobs</h1>

      {jobs.length === 0 ? (
        <p className="text-center text-muted">No jobs available right now.</p>
      ) : (
        <div className="row g-4">
          {jobs.map((job) => (
            <div key={job.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text text-truncate" style={{ maxHeight: "4.5em" }}>
                    {job.description}
                  </p>
                  <ul className="list-unstyled mt-2 mb-4 text-muted">
                    <li><strong>Skills:</strong> {job.skills_required}</li>
                    <li><strong>Location:</strong> {job.location}</li>
                    <li><strong>Salary:</strong> ₹{job.salary}</li>
                  </ul>
                  <div className="mt-auto d-flex justify-content-between">
                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleViewDetails(job.id)}>View Details</button>
                    <button className="btn btn-primary btn-sm">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
