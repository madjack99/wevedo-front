import React from 'react';
import SocialLogin from 'react-social-login';
import { Button } from 'react-bootstrap';

import './SocialButton.scss';

function UISocialButton({ children, triggerLogin, ...props }) {
  return (
    <Button {...props} onClick={triggerLogin} bsPrefix="ui-social-button">
      {children}
    </Button>
  );
}

export default SocialLogin(UISocialButton);
