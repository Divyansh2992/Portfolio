import '../Project/Project.css';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section container-fluid mt-5">
      <div className="row">
        <h1 className="text-center mb-5">Achievements</h1>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="project-card-container">
              <div className="card project-card h-100">
                <div className="card-image-container">
                  <img src="/images/SparkathonCertificate.png" className="card-img-top" alt="Walmart Sparkathon 2025" />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Walmart Sparkathon 2025</h5>
                  <p className="card-text">Finalist / Qualified for the Grand Jury Round</p>
                  <a href="/Divyansh_Vijay_sparkathon_WM_2025.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="project-card-container">
              <div className="card project-card h-100">
                <div className="card-image-container">
                  <img src="/Web%20Wonder%20Certificate.jpg" className="card-img-top" alt="Web Wonder Hackathon Certificate" />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">WebWonder Hackathon</h5>
                  <p className="card-text">Finalist in the Web Wonder Hackathon 2024</p>
                  <a href="/Web%20Wonder%20Certificate.jpg" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
