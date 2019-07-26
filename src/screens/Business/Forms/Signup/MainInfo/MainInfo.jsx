import React from 'react';
import { withTranslation } from 'react-i18next';

import EnterLayoutScreen from '../../../../Layouts/Enter';
import FirstStepSignUpBusinessForm from '../../../../../components/Business/Forms/Signup/MainInfo';

import userSideBackground from '../../../../../assets/images/businesslogin.png';

const ScreensBusinessFormSignupMainInfo = ({ t }) => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle={t('businessAndUserSignup.jumbotron.largeTitle')}
    welcomeSubtitle={t('businessAndUserSignup.jumbotron.smallTitle')}
    welcomeText={t('businessAndUserSignup.jumbotron.text')}
  >
    <FirstStepSignUpBusinessForm />
  </EnterLayoutScreen>
);

export default withTranslation('common')(ScreensBusinessFormSignupMainInfo);
