import React, { Component } from "react";
import TopContacts from "./TopContacts";
import Data from "../data";

class Header extends Component {
  render() {
    var bio = Data.bio;
    return (
      <div id="header" className="center-content clear-fix">
        <h1 id="name">{bio.name}</h1>
        <span>{bio.role}</span><hr />
        <TopContacts contacts={bio.contacts} />
        <img src={bio.biopic} className="biopic" alt="bioPic" />
        <span className="welcome-message">{bio.welcomeMessage}</span>
        <h3 id="skills-h3">Skills at a Glance:</h3>
        <ul id="skills" className="flex-column">
          {bio.skills.map(skill =>
            <li className="flex-item">
              <span className="white-text">{skill}</span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

// Header.PropsType = {
//   bio: React.PropTypes.object
// };
export default Header;
