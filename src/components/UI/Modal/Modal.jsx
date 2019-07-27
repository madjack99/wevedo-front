import React from 'react';

import { Modal } from 'react-bootstrap';

export default function UIModal({ show, onHide, children }) {
  return (
    <Modal show={show} onHide={onHide} className="ui-modal" centered>
      <Modal.Header className="pb-0 border-0" closeButton />
      <Modal.Body className="p-0">{children}</Modal.Body>
    </Modal>
  );
}
