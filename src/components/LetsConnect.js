import React from "react";
import PropTypes from "prop-types";

const LetsConnect = ({ contacts }) =>
  <div id="lets-connect" className="dark-gray">
    <h2 className="orange center-text">{"Let's Connect"}</h2>
    <ul id="footerContacts" className="flex-box">
      {Object.entries(contacts).map(([key, value]) =>
        <li className="flex-item" key={key}>
          <span className="orange-text">{key}</span>
          <span className="white-text">{value}</span>
        </li>
      )}
    </ul>
  </div>;

LetsConnect.propTypes = {
  contacts: PropTypes.object.isRequired
};

export default LetsConnect;
