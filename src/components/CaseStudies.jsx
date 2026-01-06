import React from 'react'
import './CaseStudies.css'

function CaseStudies() {
  const caseStudies = [
    {
      title: 'Navigating Challenges, Delivering Excellence',
      description: 'Successfully transported critical renewable energy components 1,100 km across challenging terrain for a major sustainable energy provider.',
      category: 'Renewable Energy',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80'
    },
    {
      title: 'Delivering Excellence to the Global Stage',
      description: 'Expertly handled the transportation of oversized cultural artifacts 2,500 km for an international summit with precision and care.',
      category: 'Special Projects',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80'
    },
    {
      title: 'Mastering the Transit of Oversized Cargo',
      description: 'Undertook complex logistics solutions for large-scale infrastructure equipment for an upcoming technology center project.',
      category: 'Heavy Lift',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80'
    },
    {
      title: 'Leading in Modular Fabrication Transportation',
      description: 'Transported 31 large industrial modules across 800 km for critical infrastructure projects with zero incidents.',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80'
    }
  ]

  return (
    <section className="case-studies" id="case-studies">
      <div className="case-studies-container">
        <div className="case-studies-header">
          <h2>Success Stories</h2>
          <p>Explore how we've helped businesses overcome their toughest logistics challenges</p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <div className="case-study-image" style={{ backgroundImage: `url(${study.image})` }}>
                <div className="case-study-category">{study.category}</div>
              </div>
              <div className="case-study-content">
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <button className="read-more">Read More →</button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-all-btn">View All Case Studies</button>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
