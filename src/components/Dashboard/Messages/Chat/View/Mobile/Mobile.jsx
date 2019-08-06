import React from 'react';

import { Row, Col, Form, Button, Modal } from 'react-bootstrap';

import DashboardMessagesChatItemRecipient from '../../Item/Recipient';
import DashboardMessagesChatItemSender from '../../Item/Sender';

const DashboardMessagesChatViewMobile = ({ show, onHide, ...rest }) => (
  <Modal
    show={show}
    onHide={onHide}
    {...rest}
    size="lg"
    aria-labelledby="send-a-message-to-customer"
    centered
    className="send-a-message-to-customer m-0"
  >
    <Modal.Header>
      <Row className="w-100 align-items-center">
        <Col xs={2} className="d-flex" onClick={onHide}>
          <i className="fas fa-arrow-left fa-2x" />
        </Col>
        <Col xs={2} className="align-self-center">
          <span className="username-circle">RB</span>
        </Col>
        <Col xs={8}>
          <p className="m-0">Ryan Bradley</p>
        </Col>
      </Row>
    </Modal.Header>
    <Modal.Body className="d-flex align-items-end">
      <Row className="w-100 m-0">
        <Col>
          <DashboardMessagesChatItemRecipient />
          <DashboardMessagesChatItemSender />
          <DashboardMessagesChatItemRecipient />
          <DashboardMessagesChatItemSender />
          <DashboardMessagesChatItemRecipient />
          <DashboardMessagesChatItemSender />
        </Col>
      </Row>
    </Modal.Body>
    <Modal.Footer className="d-block">
      <div className="d-flex">
        <Form.Control
          type="text"
          placeholder="Type something..."
          className="mr-2"
        />
        <Button className="pl-4 pr-4">
          <i className="fas fa-paper-plane" />
        </Button>
      </div>
    </Modal.Footer>
  </Modal>
);

export default DashboardMessagesChatViewMobile;
