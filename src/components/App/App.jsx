import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import './App.scss';

import { fetchUser, removeUser, fetchCategories } from '../../actions';
import { WevedoServiceContext } from '../../contexts';

import ScreensRoot from '../../screens/Root';

const App = ({ isLoggedIn, getUser, removeUser, getCategories }) => {
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

  return <ScreensRoot />;
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
