import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


export const HeaderSocial = () => {
  return (
    <div className= "header__socials">
        <a href="https://www.linkedin.com/in/safwat-khan-555799183/" target='blank'><BsLinkedin /></a>
        <a href="https://github.com/SAF2k" target='blank'><FaGithub/></a>
        <a href="https://www.instagram.com/saf_2k/?hl=en" target='blank'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocial
