import React from 'react';

import { Row, Col, Modal } from 'react-bootstrap';

import UIModal from '../../../UI/Modal';

const ResetPasswordDialogError = ({ show, onHide }) => (
  <UIModal show={show} onHide={onHide}>
    <Row>
      <Col sm={12} className="px-5 pb-5 text-center">
        <Modal.Title className="text-center text-uppercase font-weight-bold w-100 pt-2">
          Error
        </Modal.Title>
        <hr />
        <p>Enter email or phone number to reset password</p>
      </Col>
    </Row>
  </UIModal>
);

export default ResetPasswordDialogError;
