import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScreensHome from './Home';
import ScreensUserFormsLogin from './User/Forms/Login';
import ScreensUserFormsSignup from './User/Forms/Signup';
import ScreensBusinessFormsLogin from './Business/Forms/Login';
import ScreensBusinessFormsSignupMainInfo from './Business/Forms/Signup/MainInfo';
import ScreensBusinessFormsSignupLocationInfo from './Business/Forms/Signup/LocationInfo';
import ScreensBusinessFormsSignupImageUpload from './Business/Forms/Signup/ImageUpload';
import ScreensBusinessFormsSignupServiceInfo from './Business/Forms/Signup/ServiceInfo';
import ScreensUserDashboardHome from './User/Dashboard/Home';
import ScreensUserDashboardMessages from './User/Dashboard/Messages';
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
          path="/business/signup/main-info"
          component={ScreensBusinessFormsSignupMainInfo}
        />
        <Route
          path="/business/signup/location-info"
          component={ScreensBusinessFormsSignupLocationInfo}
        />
        <Route
          path="/business/signup/image-upload"
          component={ScreensBusinessFormsSignupImageUpload}
        />
        <Route
          path="/business/signup/service-info"
          component={ScreensBusinessFormsSignupServiceInfo}
        />
        <Route
          path="/dashboard/user/messages"
          component={ScreensUserDashboardMessages}
        />
        <Route path="/dashboard/user/" component={ScreensUserDashboardHome} />
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
