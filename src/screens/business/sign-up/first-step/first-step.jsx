import React from 'react';
import { withTranslation } from 'react-i18next';

import './first-step.scss';

import EnterLayoutScreen from '../../../layout/enter';
import FirstStepSignUpBusinessForm from '../../../../components/form/business/sign-up/first-step';

import userSideBackground from '../../../../assets/images/businesslogin.png';

const ScreensUserSignUp = ({ t }) => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle={t('businessAndUserSignup.jumbotron.largeTitle')}
    welcomeSubtitle={t('businessAndUserSignup.jumbotron.smallTitle')}
    welcomeText={t('businessAndUserSignup.jumbotron.text')}
  >
    <FirstStepSignUpBusinessForm />
  </EnterLayoutScreen>
);

export default withTranslation('common')(ScreensUserSignUp);
