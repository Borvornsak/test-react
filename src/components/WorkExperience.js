import React from "react";
import PropTypes from "prop-types";

const WorkExperience = ({ jobs }) =>
  <div id="workExperience" className="gray">
    <h2>Work Experience</h2>
    {jobs.map((job, index) =>
      <div className="work-entry" key={index}>
        <a href="http://skooldio.com">{job.employer} - {job.title}</a>
        <div className="date-text">{job.dates}</div>
        <div className="location-text">{job.location}</div>
        <p><br />{job.description}</p>
      </div>
    )}
  </div>;

WorkExperience.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      dates: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
};

export default WorkExperience;
