import React from 'react'
import './Styles/Skills.css'
import skillData from './Data/skillData'
import Card from './Card'


function Skills() {
  return (
    <>
        <div id = "skills" className="Skills-heading">
       SkillSet
      </div>
      <div className="Skills-description">
      {skillData.map((Skill, index) => (
        
        <Card
           key={index}
          icon={Skill.icon}
          heading={Skill.heading}
          description={Skill.set}
        />
     
    ))}
        
        </div> 
    </>
  )
}

export default Skills
