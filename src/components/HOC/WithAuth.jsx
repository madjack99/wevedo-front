import React from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

const mapStateToProps = ({ sessionData }) => sessionData;

const withAuth = () => Wrapped =>
  connect(mapStateToProps)(({ isLoggedIn, ...props }) => {
    if (!isLoggedIn) {
      return <Redirect to="/" />;
    }

    return <Wrapped {...props} />;
  });

export default withAuth;
