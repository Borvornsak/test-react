import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import LetsConnect from "./components/LetsConnect";
import Data from "./data.js";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Header bio={Data.bio} />
        <WorkExperience work={Data.work} />
        <Projects projects={Data.projects} />
        <Education education={Data.education} />
        <LetsConnect contacts={Data.bio.contacts} />
      </div>
    );
  }
}

// App.PropsType = {
//   bio: React.PropTypes.object
// };
export default App;
