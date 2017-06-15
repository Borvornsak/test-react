import React, { Component } from "react";
import PropTypes from "prop-types";

class TopContacts extends Component {
  render() {
    var contacts = this.props.contacts;
    return (
      <ul id="topContacts" className="flex-box">
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
    );
  }
}

TopContacts.propTypes = {
  contacts: PropTypes.object.isRequired
};

export default TopContacts;
