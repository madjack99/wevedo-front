import React from 'react';

import EnterLayoutScreen from '../../../../Layouts/EnterForm';
import BusinessFormsSignupLocationInfo from '../../../../../components/Business/Forms/Signup/LocationInfo';

import sideBackground from '../../../../../assets/images/businesslogin.png';

const ScreensBusinessFormsSignupLocationInfo = () => (
  <EnterLayoutScreen
    sideBackground={sideBackground}
    welcomeTitle="Hey,"
    welcomeSubtitle="Glad to see you..."
    welcomeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  >
    <BusinessFormsSignupLocationInfo />
  </EnterLayoutScreen>
);

export default ScreensBusinessFormsSignupLocationInfo;