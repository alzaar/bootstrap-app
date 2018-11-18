import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
          Main Content
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Content;
