import React from 'react';

import { Row, Col } from 'react-bootstrap';

import DashboardMessagesInboxItem from '../../Item';

const DashbordMessagesInboxViewMobile = ({ onOpenChat }) => {
  return (
    <Row className="d-block d-sm-none">
      <Col onClick={onOpenChat}>
        <Row>
          <Col sm={12}>
            <DashboardMessagesInboxItem />
          </Col>
          <Col sm={12}>
            <DashboardMessagesInboxItem />
          </Col>
          <Col sm={12}>
            <DashboardMessagesInboxItem />
          </Col>
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
      </Col>
    </Row>
  );
};

export default DashbordMessagesInboxViewMobile;
