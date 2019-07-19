import React from 'react';

import './first-step.scss';

import EnterLayoutScreen from '../../../layout/enter';
import FirstStepSignUpBusinessForm from '../../../../components/form/business/sign-up/first-step';

import userSideBackground from '../../../../assets/images/businesslogin.png';

const ScreensUserSignUp = () => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle="Hey,"
    welcomeSubtitle="Glad to see you..."
    welcomeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  >
    <FirstStepSignUpBusinessForm />
  </EnterLayoutScreen>
);

export default ScreensUserSignUp;
