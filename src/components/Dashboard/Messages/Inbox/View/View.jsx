import React from 'react';
import uniqid from 'uniqid';

import { Row, Col } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

import DashboardMessagesInboxItem from '../Item';

const DashboardMessagesInboxView = ({ rooms, onOpenChat, ...rest }) => {
  return (
    <div className="d-none d-sm-flex flex-column w-100" {...rest}>
      <Scrollbars className="align-self-stretch">
        {rooms.map(room => {
          return (
            <Col sm={12} key={uniqid()} onClick={() => onOpenChat(room)}>
              <DashboardMessagesInboxItem room={room} />
            </Col>
          );
        })}
      </Scrollbars>
    </div>
  );
};

export default DashboardMessagesInboxView;
