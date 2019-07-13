import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form, Button, FormGroup,
} from 'react-bootstrap';

import './sign-up-form.scss';

import { fetchSignUp, fetchLogin, existingEmail } from '../../actions';
import { WevedoServiceContext } from '../contexts';

const SignUpForm = ({ signUp, login, existingEmail }) => {
  const wevedoService = useContext(WevedoServiceContext);

  return (
    <Formik
      className="sign-up-form"
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async ({ email, password }, { setSubmitting }) => {
        setSubmitting(false);

        const isNewEmail = await wevedoService.checkEmail({ email });
        const body = {
          email,
          password,
          deviceOS: 'android', // TO-DO: 'web' should be later
        };

        if (isNewEmail) {
          await signUp(wevedoService.register, body);
          return login(wevedoService.login, body);
        }

        return existingEmail('Email is already in use');
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Email is required!'),
        password: Yup.string()
          .min(6)
          .required('Password is required!'),
      })}
      render={({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-5" controlId="formEmail">
            <Form.Label className="mb-0">Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
              isInvalid={!!errors.email}
              autoComplete="new-email"
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label className="mb-0">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isValid={touched.password && !errors.password}
              isInvalid={!!errors.password}
              autoComplete="new-password"
            />
          </Form.Group>

          <FormGroup>
            <Form.Check className="mr-auto" label="Remember me" />
          </FormGroup>

          <FormGroup className="text-center text-uppercase">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              disabled={isSubmitting}
            >
              Sign up
            </Button>
          </FormGroup>
        </Form>
      )}
    />
  );
};

const mapStateToProps = ({ sessionData }) => sessionData;

const mapDispatchToProps = dispatch => ({
  signUp: fetchSignUp(dispatch),
  login: fetchLogin(dispatch),
  existingEmail: error => dispatch(existingEmail(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
