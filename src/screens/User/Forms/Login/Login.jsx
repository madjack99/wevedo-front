import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { withoutAuth } from '../../../../components/HOC';

import EnterLayoutScreen from '../../../Layouts/Enter';
import FormUserLogin from '../../../../components/User/Forms/Login';

import userSideBackground from '../../../../assets/images/login-img.png';

const ScreensUserFormLogin = ({ t }) => {
  return (
    <EnterLayoutScreen
      sideBackground={userSideBackground}
      welcomeTitle={t('businessAndUserLogin.jumbotron.largeTitle')}
      welcomeSubtitle={t('businessAndUserLogin.jumbotron.smallTitle')}
    >
      <FormUserLogin />
    </EnterLayoutScreen>
  );
};

const mapStateToProps = ({ sessionData }) => sessionData;

export default compose(
  connect(mapStateToProps),
  withoutAuth(),
  withTranslation('common'),
)(ScreensUserFormLogin);
