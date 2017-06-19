import React, { Component } from "react";
import PropTypes from "prop-types";
import "./WorkExperience.css";

class WorkExperience extends Component {
  render() {
    var work = this.props.work;
    return (
      <div id="workExperience" className="gray">
        <h2>Work Experience</h2>
        {work.jobs.map(job =>
          <div className="work-entry">
            <a href="http://skooldio.com">{job.employer} - {job.title}</a>
            <div className="date-text">{job.dates}</div>
            <div className="location-text">{job.location}</div>
            <p><br />{job.description}</p>
          </div>
        )}
      </div>
    );
  }
}

WorkExperience.propTypes = {
  work: PropTypes.object.isRequired
};

export default WorkExperience;
