import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <hr/>
          <footer>
            <p>&copy; 2018 MyWebsite, Inc.</p>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
