import React from 'react';
import PropTypes from 'prop-types';

class HomePage extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
          {this.props.text}
        </div>
      </div>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  text: PropTypes.string.isRequired
}

HomePage.defaultProps = {
  text: 'Main HomePage'
};

export default HomePage;
