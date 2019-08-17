import React from 'react';

import { Row, Col, Modal } from 'react-bootstrap';

import UIModal from '../../UI/Modal';

const ResetPasswordDialog = ({ show, onHide, email }) => (
  <UIModal show={show} onHide={onHide}>
    <Row>
      <Col sm={12} className="px-5 pb-5 text-center">
        <Modal.Title className="text-center text-uppercase font-weight-bold w-100 pt-2">
          Reset password
        </Modal.Title>
        <hr />
        <p className="mb-0">
          Reset password has been sent to {email} address.
          <br />
          Please check your e-mail.
        </p>
      </Col>
    </Row>
  </UIModal>
);

export default ResetPasswordDialog;
