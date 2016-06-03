// Core Dependenies
import React, { Component, PropTypes } from 'react';

// Custom Dependencies
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.scrollToYield) {
      document.getElementById('yield').scrollIntoView();
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div id="yield">
          {this.props.yield}
        </div>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  scrollPastHeader: PropTypes.bool,
};

export default App;