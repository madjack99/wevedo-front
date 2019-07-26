import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScreensHome from './Home';
import ScreensUserFormLogin from './User/Forms/Login';
import ScreensUserFormSignup from './User/Forms/Signup';
import ScreensBusinessFormLogin from './Business/Forms/Login';
import ScreensBusinessFormSignupMainInfo from './Business/Forms/Signup/MainInfo';
import ScreensBusinessFormSignupLocationInfo from './Business/Forms/Signup/LocationInfo';
import ScreensBusinessFormSignupServiceInfo from './Business/Forms/Signup/ServiceInfo';
import ScreensContact from './Contact';
import ScreensTermsAndConditions from './TermsAndConditions';
import ScreensPrivacyPolicy from './PrivacyPolicy';
import ImgUpload from '../components/ImageUpload';

const ScreensRoot = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ScreensHome} exact />
        <Route path="/login" component={ScreensUserFormLogin} />
        <Route path="/signup" component={ScreensUserFormSignup} />
        <Route path="/business/login" component={ScreensBusinessFormLogin} />
        <Route
          path="/business/signup/main-info"
          component={ScreensBusinessFormSignupMainInfo}
        />
        <Route
          path="/business/signup/location-info"
          component={ScreensBusinessFormSignupLocationInfo}
        />
        <Route path="/business/signup/images-upload" component={ImgUpload} />
        <Route
          path="/business/signup/service-info"
          component={ScreensBusinessFormSignupServiceInfo}
        />
        <Route path="/contact" component={ScreensContact} />
        <Route
          path="/terms-and-conditions"
          component={ScreensTermsAndConditions}
        />
        <Route path="/privacy-policy" component={ScreensPrivacyPolicy} />
      </Switch>
    </Router>
  );
};

export default ScreensRoot;
