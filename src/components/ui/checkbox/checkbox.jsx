import React from 'react';
import './checkbox.scss';
import { Form } from 'react-bootstrap';

function Checkbox({ labelText, ...rest }) {
  return (
    <div className="global-checkbox">
      <Form.Check className="global-checkbox" label={labelText} {...rest} />
    </div>
  );
}

export default Checkbox;
