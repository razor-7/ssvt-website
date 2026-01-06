import React from 'react'
import './Vision.css'

function Vision() {
  return (
    <section className="vision" id="about">
      <div className="vision-container">
        <div className="vision-header">
          <h2>From Vision to Reality: Leading with Excellence</h2>
          <p className="vision-intro">
            SSVT, a name synonymous with excellence in specialized transportation,
            has consistently pushed the limits of what's possible in logistics. From
            handling complex cargo to spearheading innovative projects and optimizing supply
            chain management, SSVT has become a cornerstone of innovation and dependability.
          </p>
        </div>

        <div className="vision-stats">
          <div className="stat-card">
            <h3>25+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>Successful Projects</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Countries Served</p>
          </div>
          <div className="stat-card">
            <h3>98%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>

        <div className="vision-features">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Innovation First</h3>
            <p>Leveraging cutting-edge technology and innovative solutions to deliver exceptional logistics services.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Reach</h3>
            <p>Comprehensive worldwide network ensuring seamless operations across continents.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Reliable & Fast</h3>
            <p>Committed to delivering on time, every time, with unmatched reliability and efficiency.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Customer Focus</h3>
            <p>Building lasting partnerships through personalized service and dedicated support.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
