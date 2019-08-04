import React from 'react';
import { compose } from 'redux';

import DashboardUserHeader from '../../../../components/Dashboard/User/Header';
import DashboardUserSidebar from '../../../../components/Dashboard/User/Sidebar';
import { withAuth, withScrollToTop } from '../../../../components/HOC';

const ScreensLayoutsDashboardUser = ({ children }) => (
  <React.Fragment>
    <DashboardUserHeader />
    <DashboardUserSidebar />
    {children}
  </React.Fragment>
);

export default compose(
  withAuth(),
  withScrollToTop(),
)(ScreensLayoutsDashboardUser);
