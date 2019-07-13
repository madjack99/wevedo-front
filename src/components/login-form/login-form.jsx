import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Row, Col, Form, Button, FormGroup,
} from 'react-bootstrap';

import './login-form.scss';

import { fetchLogin } from '../../actions';
import { WevedoServiceContext } from '../contexts';

import ResetPasswordWindow from '../reset-password-window';

const LoginForm = ({ login }) => {
  const [modalShow, setModalShow] = useState(false);

  const storeService = useContext(WevedoServiceContext);

  return (
    <Formik
      className="login-form"
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false);
        login(storeService.login, {
          email: values.email,
          password: values.password,
          deviseOS: 'android',
        });
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
              autoComplete="current-email"
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
              autoComplete="current-password"
            />
          </Form.Group>

          <FormGroup>
            <Row>
              <Col sm={6}>
                <Form.Check className="mr-auto" label="Remember me" />
              </Col>
              <Col className="text-right" sm={6}>
                <Button
                  className="button-password ml-auto"
                  onClick={() => setModalShow(true)}
                  variant="link"
                >
                  Forgot password?
                </Button>
              </Col>
            </Row>
            <ResetPasswordWindow show={modalShow} onHide={() => setModalShow(false)} />
          </FormGroup>

          <FormGroup className="text-center text-uppercase">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              disabled={isSubmitting}
            >
              Login
            </Button>
          </FormGroup>
        </Form>
      )}
    />
  );
};

const mapStateToProps = ({ sessionData }) => sessionData;

const mapDispatchToProps = dispatch => ({
  login: fetchLogin(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
