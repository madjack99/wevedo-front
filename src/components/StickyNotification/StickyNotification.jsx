import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import './StickyNotification.scss';

function StickyNotification() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert
        variant="warning"
        dismissible
        className="position-fixed text-center my-alert"
        onClose={() => setShow(false)}
      >
        Your account under review
      </Alert>
    );
  }
  return null;
}

export default StickyNotification;
