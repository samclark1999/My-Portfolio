import '../App.css'
import React from 'react'
import HeroSection from './sections/HeroSection/HeroSection'
import Projects from './sections/Projects/Projects'
import About from './sections/About/About'


function Home() {
    return (
      <>
        <HeroSection />
        <Projects />
        <About />
      </>
    )
}

export default Home
