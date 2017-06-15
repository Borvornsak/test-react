import React, { Component } from "react";
import Data from "../data";

class Education extends Component {
  render() {
    var education = Data.education;
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

export default Education;
