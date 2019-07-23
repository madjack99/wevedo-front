import React from 'react';
import { withTranslation } from 'react-i18next';

import './login.scss';

import EnterLayoutScreen from '../../layout/enter';
import LoginUserForm from '../../../components/form/user/login';

import userSideBackground from '../../../assets/images/login-img.png';

const ScreensUserSignUp = ({ t }) => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle={t('businessAndUserLogin.jumbotron.largeTitle')}
    welcomeSubtitle={t('businessAndUserLogin.jumbotron.smallTitle')}
  >
    <LoginUserForm />
  </EnterLayoutScreen>
);

export default withTranslation('common')(ScreensUserSignUp);
