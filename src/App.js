import React, { Component } from 'react';
import './sass/wevedo.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
