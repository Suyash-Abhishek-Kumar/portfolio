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
                    <p>I am a passionate Game developer.
                        Currently pursuing my Bachelor's degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at SRM Institute of Science and Technology.
                        Completed my schooling at DAV with an outstanding 93.2% in 12th grade.
                        My current Grade is 9.00 CGPA at SRMIST
                        My goal is to create innovative solutions that drive business growth and deliver exceptional user experiences.</p>
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