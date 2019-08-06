import React from 'react';

import { Row, Col } from 'react-bootstrap';

import DashboardMessagesInboxItem from '../Item';

const DashboardMessagesInboxView = () => {
  return (
    <Row className="d-none d-sm-block">
      <Col sm={12}>
        <DashboardMessagesInboxItem />
      </Col>
      <Col sm={12}>
        <DashboardMessagesInboxItem />
      </Col>
      <Col sm={12}>
        <DashboardMessagesInboxItem />
      </Col>
    </Row>
  );
};

export default DashboardMessagesInboxView;
