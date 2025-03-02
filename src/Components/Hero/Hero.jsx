import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_pic4.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return(
    <div id='home' className='hero'>
        <img src= {profile_img} alt="" />
        <h1><span>I am Suyash Abhishek Kumar,</span> a Game Devaloper based in India.</h1>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/11srXVOzrEOHD-JwBpMeTtjaukEhGANdn/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Hero
