import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-background">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-image-container">
              <img 
                src="/images/divyansh.jpg" 
                alt="Divyansh Vijay" 
                className="hero-avatar"
              />
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-text">
              <div className="hello-text">
                <span className="arrow">↪</span>
                <span>Hello! I Am Divyansh Vijay</span>
              </div>
              <div className="visionary-text">A Visionary who</div>
              <div className="main-text">
                <span>Turns Ideas into</span>
                <span className="highlight">Interfaces</span>
              </div>
              <div className="tagline">Because what you imagine should be what you see.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
