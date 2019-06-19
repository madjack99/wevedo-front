import React from 'react';
import { Route } from 'react-router-dom';

import './app.scss';

import Header from '../header';
import Footer from '../footer';
import Home from '../home';
import Venues from '../pages/venues';
import Weddingtools from '../pages/wedding-tools';
import Weddingsuppliers from './components/Sections/Weddingsuppliers';
import Supplier from '../pages/supplier';
import Contact from '../pages/contact';
import Terms from '../pages/terms-and-conditions';
import Privacy from '../pages/privacy';
import Login from '../login';
import Signup from '../sign-up';
import Pricing from '../pricing';

const RouteMainLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <React.Fragment>
        <Header />
        <Component {...matchProps} />
        <Footer />
      </React.Fragment>
    )}
  />
);

const App = () => (
  <React.Fragment>
    <RouteMainLayout exact path="/" component={Home} />
    <RouteMainLayout path="/weddingtools" component={Weddingtools} />
    <RouteMainLayout path="/weddingsuppliers" component={Weddingsuppliers} />
    <RouteMainLayout path="/venues" component={Venues} />
    <RouteMainLayout path="/supplier" component={Supplier} />
    <RouteMainLayout path="/contact" component={Contact} />
    <RouteMainLayout path="/terms" component={Terms} />
    <RouteMainLayout path="/privacy" component={Privacy} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/pricing" component={Pricing} />
  </React.Fragment>
);

export default App;
