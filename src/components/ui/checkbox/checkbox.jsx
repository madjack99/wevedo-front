import React from 'react';
import './checkbox.scss';
import { Form } from 'react-bootstrap';

function Checkbox({ labelText }) {
  return (
    <div>
      <Form.Check id="checkBoxLabel" className="form__check mr-auto" label={labelText} />
    </div>
  );
}

export default Checkbox;
