import React from 'react';
import PropTypes from 'prop-types';
class Navbar extends React.Component {
  render() {
    let theme = '';
    let homeActive = '';
    let aboutActive = '';
    if (this.props.theme === 'dark') {
      theme = "navbar navbar-expand-lg navbar-dark bg-dark";
    } else if (this.props.theme === 'light'){
      theme = 'navbar navbar-expand-lg navbar-light  bg-light';
      console.log(theme)
    }

    if (this.props.page === 'home') {
      homeActive = 'active';
    } else if (this.props.page === 'about') {
      aboutActive = 'active';
    }

    return (
      <React.Fragment>
        <nav className={theme}>
          <a className="navbar-brand" href="{this.props.link}">React</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" className={homeActive}>
                <a className="nav-link" onClick={this.props.homeClick} href={this.props.link}>{this.props.home}</a>
              </li>
              <li className="nav-item" className={aboutActive}>
                <a className="nav-link" onClick={this.props.aboutClick} href={this.props.link}>{this.props.about}</a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

Navbar.defaultProps = {
  link: "localhost:3000",
  home: 'Home',
  about: 'About',
  theme: 'navbar navbar-expand-lg navbar-light bg-light'
};

Navbar.propTypes = {
  link: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

export default Navbar;
