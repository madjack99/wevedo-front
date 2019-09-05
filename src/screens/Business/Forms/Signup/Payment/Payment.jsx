import React from 'react';

import ScreensLayoutsMinimalistForm from '../../../../Layouts/MinimalistForm';
import Payment from '../../../../../components/Business/Forms/Signup/Payment';

const ScreensBusinessFormsSignupImageUpload = ({ nextStep }) => (
  <ScreensLayoutsMinimalistForm title="Payment">
    <Payment nextStep={nextStep} />
  </ScreensLayoutsMinimalistForm>
);

export default ScreensBusinessFormsSignupImageUpload;
