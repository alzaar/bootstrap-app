import React from 'react';
import PropTypes from 'prop-types';

class Jumbotron extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1>{this.props.heading}</h1>
          <p>{this.props.body}</p>
          <p><a className="btn btn-primary btn-lg" href="{this.props.link}" role="button">{this.props.button} &raquo;</a></p>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

Jumbotron.defaultProps = {
  heading: 'Hello There',
  body: 'This is your react project',
  link: 'http://google.ca',
  button: 'Learn More'
};

Jumbotron.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,

}

export default Jumbotron;
