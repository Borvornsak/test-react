import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Projects.css";

class Projects extends Component {
  render() {
    var projects = this.props.projects;
    return (
      <div id="projects">
        <h2>Projects</h2>
        {projects.projects.map(project =>
          <div className="project-entry">
            <a href="http://skooldio.com">{project.title}</a>
            <div className="date-text">{project.dates}</div>
            <p><br />{project.description}</p>
            {project.images.map(image => <img src={image} alt="projectPic" />)}
          </div>
        )}
      </div>
    );
  }
}

Projects.proptyes = {
  projects: PropTypes.object.isRequired
};

export default Projects;
