import React from 'react';
import uniqid from 'uniqid';

import { Row, Col } from 'react-bootstrap';

import DashboardMessagesInboxItem from '../../Item';

const DashbordMessagesInboxViewMobile = ({ rooms, onOpenChat }) => {
  return (
    <Row className="d-block d-sm-none">
      <Col onClick={onOpenChat}>
        <Row>
          {rooms.map(room => (
            <Col sm={12} key={uniqid}>
              <DashboardMessagesInboxItem room={room} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default DashbordMessagesInboxViewMobile;
