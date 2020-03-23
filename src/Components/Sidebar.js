import React, { Component } from 'react';
import image from '../Assets/profile.jpeg';
import CV from '../Assets/CV.pdf';


class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.sidebarData = props.sidebarData;

    // This is for toggling the navbar
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  // Function that toggles the navbar
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classNavbar = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classButton = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">

          <a className="navbar-brand" href="#about">
            <span className="d-block d-lg-none">
              {this.sidebarData.firstName} {this.sidebarData.lastName}'s Webpage
            </span>
            <span className="d-none d-lg-block">
              <img className="img-fluid rounded-circle mx-auto mb-3" src={image} alt=""/>
            </span>
          </a>

          <button onClick={this.toggleNavbar} className={`${classButton}`} type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className={`${classNavbar}`} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a onClick={this.toggleNavbar} className='nav-link js-scroll-trigger' href="#about">About</a>
              </li>
              <li className="nav-item">
                <a onClick={this.toggleNavbar} className='nav-link js-scroll-trigger' href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a onClick={this.toggleNavbar} className='nav-link js-scroll-trigger' href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a onClick={this.toggleNavbar} className='nav-link js-scroll-trigger' href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a onClick={this.toggleNavbar} className='nav-link js-scroll-trigger' href="#publications">Publications</a>
              </li>
              <li className="nav-item">
                <a onClick={this.toggleNavbar} className='nav-link js-scroll-trigger' href="#interests">Interests</a>
              </li>
              <li className="nav-item">
                <a onClick={this.toggleNavbar} className='nav-link js-scroll-trigger font-weight-light' href={CV}
                   target="_blank" rel="noopener noreferrer">Click here to get my CV on pdf</a>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Sidebar;
