import React, { useState, useContext } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import { Row, Col, Button, Modal, Form } from 'react-bootstrap';

import modalimg from '../../../assets/images/wedding dress.png';

import { WevedoServiceContext } from '../../../contexts';

const SupplierMessageDialog = ({ show, onHide, supplier, user, history }) => {
  const [message, setMessage] = useState('');

  const wevedoService = useContext(WevedoServiceContext);

  const onSubmit = async event => {
    event.preventDefault();

    const { data: room } = await wevedoService.createRoom({
      user,
      provider: supplier,
    });
    const { _id: userId } = user;
    const { _id: supplierId } = supplier;
    const { _id: roomId } = room;
    const body = {
      sender: userId,
      recipient: supplierId,
      body: message,
    };

    await wevedoService.addMessage(roomId, body);

    await wevedoService.sendEmailToSupplier(body);

    history.push('/dashboard/messages');
  };

  return (
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
            <Form onSubmit={onSubmit}>
              <h5>Send a message to {supplier.fullName}</h5>
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
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      rows="3"
                      onChange={e => setMessage(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col className="text-center text-uppercase">
                  <Button type="submit" size="lg">
                    Send
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = ({ userData }) => userData;

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
  withRouter,
)(SupplierMessageDialog);
