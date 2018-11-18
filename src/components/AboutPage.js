import React from 'react';
import PropTypes from 'prop-types';

class AboutPage extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
          <h2 className="page-header">About Us</h2>
        </div>
        <p>{this.props.text}</p>
      </div>
      </React.Fragment>
    );
  }
}

AboutPage.propTypes = {
  text: PropTypes.string.isRequired
}

AboutPage.defaultProps = {
  text: 'Main AboutPage'
};

export default AboutPage;
