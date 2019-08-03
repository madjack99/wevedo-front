import React from 'react';

import DashboardBusinessHeader from '../../../../components/Dashboard/Business/Header';
import DashboardBusinessSidebar from '../../../../components/Dashboard/Business/Sidebar';
import { withScrollToTop } from '../../../../components/HOC';

const ScreensLayoutsDashboardBusiness = ({ children }) => (
  <React.Fragment>
    <DashboardBusinessHeader />
    <DashboardBusinessSidebar />
    {children}
  </React.Fragment>
);

export default withScrollToTop()(ScreensLayoutsDashboardBusiness);
