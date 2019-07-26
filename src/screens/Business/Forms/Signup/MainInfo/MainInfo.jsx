import React from 'react';
import { withTranslation } from 'react-i18next';

import EnterLayoutScreen from '../../../../Layouts/EnterForm';
import FirstStepSignUpBusinessForm from '../../../../../components/Business/Forms/Signup/MainInfo';

import sideBackground from '../../../../../assets/images/businesslogin.png';

const ScreensBusinessFormsSignupMainInfo = ({ t }) => (
  <EnterLayoutScreen
    sideBackground={sideBackground}
    welcomeTitle={t('businessAndUserSignup.jumbotron.largeTitle')}
    welcomeSubtitle={t('businessAndUserSignup.jumbotron.smallTitle')}
    welcomeText={t('businessAndUserSignup.jumbotron.text')}
  >
    <FirstStepSignUpBusinessForm />
  </EnterLayoutScreen>
);

export default withTranslation('common')(ScreensBusinessFormsSignupMainInfo);
