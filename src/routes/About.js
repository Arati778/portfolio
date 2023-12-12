import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutHeroSecction from '../components/AboutHeroSecction'


const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutHeroSecction/>

      {/*<HeroImg2 heading="ABOUT." text="Im a friendly fron-end Developer." />*/}
      <Footer/>
    </div>
  )
}

export default About
