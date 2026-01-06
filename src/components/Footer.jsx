import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SSVT</h3>
            <p>Leading the way in specialized logistics and transportation solutions.</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="Twitter">tw</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#renewable">Renewable Logistics</a></li>
              <li><a href="#project">Project & Heavy Lift</a></li>
              <li><a href="#freight">Freight Forwarding</a></li>
              <li><a href="#warehouse">Warehousing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📍 123 Business District</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ info@ssvt.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 SSVT. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
