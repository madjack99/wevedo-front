import React from 'react';

import { Row, Col } from 'react-bootstrap';

import DashboardMessagesInboxItem from '../../Item';

const DashbordMessagesInboxViewMobile = ({ rooms, onOpenModalRoom }) => {
  return (
    <Row className="d-flex d-sm-none">
      {rooms.map(room => {
        const { _id: roomId } = room;

        return (
          <Col
            className="w-100"
            sm={12}
            key={roomId}
            onClick={() => onOpenModalRoom(room)}
          >
            <DashboardMessagesInboxItem room={room} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DashbordMessagesInboxViewMobile;
