import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import EnterLayoutScreen from '../../../Layouts/EnterForm';
import UserFormsSignup from '../../../../components/User/Forms/Signup';

import sideBackground from '../../../../assets/images/login-img.png';

const ScreensUserFormsSignUp = ({ t }) => (
  <EnterLayoutScreen
    sideBackground={sideBackground}
    welcomeTitle={t('businessAndUserSignup.jumbotron.largeTitle')}
    welcomeSubtitle={t('businessAndUserSignup.jumbotron.smallTitle')}
  >
    <UserFormsSignup />
  </EnterLayoutScreen>
);

const mapStateToProps = ({ sessionData }) => sessionData;

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
)(ScreensUserFormsSignUp);
