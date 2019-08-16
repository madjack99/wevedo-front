import React from 'react';

import EnterLayoutScreen from '../../../../Layouts/EnterForm';
import BusinessFormsSignupLocationInfo from '../../../../../components/Business/Forms/Signup/LocationInfo';

import sideBackground from '../../../../../assets/images/businesslogin.png';

const ScreensBusinessFormsSignupLocationInfo = ({ nextStep }) => (
  <EnterLayoutScreen
    sideBackground={sideBackground}
    welcomeTitle="Hey,"
    welcomeSubtitle="Glad to see you..."
  >
    <BusinessFormsSignupLocationInfo nextStep={nextStep} />
  </EnterLayoutScreen>
);

export default ScreensBusinessFormsSignupLocationInfo;
