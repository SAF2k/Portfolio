import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container serviceContainer">
        <article className='service'>
          <div className="serviceHead">
            <h3>UX/UI Design</h3>
          </div>

          <ul className='serviceList'></ul>
        </article>
      </div>
    </section>
  )
}

export default Services