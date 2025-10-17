import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  return (
    <main className="flex-grow-1">
      {/* About SmartHire Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-primary mb-5"> SmartHire</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
            <strong>SmartHire</strong> is an intelligent recruitment platform that
            automates job posting, candidate management, and interview scheduling
            using <strong>Django REST Framework</strong> for backend APIs and{" "}
            <strong>React</strong> for the frontend. It integrates third-party APIs
            such as <strong>OpenAI API</strong>, <strong>Google Calendar API</strong>,
            and <strong>LinkedIn API</strong> to analyze resumes, schedule interviews,
            and match candidates with the most suitable job roles.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary">Why Choose SmartHire?</h2>
            <p className="text-muted">
              Built with AI to optimize recruitment and save your time.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-robot fs-1 text-primary mb-3"></i>
                  <h5 className="card-title">AI-Powered Screening</h5>
                  <p className="card-text">
                    Our AI automatically filters resumes and ranks candidates
                    based on job descriptions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-speedometer2 fs-1 text-success mb-3"></i>
                  <h5 className="card-title">Fast & Efficient</h5>
                  <p className="card-text">
                    Streamlined workflows for recruiters to post, track, and manage
                    job applications in real-time.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-people-fill fs-1 text-warning mb-3"></i>
                  <h5 className="card-title">Smart Matching</h5>
                  <p className="card-text">
                    Matches candidates to the best-fit jobs using intelligent
                    recommendation algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
