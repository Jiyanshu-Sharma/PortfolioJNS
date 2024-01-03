import React from 'react'
import './Styles/Home.css'
import Avatar from '../Images/Avatar.png'

function Home() {
  return (
    <div id="home" className = "Home">
     <img className='Avatar-icon' src={Avatar} alt ="Avatar" />
     
     <div className="Home-Heading">
      <span className="white-text">I do code and </span>
      <br />
     <span>
        <span className="white-text">make content </span>
        <span className="orange-text">about it !</span>
     </span>
    </div>
    <div className="Home-Paragraph">
    <p>I am a seasoned full-stack software engineer with over <br/>8 years of professional experience, specializing in backend development. <br/>My expertise lies in crafting robust and scalable SaaS-based <br/>architectures on the Amazon AWS platform.</p>
    </div>
    <div className="Home-Btn-container">
        <button className='Projects-Btn'>Hire Me</button>
        <button className='Resume-Btn'>Resume</button>

    </div>
    
   
    </div>
  )
}

export default Home

