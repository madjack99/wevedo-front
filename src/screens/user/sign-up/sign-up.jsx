import React from 'react';
import { withTranslation } from 'react-i18next';

import './sign-up.scss';

import EnterLayoutScreen from '../../layout/enter';
import SignUpUserForm from '../../../components/form/user/sign-up';

import userSideBackground from '../../../assets/images/login-img.png';

const ScreensUserSignUp = ({ t }) => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle={t('businessAndUserSignup.jumbotron.largeTitle')}
    welcomeSubtitle={t('businessAndUserSignup.jumbotron.smallTitle')}
  >
    <SignUpUserForm />
  </EnterLayoutScreen>
);

export default withTranslation('common')(ScreensUserSignUp);
