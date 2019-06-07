import React, { Component } from 'react';
import './sass/wevedo.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainPage />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
