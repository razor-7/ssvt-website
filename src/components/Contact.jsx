import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      interest: '',
      message: ''
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Start the Conversation</h2>
          <p>Fill out the form below, and our team will get back to you promptly to discuss your logistics needs.</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Area Of Interest *</option>
                  <option value="renewable">Renewable Logistics</option>
                  <option value="project">Project Cargo</option>
                  <option value="general">General Cargo</option>
                  <option value="freight">Freight Forwarding</option>
                  <option value="customs">Customs House Agent</option>
                  <option value="chartering">Breakbulk & Chartering</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Contact Us</button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3>Head Office</h3>
              <p>📍 123 Business Tower, Main Street<br/>City, State 12345</p>
              <p>📞 <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
              <p>✉️ <a href="mailto:info@ssvt.com">info@ssvt.com</a></p>
            </div>

            <div className="info-card">
              <h3>Corporate Office</h3>
              <p>📍 456 Corporate Plaza, Business District<br/>City, State 67890</p>
              <p>📞 <a href="tel:+15559876543">+1 (555) 987-6543</a></p>
              <p>✉️ <a href="mailto:corporate@ssvt.com">corporate@ssvt.com</a></p>
            </div>

            <div className="download-brochure">
              <h4>Download Brochure</h4>
              <button className="download-btn">📥 Download</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
