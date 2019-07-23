import React from 'react';

import './login.scss';

import EnterLayoutScreen from '../../layout/enter';
import LoginUserForm from '../../../components/form/user/login';

import userSideBackground from '../../../assets/images/login-img.png';

const ScreensUserSignUp = () => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle="Welcome Back,"
    welcomeSubtitle="Please login to your account..."
  >
    <LoginUserForm />
  </EnterLayoutScreen>
);

export default ScreensUserSignUp;
