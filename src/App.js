import React, { Component } from "react";
import Header from "./components/Header/Header";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import LetsConnect from "./components/LetsConnect/LetsConnect";
import Data from "./data";
import "./App.css";

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
