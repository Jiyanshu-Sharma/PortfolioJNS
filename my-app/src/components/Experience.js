
import React from 'react'
import './Styles/Experience.css'
import expData from './Data/expData'



function Expcard(props){
  return (
    <div className="Expcard">
    
        <div className="Exp-head">
        
              <div className="Exp-heading">
              <img src={props.icon} alt="" />
                {props.heading}</div>
              <div className="Exp-duration">{props.duration}</div>
        </div>
        <div className="company-name">{props.companyname}</div>
        <div className="Exp-description">{props.description}</div>
    </div>
    );
}

function Experience() {
  return (
    <div id="experience" className = "Experience">
     
        <div className="Experience-heading">
            Work Experience
        </div>
        <div className="Experience-description">
        <div className="Exp-List">
          {
            expData.map((exp , index)=>(
              <Expcard 
                  key = {index}
                  logo ={exp.logo}
                  heading = {exp.heading}
                  duration = {exp.duration}
                  companyname ={exp.companyname}
                  description = {exp.description} />
            ))
          }
           
        </div> 

        </div>
       
    </div>
  )
}

export default Experience

