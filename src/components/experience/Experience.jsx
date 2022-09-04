import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experienceContainer">
        <div className="experinceFrontend">
          <h3>Frontend Development</h3>
          <div className="experienceContent">
            <article className='experinceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            
            <article className='experinceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            
            <article className='experinceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className='experinceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            
            <article className='experinceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experinceBackend">
          <h3>Backend Development</h3>
          <div className="experienceContent">
            <article className='experinceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experinceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className='experinceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            
            <article className='experinceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience