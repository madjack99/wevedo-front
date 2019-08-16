import React from 'react';
import { withTranslation } from 'react-i18next';

import EnterLayoutScreen from '../../../Layouts/EnterForm';
import BusinessFormsLogin from '../../../../components/Business/Forms/Login';

import sideBackground from '../../../../assets/images/businesslogin.png';

const ScreensBusinessFormsLogin = ({ t }) => (
  <EnterLayoutScreen
    sideBackground={sideBackground}
    welcomeSubtitle={t('businessAndUserLogin.jumbotron.title')}
  >
    <BusinessFormsLogin />
  </EnterLayoutScreen>
);

export default withTranslation('common')(ScreensBusinessFormsLogin);
