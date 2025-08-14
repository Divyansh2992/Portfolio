import ParticlesBackground from './ParticlesBackground';
import HeroSection from './HeroSection';

export default function Home() {
  return (
    <section id="home" className="home-section">
      {/* Particles Container */}
      <div className="particles-container">
        <ParticlesBackground />
      </div>

      {/* Hero Section */}
      <HeroSection />
    </section>
  );
}