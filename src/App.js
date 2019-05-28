import React, { Component } from 'react';
import './index.scss';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainPage />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
