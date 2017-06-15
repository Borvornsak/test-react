import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import LetsConnect from "./components/LetsConnect";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Header />
        <WorkExperience />
        <Projects />
        <Education />
        <LetsConnect />
      </div>
    );
  }
}

// App.PropsType = {
//   bio: React.PropTypes.object
// };
export default App;
