import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScreensHome from './Home';
import ScreensPrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import ScreensContact from './Contact';

const ScreensRoot = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ScreensHome} exact />
        <Route path="/privacy-policy" component={ScreensPrivacyPolicy} />
        <Route path="/contact" component={ScreensContact} />
      </Switch>
    </Router>
  );
};

export default ScreensRoot;
