import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

import DashboardMessagesInboxItem from '../../Item';

const DashboardMessagesInboxViewDesktop = ({ rooms, onOpenRoom }) => {
  return (
    <Scrollbars className="d-none d-sm-flex flex-column align-self-stretch w-100">
      <Row className="m-0">
        {rooms.map(room => {
          const { _id: roomId } = room;
          return (
            <Col
              className="p-0"
              sm={12}
              key={roomId}
              onClick={() => onOpenRoom(room)}
            >
              <DashboardMessagesInboxItem room={room} />
            </Col>
          );
        })}
      </Row>
    </Scrollbars>
  );
};

export default DashboardMessagesInboxViewDesktop;
