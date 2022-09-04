import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pkohf6t', 'template_b03felp', form.current, 'Ro8ARPy4Z-csU01NB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In</h5>
      <h2>Contact Me</h2>

      <div className="container contactCantainer">
        <div className="contactOptions">
          <article className="contactOption">
            <MdOutlineEmail className='contactOptionIcon'/>
            <h4>Email</h4>
            <h5>safwathkhan2@gmail.com</h5>
            <a href="mailto:safwathkhan2@gmail.com?" target='blank'>Send a Mail</a>
          </article>
          <article className="contactOption">
            <FaInstagram className='contactOptionIcon'/>
            <h4>Instagram</h4>
            <h5>saf_2k</h5>
            <a href="https://www.instagram.com/saf_2k/?hl=en" target={'blank'}>Send Message</a>
          </article>
          <article className="contactOption">
            <FaLinkedinIn className='contactOptionIcon'/>
            <h4>Linkin</h4>
            <h5>Safwat S Khan</h5>
            <a href="https://www.linkedin.com/in/safwat-khan-555799183/" target={'blank'}>Send Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea type="message" name='message' rows={8} placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact