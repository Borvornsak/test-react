import React, { Component } from "react";
import PropTypes from "prop-types";
import "./LetsConnect.css";

class LetsConnect extends Component {
  render() {
    var contacts = this.props.contacts;
    return (
      <div id="lets-connect" className="dark-gray">
        <h2 className="orange center-text">Let's Connect</h2>
        <ul id="footerContacts" className="flex-box">
          <li className="flex-item">
            <span className="orange-text">mobile</span>
            <span className="white-text">{contacts.mobile}</span>
          </li>
          <li className="flex-item">
            <span className="orange-text">email</span>
            <span className="white-text">{contacts.email}</span>
          </li>
          <li className="flex-item">
            <span className="orange-text">github</span>
            <span className="white-text">{contacts.github}</span>
          </li>
          <li className="flex-item">
            <span className="orange-text">location</span>
            <span className="white-text">{contacts.location}</span>
          </li>
        </ul>
      </div>
    );
  }
}

LetsConnect.proptypes = {
  contacts: PropTypes.object.isRequired
};

export default LetsConnect;
