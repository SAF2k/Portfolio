import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="# " className='footerLogo'>SAF2k</a>

      <ul className="permalinks">
        <li><a href="# ">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#porfiloi">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footerSocials">
        <a href="https://www.instagram.com/saf_2k/?hl=en"><AiFillInstagram /></a>
        <a href="https://twitter.com/Saf_2k"><AiOutlineTwitter /></a>
        <a href="https://www.linkedin.com/in/safwat-khan-555799183/"><FaLinkedinIn /></a>
      </div>

      <div className="footerCopyright">
        <small>&copy; SAF2k. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer