import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImage">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="aboutContent">
          <div className="aboutCards">

            <article className='aboutCard'>
              <FaAward className='aboutIcon' />
              <h5>Experience</h5>
              <small>Basic Working in Web Development</small>
            </article>
            
            <article className='aboutCard'>
              <FiUser className='aboutIcon' />
              <h5>Work Hours</h5>
              <small>500+</small>
            </article>
            
            <article className='aboutCard'>
              <VscFolderLibrary className='aboutIcon' />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>

          </div>
          <p>
            To purpose a carrier of challenge and responsibility in organization, 
            where I could contribute in organization growth, gain knowledge to achieve desired 
            position by hard work, sincerity and dedication. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About