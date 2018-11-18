import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Content from './Content';
import Footer from './Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Jumbotron />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
