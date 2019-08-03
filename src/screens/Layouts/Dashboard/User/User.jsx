import React from 'react';

import DashboardUserHeader from '../../../../components/Dashboard/User/Header';
import DashboardUserSidebar from '../../../../components/Dashboard/User/Sidebar';
import { withScrollToTop } from '../../../../components/HOC';

const ScreensLayoutsDashboardUser = ({ children }) => (
  <React.Fragment>
    <DashboardUserHeader />
    <DashboardUserSidebar />
    {children}
  </React.Fragment>
);

export default withScrollToTop()(ScreensLayoutsDashboardUser);
