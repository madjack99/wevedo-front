import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { Formik } from 'formik';

import {
  Row, Col, Form, Button, FormGroup,
} from 'react-bootstrap';

import './login-form.scss';

import { fetchLogin } from '../../actions';
import { WevedoServiceContext } from '../contexts';
import { loginFormSchema } from '../../form-schemas';

import ResetPasswordWindow from '../reset-password-window';

const LoginForm = ({ login, t }) => {
  const [modalShow, setModalShow] = useState(false);

  const wevedoService = useContext(WevedoServiceContext);

  return (
    <Formik
      className="login-form"
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false);
        login(wevedoService.login, {
          email: values.email,
          password: values.password,
          deviseOS: 'android',
        });
      }}
      validationSchema={loginFormSchema}
      render={({
        handleSubmit, handleChange, values, touched, errors, isSubmitting,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-5" controlId="formEmail">
            <Form.Label className="mb-0">{t('signAndLogForm.emailLabel')}</Form.Label>
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
            <Form.Label className="mb-0">{t('signAndLogForm.passwordLabel')}</Form.Label>
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
                <Form.Check className="mr-auto" label={t('signAndLogForm.rememberMe')} />
              </Col>
              <Col className="text-right" sm={6}>
                <Button
                  className="button-password ml-auto"
                  onClick={() => setModalShow(true)}
                  variant="link"
                >
                  {t('signAndLogForm.forgotPassword')}
                </Button>
              </Col>
            </Row>
            <ResetPasswordWindow show={modalShow} onHide={() => setModalShow(false)} />
          </FormGroup>

          <FormGroup className="text-center text-uppercase">
            <Button variant="primary" type="submit" size="lg" disabled={isSubmitting}>
              {t('signAndLogForm.logIn')}
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(LoginForm);
