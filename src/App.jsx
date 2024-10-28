import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/hero'
import About from './Components/About/About'
import MyWork from './Components/MyWork/Mywork'
import Contact from './Components/Contact/Contact'

const App = () => {
  return(
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App