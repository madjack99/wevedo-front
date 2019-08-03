import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScreensHome from './Home';
import ScreensUserFormsLogin from './User/Forms/Login';
import ScreensUserFormsSignup from './User/Forms/Signup';
import ScreensBusinessFormsLogin from './Business/Forms/Login';
import ScreensBusinessFormsSignupControl from './Business/Forms/Signup/Control';
import ScreensUserDashboardHome from './User/Dashboard/Home';
import ScreensUserDashboardAccount from './User/Dashboard/Account';
import ScreensUserDashboardMessages from './User/Dashboard/Messages';
import ScreensBusinessDashboardAccount from './Business/Dashboard/Account';
import ScreensBusinessDashboardProfile from './Business/Dashboard/Profile';
import ScreensBusinessDashboardMessages from './Business/Dashboard/Messages';
import ScreensSupplierCategories from './Supplier/Categories';
import ScreensSupplierFilteredList from './Supplier/FilteredList';
import ScreensSupplierDetails from './Supplier/Details';
import ScreensContact from './Contact';
import ScreensTermsAndConditions from './TermsAndConditions';
import ScreensPrivacyPolicy from './PrivacyPolicy';

const ScreensRoot = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ScreensHome} exact />
        <Route path="/login" component={ScreensUserFormsLogin} />
        <Route path="/signup" component={ScreensUserFormsSignup} />
        <Route path="/business/login" component={ScreensBusinessFormsLogin} />
        <Route
          path="/business/signup"
          component={ScreensBusinessFormsSignupControl}
        />
        <Route
          path="/dashboard/user/account"
          component={ScreensUserDashboardAccount}
        />
        <Route
          path="/dashboard/user/messages"
          component={ScreensUserDashboardMessages}
        />
        <Route path="/dashboard/user/" component={ScreensUserDashboardHome} />
        <Route
          path="/dashboard/business/account"
          component={ScreensBusinessDashboardAccount}
        />
        <Route
          path="/dashboard/business/messages"
          component={ScreensBusinessDashboardMessages}
        />
        <Route
          path="/dashboard/business/profile"
          component={ScreensBusinessDashboardProfile}
        />
        <Route
          path="/suppliers/categories"
          component={ScreensSupplierCategories}
        />
        <Route
          path="/suppliers/details/:id/"
          component={ScreensSupplierDetails}
        />
        <Route
          path="/suppliers/:category/:pageNumber"
          component={ScreensSupplierFilteredList}
        />
        <Route
          path="/suppliers/:category/"
          component={ScreensSupplierFilteredList}
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
