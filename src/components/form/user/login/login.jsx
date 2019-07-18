import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import { Redirect, Link } from 'react-router-dom';

import {
  Row, Col, Form, Button, FormGroup,
} from 'react-bootstrap';

import '../../form.scss';

import config from '../../../../config';

import { fetchSignUp, fetchLogin } from '../../../../actions';
import { WevedoServiceContext } from '../../../contexts';
import { userFormSchema } from '../../schemas';

import ResetPasswordWindow from '../../../reset-password-window';
import SocialButton from '../../../social-button';

const LoginUserForm = ({ login, isLoggedIn, error }) => {
  const [modalShow, setModalShow] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  const handleSocialSignUp = async ({ _profile: profile, _provider: provider }) => {
    login(wevedoService.socialLogin, {
      ...profile,
      provider,
    });
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <Row>
        <Col md={6}>
          <SocialButton
            bsPrefix="social-btn"
            variant="facebook"
            provider="facebook"
            appId={config.facebookAppId}
            onLoginSuccess={handleSocialSignUp}
          >
            <i className="fab fa-facebook-f mr-3" />
            {' Login with Facebook'}
          </SocialButton>
        </Col>
        <Col md={6}>
          <SocialButton
            bsPrefix="social-btn"
            variant="google"
            provider="google"
            appId={config.googleAppId}
            onLoginSuccess={handleSocialSignUp}
          >
            <i className="fab fa-google mr-3" />
            {' Login with Google'}
          </SocialButton>
        </Col>
      </Row>

      <div className="form__divider text-center m-5">
        <span>OR</span>
      </div>

      <Formik
        className="form"
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          login(wevedoService.login, {
            email: values.email,
            password: values.password,
            deviseOS: 'android', // TO-DO: 'web' should be later
          });
        }}
        validationSchema={userFormSchema}
        render={({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          isSubmitting,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <div className="form__error text-center my-3">
              <span>{error}</span>
            </div>
            <Form.Group className="mb-5" controlId="formEmail">
              <Form.Label className="form__label mb-0">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={values.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
                autoComplete="current-email"
              />
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className="form__label mb-0">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={values.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
                autoComplete="current-password"
              />
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <FormGroup controlId="passwordActions">
              <Row>
                <Col>
                  <Form.Check className="form__check mr-auto" label="Remember me" />
                </Col>
                <Col className="text-right">
                  <Button
                    bsPrefix="password-btn"
                    onClick={() => setModalShow(true)}
                  >
                    Forgot password?
                  </Button>
                </Col>
              </Row>
              <ResetPasswordWindow show={modalShow} onHide={() => setModalShow(false)} />
            </FormGroup>

            <FormGroup className="text-center text-uppercase">
              <Button
                className="mt-4"
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                Login
              </Button>
            </FormGroup>

            <div className="form__question text-center mt-5">
              <span>
                Don&apos;t have an account?
                {' '}
                <Link className="text-wevedo" to="/signup">Sign Up</Link>
              </span>
            </div>
          </Form>
        )}
      />
    </React.Fragment>
  );
};

const mapStateToProps = ({ sessionData }) => sessionData;

const mapDispatchToProps = dispatch => ({
  signUp: fetchSignUp(dispatch),
  login: fetchLogin(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginUserForm);
