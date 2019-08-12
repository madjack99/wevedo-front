import React, { useState, useContext } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';

import './Input.scss';

import { WevedoServiceContext } from '../../../../../contexts';

const DashboardMessagesChatInput = ({ user: authUser, room, onSend }) => {
  const [message, setMessage] = useState('');
  const wevedoService = useContext(WevedoServiceContext);

  const onSubmit = async e => {
    e.preventDefault();

    setMessage('');

    const { _id: authUserId } = authUser;
    const { _id: userId } = room.user;
    const { _id: supplierId } = room.provider;
    const { _id: roomId } = room;

    const recipient = authUser.isProvider ? userId : supplierId;

    const body = {
      sender: authUserId,
      recipient,
      body: message,
    };

    await wevedoService.addMessage(roomId, body);
    onSend();
  };

  return (
    <Form
      className="dashboard-messages-chat-input d-flex dashboard-business__messageBox-submit mb-0"
      onSubmit={onSubmit}
    >
      <Form.Control
        className=" mr-2"
        size="lg"
        type="text"
        placeholder="Type something..."
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button type="submit" disabled={!message.trim()}>
        <i className="fas fa-paper-plane" />
      </Button>
    </Form>
  );
};

const mapStateToProps = ({ userData }) => userData;

export default compose(connect(mapStateToProps))(DashboardMessagesChatInput);
