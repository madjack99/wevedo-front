import React from 'react';

import { Row, Container, Col } from 'react-bootstrap';

import DashboardHeader from '../../../../components/Dashboard/Header';
import DashboardUserSidebar from '../../../../components/Dashboard/User/Sidebar';
import SearchPanel from '../../../../components/Search/Panel';
import SearchPanelMobile from '../../../../components/Search/Panel/Mobile';
import { withScrollToTop } from '../../../../components/HOC';

const ScreensLayoutsDashboardUser = ({ children }) => (
  <React.Fragment>
    <DashboardHeader />
    <DashboardUserSidebar />
    <div className="dashboard dashboard-user__home">
      <div className="dashboard-background" />
      <Container>
        <Row className="venues-filters d-flex d-sm-none pt-4 pb-4 mb-4">
          <Col className="d-inline">
            <SearchPanelMobile />
          </Col>
        </Row>
      </Container>
      <SearchPanel />
      {children}
    </div>
  </React.Fragment>
);

export default withScrollToTop()(ScreensLayoutsDashboardUser);
