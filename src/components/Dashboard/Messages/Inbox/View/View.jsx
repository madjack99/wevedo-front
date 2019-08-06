import React from 'react';
import uniqid from 'uniqid';

import { Row, Col } from 'react-bootstrap';

import DashboardMessagesInboxItem from '../Item';

const DashboardMessagesInboxView = ({ rooms, onOpenChat, ...rest }) => {
  return (
    <Row className="d-none d-sm-block" {...rest}>
      {rooms.map(room => {
        return (
          <Col sm={12} key={uniqid} onClick={() => onOpenChat(room)}>
            <DashboardMessagesInboxItem room={room} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DashboardMessagesInboxView;
