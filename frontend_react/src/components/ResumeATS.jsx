import React, { useState } from "react";
import axios from "axios";

const ResumeATS = () => {
  const [file, setFile] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a resume file.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Mock upload
      await axios.post("http://127.0.0.1:8000/api/resume/upload/", { file: file.name });

      // Get ATS score
      const scoreResponse = await axios.post("http://127.0.0.1:8000/api/ats/score/");
      setAtsScore(scoreResponse.data);

      // Get job suggestions
      const suggestionsResponse = await axios.get("http://127.0.0.1:8000/api/ats/suggestions/");
      setSuggestions(suggestionsResponse.data);
    } catch (err) {
      console.error("Error processing resume:", err);
      setError("Failed to process resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 text-primary">Resume ATS Checker</h1>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow border-0">
            <div className="card-body">
              <h5 className="card-title">Upload Your Resume</h5>
              <p className="card-text">Upload your resume to get an ATS score and personalized job suggestions.</p>

              <div className="mb-3">
                <input
                  type="file"
                  className="form-control"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </div>

              <button
                className="btn btn-primary w-100"
                onClick={handleUpload}
                disabled={loading}
              >
                {loading ? "Processing..." : "Upload & Analyze"}
              </button>

              {error && <p className="text-danger mt-3">{error}</p>}
            </div>
          </div>

          {atsScore && (
            <div className="card shadow border-0 mt-4">
              <div className="card-body">
                <h5 className="card-title">ATS Score</h5>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${atsScore.ats_score}%` }}
                    aria-valuenow={atsScore.ats_score}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {atsScore.ats_score}%
                  </div>
                </div>
                <p>{atsScore.feedback}</p>
              </div>
            </div>
          )}

          {suggestions.length > 0 && (
            <div className="card shadow border-0 mt-4">
              <div className="card-body">
                <h5 className="card-title">Recommended Jobs</h5>
                <div className="list-group">
                  {suggestions.map((job) => (
                    <div key={job.id} className="list-group-item">
                      <h6>{job.title}</h6>
                      <p className="mb-1">{job.description.substring(0, 100)}...</p>
                      <small className="text-muted">Location: {job.location} | Salary: ₹{job.salary}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeATS;
