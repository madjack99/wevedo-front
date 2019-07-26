import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScreensHome from './Home';
import ScreensUserFormLogin from './User/Form/Login';
import ScreensUserFormSignup from './User/Form/Signup';
import ScreensBusinessFormLogin from './Business/Form/Login';
import ScreensBusinessFormSignupMainInfo from './Business/Form/Signup/MainInfo';
import ScreensBusinessFormSignupLocationInfo from './Business/Form/Signup/LocationInfo';
import ScreensBusinessFormSignupServiceInfo from './Business/Form/Signup/ServiceInfo';
import ScreensContact from './Contact';
import ScreensTermsAndConditions from './TermsAndConditions';
import ScreensPrivacyPolicy from './PrivacyPolicy';
import ImgUpload from '../components/form/imgUpload';

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
