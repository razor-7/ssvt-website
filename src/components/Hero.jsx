import React from 'react'
import './Hero.css'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Redefining Logistics Excellence</h1>
        <p className="hero-subtitle">#1 Logistics Partner for a Sustainable Future</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollToSection('solutions')}>Our Solutions</button>
          <button className="btn-secondary" onClick={() => scrollToSection('contact')}>Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
