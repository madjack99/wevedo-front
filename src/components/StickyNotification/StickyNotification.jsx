import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import './StickyNotification.scss';

function StickyNotification({ user }) {
  if (user.fullName && !user.isApproved && !user.isRejected) {
    const text = 'Your account under review';
    return <ShowAlert variant="warning" text={text} />;
  }
  return null;
}

const ShowAlert = ({ variant, text }) => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert
        variant={variant}
        dismissible
        className="position-fixed text-center my-alert"
        onClose={() => setShow(false)}
      >
        {text}
      </Alert>
    );
  }
};

export default StickyNotification;
