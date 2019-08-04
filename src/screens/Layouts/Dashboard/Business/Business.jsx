import React from 'react';
import { compose } from 'redux';

import DashboardBusinessHeader from '../../../../components/Dashboard/Business/Header';
import DashboardBusinessSidebar from '../../../../components/Dashboard/Business/Sidebar';
import { withAuth, withScrollToTop } from '../../../../components/HOC';

const ScreensLayoutsDashboardBusiness = ({ children }) => (
  <React.Fragment>
    <DashboardBusinessHeader />
    <DashboardBusinessSidebar />
    {children}
  </React.Fragment>
);

export default compose(
  withAuth(),
  withScrollToTop(),
)(ScreensLayoutsDashboardBusiness);
