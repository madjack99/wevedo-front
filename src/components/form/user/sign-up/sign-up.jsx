import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import { Redirect, Link } from 'react-router-dom';

import {
  Row, Col, Form, Button, FormGroup,
} from 'react-bootstrap';

import '../../form.scss';

import config from '../../../../config';

import { fetchSignUp, fetchLogin, existingEmail } from '../../../../actions';
import { WevedoServiceContext } from '../../../contexts';
import { signUpUserFormSchema } from '../../schemas';
import SocialButton from '../../../social-button';

const SignUpUserForm = ({
  signUp, login, statusEmail, isLoggedIn, error,
}) => {
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
            {' Register with Facebook'}
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
            {' Register with Google'}
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

          return statusEmail('Email is already in use');
        }}
        validationSchema={signUpUserFormSchema}
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
                autoComplete="new-email"
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
                autoComplete="new-password"
              />
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <FormGroup>
              <Form.Check className="form__check mr-auto" label="Remember me" />
            </FormGroup>

            <FormGroup className="text-center text-uppercase">
              <Button
                className="mt-4"
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                Sign up
              </Button>
            </FormGroup>

            <div className="form__question text-center mt-5">
              <span>
                Already have an account?
                {' '}
                <Link className="text-wevedo" to="/login">Login</Link>
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
  statusEmail: error => dispatch(existingEmail(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpUserForm);
