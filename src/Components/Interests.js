import React, { Component } from 'react';

class Interests extends Component {
  constructor(props) {
    super(props);

    this.interests = props.interests;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="display-3 mb-5">Interests</h2>
          <p className="lead">
            {this.interests.paragraphOne}
            {/*Apart from being a Ph.D. student, I enjoy most of my free time being outdoors.*/}
            {/*I enjoy biking, doing CrossFit, and recently I started doing yoga.*/}
          </p>
          <p className="lead mb-0">
            {this.interests.paragraphTwo}
            {/*When indoors, I <a href="https://www.goodreads.com/user/show/72531330-pablo">read</a> (not*/}
            {/*as much I'd like) and sometimes I write.*/}
            {/*I like recycling, like restoring old, broken laptops to give them a new life.*/}
            {/*I also paint.*/}
          </p>
        </div>
      </section>
    );
  }
}

export default Interests;
