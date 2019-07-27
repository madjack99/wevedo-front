import React from 'react';
import { Form } from 'react-bootstrap';

import './Checkbox.scss';

function UICheckbox({ labelText, ...rest }) {
  return (
    <div className="ui-checkbox">
      <Form.Check className="ui-checkbox" label={labelText} {...rest} />
    </div>
  );
}

export default UICheckbox;
