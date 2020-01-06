import React, { Component } from "react";
import data from "./data.json";
import TitleSection from './sections/TitleSection';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';

import "./App.css";

class App extends Component {

  render() {
    console.log(data)
    return (
      <div className="App">
        <div className="navigation"></div>
        <TitleSection />
        <AboutSection />
        <SkillSection/>
      </div>
    )
  }
}

export default App;