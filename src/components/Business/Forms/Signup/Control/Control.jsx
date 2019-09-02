import React, { useState, useContext } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { WevedoServiceContext } from '../../../../../contexts';
import { fetchSignUp, fetchLogin, updateUser } from '../../../../../actions';

import ScreensBusinessFormsSignupMainInfo from '../../../../../screens/Business/Forms/Signup/MainInfo';
import ScreensBusinessFormsSignupLocationInfo from '../../../../../screens/Business/Forms/Signup/LocationInfo';
import ScreensBusinessFormsSignupImageUpload from '../../../../../screens/Business/Forms/Signup/ImageUpload';
import ScreensBusinessFormsSignupServiceInfo from '../../../../../screens/Business/Forms/Signup/ServiceInfo';

const ScreensBusinessFormsSignupControl = ({
  history,
  user,
  login,
  signUp,
  updateUser,
}) => {
  const wevedoService = useContext(WevedoServiceContext);

  const SCREENS = {
    MAIN_INFO: 'main-info',
    LOCATION_INFO: 'location-info',
    IMAGE_UPLOAD: 'image-upload',
    SERVICE_INFO: 'service-info',
  };
  const [currentScreen, setCurrentScreen] = useState(SCREENS.MAIN_INFO);

  const register = async () => {
    const body = {
      ...user,
      deviceOS: 'android', // TO-DO: 'web' should be later,
    };

    try {
      const newProvider = await signUp(wevedoService.register, body);

      if (newProvider) {
        await login(wevedoService.login, body);
        await updateUser(wevedoService.updateProfile)({
          ...newProvider,
          isProvider: true,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const nextStep = async () => {
    switch (currentScreen) {
      case SCREENS.MAIN_INFO:
        setCurrentScreen(SCREENS.LOCATION_INFO);
        break;
      case SCREENS.LOCATION_INFO:
        setCurrentScreen(SCREENS.IMAGE_UPLOAD);
        break;
      case SCREENS.IMAGE_UPLOAD:
        setCurrentScreen(SCREENS.SERVICE_INFO);
        break;
      case SCREENS.SERVICE_INFO:
        await register();
        history.push('/');
        break;
      default:
        history.push('/');
    }
  };

  const showScene = () => {
    switch (currentScreen) {
      case SCREENS.MAIN_INFO:
        return <ScreensBusinessFormsSignupMainInfo nextStep={nextStep} />;
      case SCREENS.LOCATION_INFO:
        return <ScreensBusinessFormsSignupLocationInfo nextStep={nextStep} />;
      case SCREENS.IMAGE_UPLOAD:
        return <ScreensBusinessFormsSignupImageUpload nextStep={nextStep} />;
      case SCREENS.SERVICE_INFO:
        return <ScreensBusinessFormsSignupServiceInfo nextStep={nextStep} />;
      default:
        return history.push('/');
    }
  };

  return showScene();
};

const mapStateToProps = ({ sessionData, userData }) => ({
  ...sessionData,
  ...userData,
});

const mapDispatchToProps = dispatch => ({
  login: fetchLogin(dispatch),
  signUp: fetchSignUp(dispatch),
  updateUser: updateUser(dispatch),
});

export default withRouter(
  compose(
    withRouter,
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
  )(ScreensBusinessFormsSignupControl),
);
