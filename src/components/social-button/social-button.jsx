import React from 'react';
import SocialLogin from 'react-social-login';
import { Button } from 'react-bootstrap';

import './social-button.scss';

function SocialButton({ children, triggerLogin, ...props }) {
  return (
    <Button {...props} onClick={triggerLogin}>
      {children}
    </Button>
  );
}

export default SocialLogin(SocialButton);
