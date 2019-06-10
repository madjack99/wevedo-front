import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './sass/wevedo.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Venues from './components/Sections/Venues';
import Weddingtools from './components/Sections/Weddingtools';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/weddingtools" component={Weddingtools} />
        <Route path="/venues" component={Venues} />  
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
