import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import Publications from './Components/Publications';
import profileData from './profileData.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      programming_skills : profileData.programming_skills,
      writing_skills : profileData.writing_skills,
      languages : profileData.languages,
      interests : profileData.interests,
      publications : profileData.publications
    }
  }
  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Experience experience={this.state.experience} />
          <hr className="m-0" />
          <Education education={this.state.education} />
          <hr className="m-0" />
          <Skills programming_skills={this.state.programming_skills}
                  writing_skills={this.state.writing_skills}
                  languages={this.state.languages}
          />
          <hr className="m-0" />
          <Publications publications={this.state.publications} />
          <hr className="m-0" />
          <Interests interests={this.state.interests} />
        </div>
      </div>
    );
  }
}

export default App;