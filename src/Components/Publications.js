import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faUser, faCalendarAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";


class Publications extends Component {
  constructor(props) {
    super(props);

    this.publications = props.publications;
    this.contributions = props.contributions;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="publications">
        <div className="w-100">
          <h2 className="display-3 mb-5">Publications</h2>
          <h3 className="font-weight-light mb-3">Articles</h3>
          {
            this.publications.map((data, index) => (
                <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                    <h4 className="font-weight-normal mb-2"><a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a></h4>
                    <h5 className="font-weight-light mb-2"><FontAwesomeIcon icon={faBook} color="green" />  {data.journal}</h5>
                    <p><FontAwesomeIcon icon={faUser} color="green" />  {data.authors} ({data.date})</p>
                  </div>
                </div>
            ))
          }

          <hr/><br/>

          <h3 className="font-weight-light mb-4">Contributions</h3>
          {
            this.contributions.map((data, index) => (
                <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                    <h4 className="font-weight-normal mb-2">{data.title}</h4>
                    <h6 className="font-weight-light mb-2">{data.contrib}</h6>
                    <p><FontAwesomeIcon icon={faUser} color="green" /> {data.authors}<br/>
                    <FontAwesomeIcon icon={faCalendarAlt} color="green" /> {data.date} &mdash; <FontAwesomeIcon icon={faMapMarkerAlt} color="green" /> {data.place}</p>
                  </div>
                </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Publications;
