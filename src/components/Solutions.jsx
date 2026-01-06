import React from 'react'
import './Solutions.css'

function Solutions() {
  const solutions = [
    {
      title: 'Renewable Logistics',
      description: 'Leading renewable energy logistics provider with expert solutions for wind, solar, and hydro projects.',
      icon: '🌱',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80'
    },
    {
      title: 'Project & Heavy Lift',
      description: 'Extensive experience guarantees reliable and safe logistics of oversized and heavy cargo movements.',
      icon: '🏗️',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80'
    },
    {
      title: 'General Transportation',
      description: 'Comprehensive fleet offering solutions to a wide range of businesses and industrial sectors.',
      icon: '🚚',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=80'
    },
    {
      title: 'International Freight Forwarding',
      description: 'Unmatched multimodal solutions, handling any cargo regardless of size, anywhere, anytime.',
      icon: '✈️',
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&q=80'
    },
    {
      title: 'Customs House Agents',
      description: 'Excellence in customs brokerage and clearance, leveraging deep expertise for efficient shipments.',
      icon: '📋',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80'
    },
    {
      title: '3PL & Warehousing',
      description: 'Comprehensive range of warehousing services with complete supply chain management solutions.',
      icon: '📦',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80'
    },
    {
      title: 'Chartering Solutions',
      description: 'Comprehensive break-bulk and dry bulk services globally, supported by experienced workforce.',
      icon: '🚢',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&q=80'
    },
    {
      title: 'Port Agency',
      description: 'Meticulous management of maritime cargo, ensuring seamless delivery from dock to destination.',
      icon: '⚓',
      image: 'https://images.unsplash.com/photo-1585314062604-1a357de8b000?w=400&q=80'
    },
    {
      title: 'Cranes & Lifts',
      description: 'Expert in erection, installation and commissioning, specializing in various cranes and lifts.',
      icon: '🏗️',
      image: 'https://images.unsplash.com/photo-1590496793929-8c14d2eb6a3d?w=400&q=80'
    }
  ]

  return (
    <section className="solutions" id="solutions">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2>Our Solutions</h2>
          <p>
            With a deep understanding of modern logistics complexities, we offer specialized
            services that expertly manage every aspect of your logistics needs, ensuring
            efficiency and reliability at every stage.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-image" style={{ backgroundImage: `url(${solution.image})` }}>
                <div className="solution-overlay">
                  <div className="solution-icon">{solution.icon}</div>
                </div>
              </div>
              <div className="solution-content">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <button className="learn-more">Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
