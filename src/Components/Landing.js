import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          
          <h2 className="display-2 mb-0">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h2>

          <h6 className="text-lowercase mb-5">{this.landingData.phoneNumber} · <a href="mailto:pablo.lozano@uc3m.es">{this.landingData.email}</a>
          {/*<h6 className="text-lowercase mb-5">send me an email: <a href="mailto:pablo.lozano@uc3m.es">{this.landingData.email}</a>*/}
          </h6>
          
          <p className="lead mb-5">{this.landingData.bio}</p>

          <div className="social-icons">
            <a href={this.landingData.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={this.landingData.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
