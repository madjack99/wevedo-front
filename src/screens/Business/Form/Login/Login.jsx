import React from 'react';
import { withTranslation } from 'react-i18next';

import EnterLayoutScreen from '../../../Layouts/Enter';
import LoginBusinessForm from '../../../../components/Business/Form/Login';

import userSideBackground from '../../../../assets/images/businesslogin.png';

const ScreensBusinessFormLogin = ({ t }) => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle={t('businessAndUserLogin.jumbotron.largeTitle')}
    welcomeSubtitle={t('businessAndUserLogin.jumbotron.smallTitle')}
  >
    <LoginBusinessForm />
  </EnterLayoutScreen>
);

export default withTranslation('common')(ScreensBusinessFormLogin);
