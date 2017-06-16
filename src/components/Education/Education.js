import React, { Component } from "react";
import "./Education.css";
import PropTypes from "prop-types";

class Education extends Component {
  render() {
    var education = this.props.education;
    return (
      <div id="education" className="gray">
        <h2>Education</h2>
        {education.schools.map(school =>
          <div className="education-entry">
            <a href="http://skooldio.com">{school.name} -- {school.degree}</a>
            <div className="date-text">{school.dates}</div>
            <div className="location-text">{school.location}</div>
            {school.majors.map(major => <em><br />Major: {major}</em>)}
          </div>
        )}
      </div>
    );
  }
}

Education.proptypes = {
  education: PropTypes.object.isRequired
};

export default Education;
