import React from 'react';

import { Row, Col, Button, Modal, Form } from 'react-bootstrap';

import modalimg from '../../../assets/images/wedding dress.png';

const SupplierMessageDialog = ({ show, onHide }) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="send-a-message-to-supplier"
    centered
    className="global-modal"
  >
    <Modal.Body className="p-0 send-a-message-to-supplier">
      <Row>
        <Button className="modal-close-btn" onClick={onHide} variant="link">
          <i className="fas fa-times fa-2x" />
        </Button>
        <Col sm={4} className="p-0 d-none d-md-flex">
          <img src={modalimg} alt="" />
        </Col>
        <Col sm={8}>
          <Form>
            <h5>Send a message to Supplier Name</h5>
            <hr className="hr-sm m-0 mt-3 mb-4 d-none d-md-block" />
            <Row>
              <Col sm={12} className="mb-4">
                <Form.Group controlId="">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="">
                  <Form.Control type="number" placeholder="Mobile Number" />
                </Form.Group>
              </Col>
              <Col sm={12} className="mt-4 mb-4">
                <Form.Group controlId="">
                  <Form.Control as="textarea" placeholder="Message" rows="3" />
                </Form.Group>
              </Col>
              <Col className="text-center text-uppercase">
                <Button size="lg">Send</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
);

export default SupplierMessageDialog;
