import React from 'react';
import './Styles/Projects.css';
import Card from './Card';
import ProjectData from './Data/projectData';

function Projects() {
  return (
    <div>
      <div id = "projects"className="Project-heading">
        My Works
      </div>
      <div className="Project-description" >
        {ProjectData.map((project, index) => (
          <Card
            key={index}
            icon={project.icon}
            heading={project.heading}
            description={project.description}
            link={project.link}
          />
      ))}
      </div>
    </div>
  );
}

export default Projects;
