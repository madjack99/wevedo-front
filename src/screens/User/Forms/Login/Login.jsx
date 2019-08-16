import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import EnterLayoutScreen from '../../../Layouts/EnterForm';
import UserFormsLogin from '../../../../components/User/Forms/Login';

import sideBackground from '../../../../assets/images/login-img.png';

const ScreensUserFormsLogin = ({ t }) => {
  return (
    <EnterLayoutScreen
      sideBackground={sideBackground}
      welcomeSubtitle={t('businessAndUserLogin.jumbotron.title')}
    >
      <UserFormsLogin />
    </EnterLayoutScreen>
  );
};

const mapStateToProps = ({ sessionData }) => sessionData;

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
)(ScreensUserFormsLogin);
