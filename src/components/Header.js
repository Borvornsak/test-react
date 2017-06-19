import React from "react";
import TopContacts from "./TopContacts";
import PropTypes from "prop-types";

const Header = ({ bio }) =>
  <div id="header" className="center-content clear-fix">
    <h1 id="name">{bio.name}</h1>
    <span>{bio.role}</span><hr />
    <TopContacts contacts={bio.contacts} />
    <img src={bio.biopic} className="biopic" alt="bioPic" />
    <span className="welcome-message">{bio.welcomeMessage}</span>
    <h3 id="skills-h3">Skills at a Glance:</h3>
    <ul id="skills" className="flex-column">
      {bio.skills.map((skill, index) =>
        <li className="flex-item" key={index}>
          <span className="white-text">{skill}</span>
        </li>
      )}
    </ul>
  </div>;

Header.propTypes = {
  bio: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    welcomeMessage: PropTypes.string,
    biopic: PropTypes.string,
    contacts: PropTypes.objectOf(PropTypes.string),
    skills: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Header;
