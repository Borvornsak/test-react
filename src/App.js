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
  constructor(props) {
    super(props);
    this.state = { data: Data };
  }
  render() {
    const data = this.state;
    return (
      <div id="main">
        <Header bio={data.bio} />
        <WorkExperience work={data.work} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        <LetsConnect contacts={data.bio.contacts} />
      </div>
    );
  }
}

// App.PropsType = {
//   bio: React.PropTypes.object
// };
export default App;
