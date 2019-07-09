import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.scss';

import Header from '../header';
import Footer from '../footer';
import Home from '../home';
import SupplierList from '../pages/supplier-list';
import Weddingtools from '../pages/wedding-tools';
import Weddingsuppliers from '../pages/wedding-supliers';
import Supplier from '../pages/supplier';
import Contact from '../pages/contact';
import Terms from '../pages/terms-and-conditions';
import Privacy from '../pages/privacy';
import Login from '../login';
import Signup from '../sign-up';
import Pricing from '../pricing';
import BusinessLogin from '../business-login';
import BusinessSignup from '../business-sign-up';

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
    <Switch>
      <RouteMainLayout exact path="/" component={Home} />
      <RouteMainLayout path="/weddingtools" component={Weddingtools} />
      <RouteMainLayout path="/weddingsuppliers" component={Weddingsuppliers} />
      <RouteMainLayout path="/suppliers/:name" component={SupplierList} />
      <RouteMainLayout path="/supplier" component={Supplier} />
      <RouteMainLayout path="/contact" component={Contact} />
      <RouteMainLayout path="/terms" component={Terms} />
      <RouteMainLayout path="/privacy" component={Privacy} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/business-login" component={BusinessLogin} />
      <Route path="/business-signup" component={BusinessSignup} />
    </Switch>
  </React.Fragment>
);

export default App;
