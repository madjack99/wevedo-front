import React from 'react';
import { compose } from 'redux';

import DashboardHeader from '../../../components/Dashboard/Header';
import DashboardSidebar from '../../../components/Dashboard/Sidebar';
import { withAuth, withScrollToTop } from '../../../components/HOC';

const ScreensLayoutsDashboard = ({ children }) => (
  <React.Fragment>
    <DashboardHeader />
    <DashboardSidebar />
    {children}
  </React.Fragment>
);

export default compose(
  withAuth(),
  withScrollToTop(),
)(ScreensLayoutsDashboard);
