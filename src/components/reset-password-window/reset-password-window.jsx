import React from 'react';

import { Row, Col, Modal } from 'react-bootstrap';

import './reset-password-window.scss';

import ModalWindow from '../ui/modal-window';

export default function ResetPasswordWindow({ show, onHide }) {
  return (
    <ModalWindow show={show} onHide={onHide}>
      <Row>
        <Col sm={12} className="px-5 pb-5 text-center">
          <Modal.Title className="text-center text-uppercase font-weight-bold w-100 pt-2">
            Reset password
          </Modal.Title>
          <hr />
          <p className="mb-0">
            Reset password has been sent to user@email.com address.
            <br />
            Please check your e-mail.
          </p>
        </Col>
      </Row>
    </ModalWindow>
  );
}
