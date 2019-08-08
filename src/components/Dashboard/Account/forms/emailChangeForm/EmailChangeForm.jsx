import React from 'react';
import { Formik } from 'formik';
import { Form, Button, InputGroup } from 'react-bootstrap';

import emailSchema from './emailSchema';

export const EmailChangeForm = ({ email, updateProfile, updateUser }) => {
  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        email: email || '',
      }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          const result = await updateUser(updateProfile)({
            email: values.email,
          });
        } catch (err) {
          setErrors({
            fullName: 'Server error',
          });
        }
      }}
    >
      {() => {
        return (
          <Form>
            <p className="text-muted">E-Mail address</p>
            <InputGroup className="d-none d-sm-flex">
              <Form.Control
                size="lg"
                type="email"
                className=" form__control__account "
              />
              <div className="input-group-append">
                <Button>Change the email</Button>
              </div>
            </InputGroup>
            <Form.Group className="d-block d-sm-none">
              <Form.Control
                size="lg"
                type="email"
                className="mb-2 form__control__account"
              />
              <Button size="lg">Change the email</Button>
            </Form.Group>
          </Form>
        );
      }}
    </Formik>
  );
};
