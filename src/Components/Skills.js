import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


class Skills extends Component {
  constructor(props) {
    super(props);

    this.programming_skills = props.programming_skills;
    this.writing_skills = props.writing_skills;
    this.languages = props.languages;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="display-3 mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <div className="row">
          {
            this.programming_skills.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                  <span className="text-uppercase font-weight-bold ml-3">{data.name}</span> <br/>
                  <span className="ml-3">{data.tools}</span>
                </p>
              </div>
            ))
          }
          </div>

          <br/>

          <div className="subheading mb-3">Editing &amp; Writing</div>
          <div className="row">
            {
              this.writing_skills.map((data, index) => (
                  <div key={index} className="col-6">
                    <p className="list-item">
                      <FontAwesomeIcon icon={faCheckCircle} color="green" />
                      <span className="text-uppercase font-weight-bold ml-3">{data.name}</span> <br/>
                      <span className="ml-3">{data.tools}</span>
                    </p>
                  </div>
              ))
            }
          </div>

          <br/>

          <div className="subheading mb-3">Languages</div>
          <div className="row">
            {
              this.languages.map((data, index) => (
                  <div key={index} className="col-6">
                    <p className="list-item">
                      <span className="text-uppercase font-weight-bold ml-3">{data.name}</span>
                      <span className="ml-3">{data.level}</span>
                    </p>
                  </div>
              ))
            }
          </div>


        </div>
      </section>
    );
  }
}

export default Skills;
