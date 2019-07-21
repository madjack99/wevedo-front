import React from 'react';

import './login.scss';

import EnterLayoutScreen from '../../layout/enter';
import LoginBusinessForm from '../../../components/form/business/login';

import userSideBackground from '../../../assets/images/businesslogin.png';

const ScreensUserSignUp = () => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle="Welcome Back,"
    welcomeSubtitle="Please login to your account"
  >
    <LoginBusinessForm />
  </EnterLayoutScreen>
);

export default ScreensUserSignUp;
