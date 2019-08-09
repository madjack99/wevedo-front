import React from 'react';
import uniqid from 'uniqid';

import { Row, Col } from 'react-bootstrap';

import DashboardMessagesInboxItem from '../../Item';

const DashbordMessagesInboxViewMobile = ({ rooms, onOpenChat }) => {
  return (
    <Row className="d-flex d-sm-none">
      {rooms.map(room => (
        <Col
          className="w-100"
          sm={12}
          key={uniqid()}
          onClick={() => onOpenChat(room)}
        >
          <DashboardMessagesInboxItem room={room} />
        </Col>
      ))}
    </Row>
  );
};

export default DashbordMessagesInboxViewMobile;
