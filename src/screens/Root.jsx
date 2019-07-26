import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScreensHome from './Home';
import ScreensContact from './Contact';
import ScreensTermsAndConditions from './TermsAndConditions';
import ScreensPrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';

const ScreensRoot = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ScreensHome} exact />
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
