import React from 'react';
import './rememberMe.scss';
import { Form } from 'react-bootstrap';

function RememberMe() {
  return (
    <div>
      <Form.Check id="checkBoxLabel" className="form__check mr-auto" label="Remember me" />
    </div>
  );
}

export default RememberMe;
