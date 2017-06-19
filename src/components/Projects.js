import React from "react";
import PropTypes from "prop-types";

const Projects = ({ projects }) =>
  <div id="projects">
    <h2>Projects</h2>
    {projects.map((project, index) =>
      <div className="project-entry" key={index}>
        <a href="http://skooldio.com">{project.title}</a>
        <div className="date-text">{project.dates}</div>
        <p><br />{project.description}</p>
        {project.images.map((image, index) =>
          <img src={image} alt="projectPic" key={index} />
        )}
      </div>
    )}
  </div>;

Projects.propTyes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      dates: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
  )
};

export default Projects;
