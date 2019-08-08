import React from 'react';

import { Row, Col, Form, Button } from 'react-bootstrap';

import './Input.scss';

const DashboardMessagesChatInput = () => {
  return (
    <Form className="dashboard-messages-chat-input d-flex dashboard-business__messageBox-submit mb-0">
      <Form.Control
        className=" mr-2"
        size="lg"
        type="text"
        placeholder="Type something..."
      />
      <Button type="submit">
        <i className="fas fa-paper-plane" />
      </Button>
    </Form>
  );
};

export default DashboardMessagesChatInput;
