import React from 'react';

import { Redirect } from 'react-router-dom';

const withoutAuth = () => Wrapped => ({ isLoggedIn, ...props }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return <Wrapped {...props} />;
};

export default withoutAuth;
