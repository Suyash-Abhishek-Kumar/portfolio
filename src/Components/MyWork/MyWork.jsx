import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => (
                <div className="mywork-item group" key={index}>
                    <img src={work.w_img} alt={work.w_name} />
                    <div className="overlay">
                        <p>{work.w_name}</p>
                    </div>
                    <div className="corner-indicator absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-3 h-3 border-t-2 border-r-2 border-green-400"></div>
                    </div>
                    <div className="corner-indicator2 absolute bottom-4 left-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-3 h-3 border-b-2 border-l-2 border-green-400"></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyWork