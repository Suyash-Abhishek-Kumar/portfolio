import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src= {theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left"><img src= {profile_img} alt="" /></div>
            <div className="about-right">
                <div className="about-para">
                    <h1>I am a passionate Game developer.</h1>
                    <p>Currently pursuing my Bachelor's degree in <p1>Computer Science and Engineering</p1> with a specialization in <span>Artificial Intelligence and Machine Learning</span> at <p1>SRM Institute of Science and Technology.</p1></p>
                    <p>Completed my schooling at <p1>RN Podar</p1> with an outstanding <span>90.2%</span> in 12th grade.</p>
                    <p>My current Grade is <span>9.70 CGPA</span> at SRMIST</p>
                    <p><h3>My ambition is to <span>craft cutting-edge technologies</span> that enhance user experiences and <p1>advance the gaming industry.</p1></h3></p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Python</p><hr style={{width: "55%"}}/></div>
                    <div className="about-skill"><p>PyGame</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>Unity</p><hr style={{width: "45%"}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width: "45%"}}/></div>
                    <div className="about-skill"><p>C#</p><hr style={{width: "40%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width: "45%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1</h1>
                <p>GameJam participated</p>
            </div>
        </div>
    </div>
  )
}

export default About