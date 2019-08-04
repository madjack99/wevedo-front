import React, { useState } from 'react';

import ScreensBusinessFormsSignupMainInfo from '../MainInfo';
import ScreensBusinessFormsSignupLocationInfo from '../LocationInfo';
import ScreensBusinessFormsSignupImageUpload from '../ImageUpload';
import ScreensBusinessFormsSignupServiceInfo from '../ServiceInfo';

const ScreensBusinessFormsSignupControl = ({ history }) => {
  const SCREENS = {
    MAIN_INFO: 'main-info',
    LOCATION_INFO: 'location-info',
    IMAGE_UPLOAD: 'image-upload',
    SERVICE_INFO: 'service-info',
  };
  const [currentScreen, setCurrentScreen] = useState(SCREENS.MAIN_INFO);

  const nextStep = () => {
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

export default ScreensBusinessFormsSignupControl;
