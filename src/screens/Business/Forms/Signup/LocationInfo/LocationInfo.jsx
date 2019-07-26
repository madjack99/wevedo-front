import React from 'react';

import EnterLayoutScreen from '../../../../Layouts/Enter';
import SecondStepSignUpBusinessForm from '../../../../../components/Business/Forms/Signup/LocationInfo';

import userSideBackground from '../../../../../assets/images/businesslogin.png';

const ScreensBusinessFormSignupLocationInfo = () => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle="Hey,"
    welcomeSubtitle="Glad to see you..."
    welcomeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  >
    <SecondStepSignUpBusinessForm />
  </EnterLayoutScreen>
);

export default ScreensBusinessFormSignupLocationInfo;
