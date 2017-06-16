import React from "react";
import PropTypes from "prop-types";

const WorkExperience = ({ work }) =>
  <div id="workExperience" className="gray">
    <h2>Work Experience</h2>
    {work.jobs.map((job, index) =>
      <div className="work-entry" key={index}>
        <a href="http://skooldio.com">{job.employer} - {job.title}</a>
        <div className="date-text">{job.dates}</div>
        <div className="location-text">{job.location}</div>
        <p><br />{job.description}</p>
      </div>
    )}
  </div>;

WorkExperience.propTypes = {
  work: PropTypes.object.isRequired
};

export default WorkExperience;
