import React from 'react';
import { Formik } from 'formik';
import { Form, Button, InputGroup, Alert } from 'react-bootstrap';

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
          setSubmitting(false);
        } catch (err) {
          setErrors({
            fullName: err.message,
          });
          setSubmitting(false);
        }
      }}
      validationSchema={emailSchema}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <p className="text-muted">E-Mail address</p>
            <InputGroup className="d-none d-sm-flex">
              <Form.Control
                className=" form__control__account "
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={values.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
                size="lg"
              />

              <div className="input-group-append">
                <Button type="submit" disabled={isSubmitting}>
                  Change the email
                </Button>
              </div>
            </InputGroup>
            {errors.email && (
              <Alert variant="danger" className="mt-1">
                {errors.email}
              </Alert>
            )}
            <Form.Group className="d-block d-sm-none">
              <Form.Control
                className=" form__control__account "
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={values.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
                size="lg"
              />
              <Button
                size="lg"
                type="submit"
                className="mt-2"
                disabled={isSubmitting}
              >
                Change the email
              </Button>
            </Form.Group>
          </Form>
        );
      }}
    </Formik>
  );
};
