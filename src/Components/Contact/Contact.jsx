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
            <p>Phone: 9004970566</p>
            <div className="contact-gmail">Gmail: suyash.a.kumar@gmail.com</div>
            <div className="contact-others">
                <div className="contact-github">Github</div>
                <div className="contact-linkdin">LinkdIn</div>
            </div>
        </div>
    </div>
  )
}

export default Contact