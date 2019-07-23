import React from 'react';

import './second-step.scss';

import EnterLayoutScreen from '../../../layout/enter';
import SecondStepSignUpBusinessForm from '../../../../components/form/business/sign-up/second-step';

import userSideBackground from '../../../../assets/images/businesslogin.png';

const ScreensUserSignUp = () => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle="Hey,"
    welcomeSubtitle="Glad to see you..."
    welcomeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  >
    <SecondStepSignUpBusinessForm />
  </EnterLayoutScreen>
);

export default ScreensUserSignUp;
