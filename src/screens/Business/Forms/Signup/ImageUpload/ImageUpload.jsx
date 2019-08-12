import React from 'react';
import { withTranslation } from 'react-i18next';

import ScreensLayoutsMinimalistForm from '../../../../Layouts/MinimalistForm';
import ImageUpload from '../../../../../components/Business/Forms/Signup/ImageUpload';

const ScreensBusinessFormsSignupImageUpload = ({ history, t, nextStep }) => (
  <ScreensLayoutsMinimalistForm title={`${t('imgUpload.uploadPhotos')}`}>
    <ImageUpload history={history} nextStep={nextStep} />
  </ScreensLayoutsMinimalistForm>
);

export default withTranslation('common')(ScreensBusinessFormsSignupImageUpload);
