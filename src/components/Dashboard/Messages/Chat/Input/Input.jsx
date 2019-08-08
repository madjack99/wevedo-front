import React, { useState, useContext } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';

import './Input.scss';

import { WevedoServiceContext } from '../../../../../contexts';

const DashboardMessagesChatInput = ({ chat }) => {
  const [message, setMessage] = useState('');
  const wevedoService = useContext(WevedoServiceContext);

  const onSubmit = e => {
    e.preventDefault();

    setMessage('');

    const { _id: userId } = chat.user;
    const { _id: supplierId } = chat.provider;
    const { _id: roomId } = chat;
    const body = {
      sender: userId,
      recipient: supplierId,
      body: message,
    };

    wevedoService.addMessage(roomId, body);
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
