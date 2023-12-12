import React from 'react'
import "./Aboutimg.css";
import { Link } from 'react-router-dom'
import introimggg from "../assets/newimg.jpg";

const AboutHeroSecction = () => {
  return (
    <div className='top-container'>
        <div className="container">
            <div className="section1">
                <p className='hero-para'>ABOUT ME</p>
                <h1 className='hero-heading'>AARTI PRASAD</h1>
                <p className='hero-para'>Web developer skills are often applied to the non-design aspects of building websites – writing markup and coding. Web developers may also use content management systems (CMS) to make content changes easier for other developers or end-users who may lack technical skills.</p>
               <div className="btn-sys"><Link to="/projects " className="btn">Projects</Link></div> 
            </div>


            <div className="section2-img">
                <img className="about-img" src={introimggg} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default AboutHeroSecction
