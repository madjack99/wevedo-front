import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './sass/wevedo.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Venues from './components/Sections/Venues';
import Weddingtools from './components/Sections/Weddingtools';
import Supplier from './components/Sections/Supplier';
import Contact from './components/Sections/Contact';
import Terms from './components/Sections/Terms';
import Privacy from './components/Sections/Privacy';
import Login from './components/Login';
import Signup from './components/Signup';

const RouteMainLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <React.Fragment>
        <Header />
        <Component {...matchProps} />
        <Footer />
      </React.Fragment> 
    )} />
  )
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RouteMainLayout exact path="/" component={Home} />
        <RouteMainLayout path="/weddingtools" component={Weddingtools} />
        <RouteMainLayout path="/venues" component={Venues} />
        <RouteMainLayout path="/supplier" component={Supplier} />
        <RouteMainLayout path="/contact" component={Contact} />
        <RouteMainLayout path="/terms" component={Terms} />
        <RouteMainLayout path="/privacy" component={Privacy} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </React.Fragment>
    );
  }
}

export default App;
