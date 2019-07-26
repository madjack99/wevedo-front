import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { withoutAuth } from '../../../../components/HOC';

import EnterLayoutScreen from '../../../Layouts/Enter';
import SignUpUserForm from '../../../../components/User/Form/Signup';

import userSideBackground from '../../../../assets/images/login-img.png';

const ScreensUserFormSignUp = ({ t }) => (
  <EnterLayoutScreen
    sideBackground={userSideBackground}
    welcomeTitle={t('businessAndUserSignup.jumbotron.largeTitle')}
    welcomeSubtitle={t('businessAndUserSignup.jumbotron.smallTitle')}
  >
    <SignUpUserForm />
  </EnterLayoutScreen>
);

const mapStateToProps = ({ sessionData }) => sessionData;

export default compose(
  connect(mapStateToProps),
  withoutAuth(),
  withTranslation('common'),
)(ScreensUserFormSignUp);
