import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { Form, Button } from 'react-bootstrap';

import DashboardMessagesChatItemRecipient from '../Item/Recipient';
import DashboardMessagesChatItemSender from '../Item/Sender';

const DashboardMessagesChatView = ({
  user: authUser,
  messages,
  unreadMessages,
}) => {
  const { _id: userId } = authUser;

  return (
    <div className="dashboard-business__messageBox pt-2 pl-0 pr-0">
      <div className="d-flex align-items-center dashboard-business__messageBox-header pl-4 pb-0">
        <div className="dashboard-business__messageBox-img dashboard-business__messageBox-img-sm">
          <p>RB</p>
        </div>
        <p className="pl-3 pt-3">
          <b>Ryan Bradley</b>
        </p>
      </div>
      <div className="divider m-0 mb-4" />

      {messages.map(message =>
        message.sender === userId ? (
          <DashboardMessagesChatItemSender key={uniqid()} />
        ) : (
          <DashboardMessagesChatItemRecipient key={uniqid()} />
        ),
      )}

      <div className="d-flex dashboard-business__messageBox-submit">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Type something..."
          className="mr-2"
        />
        <Button>
          <i className="fas fa-paper-plane" />
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ userData }) => userData;

export default compose(connect(mapStateToProps))(DashboardMessagesChatView);
