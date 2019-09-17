import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import './StickyNotification.scss';

function StickyNotification({ user, t }) {
  if (user.fullName && !user.isApproved && !user.isRejected) {
    const text = t('stickyNotification.warning');
    return <ShowAlert variant="warning" text={text} />;
  }
  if (user.fullName && !user.isApproved && user.isRejected) {
    const text = t('stickyNotification.danger');
    return <ShowAlert variant="danger" text={text} />;
  }
  if (
    user.fullName &&
    user.isApproved &&
    !user.isRejected &&
    Cookies.get('isNew')
  ) {
    const text = t('stickyNotification.success');
    return <ShowAlert variant="success" text={text} />;
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
        onClose={
          variant === 'success'
            ? () => {
                setShow(false);
                Cookies.remove('isNew');
              }
            : () => setShow(false)
        }
      >
        {text}
      </Alert>
    );
  }
  return null;
};

export default withTranslation('common')(StickyNotification);
