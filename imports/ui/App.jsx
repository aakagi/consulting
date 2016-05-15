// Core Dependenies
import React, { Component } from 'react';

// Custom Dependencies
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}