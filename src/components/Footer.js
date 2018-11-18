import React from 'react';
import PropTypes from 'prop-types'
class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <hr/>
          <footer>
            <p>&copy; 2018 {this.props.copyright}, Inc.</p>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  copyright: PropTypes.string.isRequired
}

Footer.defaultProps = {
  copyright: "MyWebsite"
};


export default Footer;
