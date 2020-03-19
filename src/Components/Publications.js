import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from "@fortawesome/free-solid-svg-icons";


class Publications extends Component {
  constructor(props) {
    super(props);

    this.publications = props.publications;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="publications">
        <div className="w-100">
          <h2 className="display-3 mb-5">Publications</h2>
          {/*<ul className="fa-ul mb-0">*/}
          {/*{*/}
          {/*  this.publications.map((data, index) => (*/}
          {/*    <li key={index}>*/}
          {/*      <span className="ml-2"> {data.title} - {data.journal} </span>*/}
          {/*    </li>*/}
          {/*  ))*/}
          {/*}*/}
          {/*</ul>*/}
          {
            this.publications.map((data, index) => (
                <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                    <h4 className="font-weight-normal mb-2"><a href={data.link} target="_blank">{data.title}</a></h4>
                    <h5 className="font-weight-light mb-2">{data.journal}</h5>
                    <p>{data.authors}</p>
                  </div>
                  {/*<div className="resume-date text-md-right">*/}
                  {/*  <span className="text-primary">{data.fromDate} - {data.toDate}</span>*/}
                  {/*</div>*/}
                </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Publications;
