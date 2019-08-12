import React from 'react';

import ScreensLayoutsMinimalistForm from '../../../../Layouts/MinimalistForm';
import BusinessFormsSignupServiceInfo from '../../../../../components/Business/Forms/Signup/ServiceInfo';

const ScreensBusinessFormsSignupServiceInfo = ({ nextStep }) => (
  <ScreensLayoutsMinimalistForm title="Basic info">
    <BusinessFormsSignupServiceInfo nextStep={nextStep} />
  </ScreensLayoutsMinimalistForm>
);

export default ScreensBusinessFormsSignupServiceInfo;
