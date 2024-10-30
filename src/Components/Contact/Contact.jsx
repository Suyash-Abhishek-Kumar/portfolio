import React from 'react'
import './Contact.css'
import pattern_img from '../../assets/theme_pattern.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={pattern_img} alt="" />
        </div>
        <div className="contact-details">
            <p>Phone: +91 9004970566</p>
            <div className="contact-gmail"><p><a href="mailto:suyash.a.kumar@gmail.com" target="_blank" rel="noopener noreferrer">Gmail: suyash.a.kumar@gmail.com</a></p></div>
            <div className="contact-others">
                <div className="contact-github"><p><a href="https://github.com/Suyash-Abhishek-Kumar" target="_blank" rel="noopener noreferrer">Github</a></p></div>
                <div className="contact-linkdin"><p><a href="https://www.linkedin.com/in/suyash-abhishek-kumar-96ba0a2ab/" target="_blank" rel="noopener noreferrer">LinkdIn</a></p></div>
            </div>
        </div>
    </div>
  )
}

export default Contact