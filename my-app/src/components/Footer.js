import React from 'react'
import { Link } from 'react-scroll';
import './Styles/Footer.css'

function Footer() {
  return (
    <div className='Footer'>
      <ul className='Footer-content'>
        <div className='footer-desc'>
        <li>
            <h1>JNS</h1>
            <h3>Thanks For scrolling till end. <br /> Hope You liked it !! </h3>
        </li>

        </div>
       
        <li>
            <h1 className='Footer-collab'>Wanna Collab ?</h1>
            <input className ="Footer-input" type="email" placeholder='Enter Your email' />
            <button className='Footer-btn'>Collab</button>
        </li>
        <li>
            <h2>Navigation</h2>
            <div className='Footer-nav'>
                <li><Link to="nav" smooth={true} duration={500}>Home</Link><br /></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link><br /></li> 
                <li><Link to="experience" smooth={true} duration={500}>Experience</Link><br /></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link><br /></li> 
            </div>
        </li>
        <li>
            <h2>Let's Chat</h2>
            <div className='Footer-list'>
            <li><a href="https://www.linkedin.com/in/jiyanshusharma/" target="_blank"  rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/jiyanshusharma/" target="_blank"  rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://github.com/Jiyanshu-Sharma" target="_blank"  rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a href="https://twitter.com/Jiyanshusharma1" target="_blank"  rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            </div>
        </li>
      </ul>
     
     
     
        
      
    </div>
  )
}

export default Footer
