import React from 'react';
import { withTranslation } from 'react-i18next';

import ScreensLayoutsMinimalistForm from '../../../../Layouts/MinimalistForm';
import ImageUpload from '../../../../../components/ImageUpload';

const ScreensBusinessFormsSignupImageUpload = ({ history, t }) => (
  <ScreensLayoutsMinimalistForm title={`${t('imgUpload.uploadPhotos')}`}>
    <ImageUpload history={history} />
  </ScreensLayoutsMinimalistForm>
);

export default withTranslation('common')(ScreensBusinessFormsSignupImageUpload);
