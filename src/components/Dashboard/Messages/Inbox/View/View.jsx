import React from 'react';
import uniqid from 'uniqid';

import { Row, Col } from 'react-bootstrap';

import DashboardMessagesInboxItem from '../Item';

const DashboardMessagesInboxView = ({ rooms }) => {
  return (
    <Row className="d-none d-sm-block">
      {rooms.map(room => (
        <Col sm={12} key={uniqid}>
          <DashboardMessagesInboxItem room={room} />
        </Col>
      ))}
    </Row>
  );
};

export default DashboardMessagesInboxView;
