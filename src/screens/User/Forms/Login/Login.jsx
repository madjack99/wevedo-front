import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { withoutAuth } from '../../../../components/HOC';

import EnterLayoutScreen from '../../../Layouts/EnterForm';
import UserFormsLogin from '../../../../components/User/Forms/Login';

import sideBackground from '../../../../assets/images/login-img.png';

const ScreensUserFormsLogin = ({ t }) => {
  return (
    <EnterLayoutScreen
      sideBackground={sideBackground}
      welcomeTitle={t('businessAndUserLogin.jumbotron.largeTitle')}
      welcomeSubtitle={t('businessAndUserLogin.jumbotron.smallTitle')}
    >
      <UserFormsLogin />
    </EnterLayoutScreen>
  );
};

const mapStateToProps = ({ sessionData }) => sessionData;

export default compose(
  connect(mapStateToProps),
  withoutAuth(),
  withTranslation('common'),
)(ScreensUserFormsLogin);
