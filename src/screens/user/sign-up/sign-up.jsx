import React from 'react';

import './sign-up.scss';

import EnterLayoutScreen from '../../layout/enter';
import SignUpUserForm from '../../../components/form/user/sign-up';

import userSideBackground from '../../../assets/images/login-img.png';

const ScreensUserSignUp = () => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle="Hey,"
    welcomeSubtitle="Glad to see you..."
  >
    <SignUpUserForm />
  </EnterLayoutScreen>
);

export default ScreensUserSignUp;
