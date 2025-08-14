import "../../App.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navmain">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home" style={{ marginLeft: "10%" }}>
            <img src="images/Logo.svg" alt="Logo" className="img-fluid"/>
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginRight: "10%" }}>
              <li className="nav-item">
                <a className="nav-link" href="#home" style={{ color: "#fff" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience" style={{ color: "#fff" }}>
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" style={{ color: "#fff" }}>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" style={{ color: "#fff" }}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" style={{ color: "#fff" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}