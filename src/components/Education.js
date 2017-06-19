import React from "react";
import PropTypes from "prop-types";

const Education = ({ schools }) =>
  <div id="education" className="gray">
    <h2>Education</h2>
    {schools.map((school, index) =>
      <div className="education-entry" key={index}>
        <a href="http://skooldio.com">{school.name} -- {school.degree}</a>
        <div className="date-text">{school.dates}</div>
        <div className="location-text">{school.location}</div>
        {school.majors.map((major, index) =>
          <em key={index}><br />Major: {major}</em>
        )}
      </div>
    )}
  </div>;

Education.propTypes = {
  schools: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.string,
      degree: PropTypes.string,
      dates: PropTypes.string,
      url: PropTypes.string,
      majors: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
};

export default Education;
