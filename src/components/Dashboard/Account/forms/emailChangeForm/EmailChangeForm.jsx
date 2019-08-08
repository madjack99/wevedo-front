import React from 'react';
import { Formik } from 'formik';
import { Form, Button, InputGroup } from 'react-bootstrap';

import emailSchema from './emailSchema';

export const EmailChangeForm = () => {
  return (
    <Formik>
      {() => {
        return (
          <div>
            <p className="text-muted">E-Mail address</p>
            <InputGroup className="d-none d-sm-flex">
              <Form.Control size="lg" type="email" />
              <div className="input-group-append">
                <Button>Change the email</Button>
              </div>
            </InputGroup>
            <Form.Group className="d-block d-sm-none">
              <Form.Control size="lg" type="email" className="mb-2" />
              <Button size="lg">Change the email</Button>
            </Form.Group>
          </div>
        );
      }}
    </Formik>
  );
};
