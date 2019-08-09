import React from 'react';
import uniqid from 'uniqid';

import { Row, Col } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

import DashboardMessagesInboxItem from '../Item';

const DashboardMessagesInboxView = ({ rooms, onOpenChat }) => {
  return (
    <Scrollbars className="d-none d-sm-flex flex-column align-self-stretch w-100">
      <Row className="m-0">
        {rooms
          .sort(
            (a, b) =>
              new Date(b.messages[b.messages.length - 1].createdAt) -
              new Date(a.messages[a.messages.length - 1].createdAt),
          )
          .map(room => {
            return (
              <Col
                className="p-0"
                sm={12}
                key={uniqid()}
                onClick={() => onOpenChat(room)}
              >
                <DashboardMessagesInboxItem room={room} />
              </Col>
            );
          })}
      </Row>
    </Scrollbars>
  );
};

export default DashboardMessagesInboxView;
