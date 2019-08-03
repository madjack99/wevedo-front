import React from 'react';

import DashboardHeader from '../../../../components/Dashboard/Header';
import DashboardUserSidebar from '../../../../components/Dashboard/User/Sidebar';
import { withScrollToTop } from '../../../../components/HOC';

const ScreensLayoutsDashboardUser = ({ children }) => (
  <React.Fragment>
    <DashboardHeader />
    <DashboardUserSidebar />
    {children}
  </React.Fragment>
);

export default withScrollToTop()(ScreensLayoutsDashboardUser);
