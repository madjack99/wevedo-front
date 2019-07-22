/* eslint-disable no-shadow */
import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';

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
import Pricing from '../pricing';
import ImgUpload from '../form/imgUpload';
import ScreensUserSignUp from '../../screens/user/sign-up';
import ScreensUserLogin from '../../screens/user/login';
import ScreensBusinessLogin from '../../screens/business/login';
import ScreensBusinessSignUpFirstStep from '../../screens/business/sign-up/first-step';
import ScreensBusinessSignUpSecondStep from '../../screens/business/sign-up/second-step';
import ScreensUpdatingServiceInfo from '../../screens/updating/service-info';

import { fetchUser, removeUser, fetchCategories } from '../../actions';
import { WevedoServiceContext } from '../contexts';

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

const App = ({
  isLoggedIn, getUser, removeUser, getCategories,
}) => {
  const wevedoService = useContext(WevedoServiceContext);

  useEffect(() => {
    if (isLoggedIn) {
      getUser(wevedoService.getProfile);
    }
    removeUser();
  }, [getUser, removeUser, isLoggedIn, wevedoService]);

  useEffect(() => {
    getCategories(wevedoService.getCategories);
  }, [getCategories, wevedoService]);

  return (
    <React.Fragment>
      <Switch>
        <RouteMainLayout exact path="/" component={Home} />
        <RouteMainLayout path="/weddingtools" component={Weddingtools} />
        <RouteMainLayout path="/weddingsuppliers" component={Weddingsuppliers} />
        <RouteMainLayout path="/suppliers/:name/:pageNumber" component={SupplierList} />
        <RouteMainLayout path="/suppliers/:name" component={SupplierList} />
        <RouteMainLayout path="/supplier/:id" component={Supplier} />
        <RouteMainLayout path="/contact" component={Contact} />
        <RouteMainLayout path="/terms" component={Terms} />
        <RouteMainLayout path="/privacy" component={Privacy} />
        <Route path="/login" component={ScreensUserLogin} />
        <Route path="/signup" component={ScreensUserSignUp} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/business-login" component={ScreensBusinessLogin} />
        <Route path="/business-signup-1" component={ScreensBusinessSignUpFirstStep} />
        <Route path="/business-signup-2" component={ScreensBusinessSignUpSecondStep} />
        <Route path="/image-upload" component={ImgUpload} />
        <Route path="/service-info" component={ScreensUpdatingServiceInfo} />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = ({ sessionData, userData }) => ({
  ...sessionData,
  ...userData,
});

const mapDispatchToProps = dispatch => ({
  getUser: fetchUser(dispatch),
  removeUser: () => dispatch(removeUser()),
  getCategories: fetchCategories(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
