import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Footer from './Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }

  }
  handleHomeClick = () => {
    this.setState({
      page: 'home'
    })
  }

  handleAboutClick = () => {
    this.setState({
      page: 'about '
    })
  }
  render() {
    const style = 'light';
    let  jumbotron = '';
    let  displayPage = '';
    if (this.state.page === 'home') {
      jumbotron = <Jumbotron />
      displayPage = <HomePage />
      console.log(this.state.page);
    } else  {
      jumbotron = '';
      displayPage = <AboutPage />;
      console.log(this.state.page);
    }
    return (
      <React.Fragment>
        <Navbar page={this.state.page} theme={style} homeClick={this.handleHomeClick} aboutClick={this.handleAboutClick}/>
        {jumbotron}
        {displayPage}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
