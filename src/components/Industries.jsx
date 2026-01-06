import React from 'react'
import './Industries.css'

function Industries() {
  const industries = [
    { name: 'Energy & Power', icon: '⚡', color: '#ff6b6b' },
    { name: 'Manufacturing', icon: '🏭', color: '#4ecdc4' },
    { name: 'Infrastructure', icon: '🏗️', color: '#45b7d1' },
    { name: 'Automotive', icon: '🚗', color: '#f9ca24' },
    { name: 'Technology', icon: '💻', color: '#6c5ce7' },
    { name: 'Agriculture', icon: '🌾', color: '#00b894' }
  ]

  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        <div className="industries-header">
          <h2>Industries We Focus</h2>
          <p>
            SSVT is dedicated to driving progress across various industries, harnessing our
            expertise to deliver innovative solutions and transformative results. Our focus
            extends beyond traditional boundaries, addressing emerging trends and
            opportunities in various sectors to ensure comprehensive growth and advancement.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card" style={{ borderTopColor: industry.color }}>
              <div className="industry-icon" style={{ color: industry.color }}>
                {industry.icon}
              </div>
              <h3>{industry.name}</h3>
            </div>
          ))}
        </div>

        <div className="careers-section">
          <div className="careers-content">
            <h2>Careers at SSVT</h2>
            <p>
              At SSVT, we foster a dynamic and inclusive work environment where innovation and
              collaboration thrive. Join us to be part of a forward-thinking team dedicated to
              excellence, growth, and making a significant impact across diverse industries.
              Explore exciting career opportunities and contribute to our journey of
              transformative success.
            </p>
            <button className="join-us-btn">Join Us →</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries
