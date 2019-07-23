import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { Formik } from 'formik';
import { Redirect, Link } from 'react-router-dom';

import { Row, Col, Form, Button, FormGroup } from 'react-bootstrap';

import '../../form.scss';

import config from '../../../../config';

import { fetchSignUp, fetchLogin, resetError } from '../../../../actions';
import { WevedoServiceContext } from '../../../contexts';
import { userFormSchema } from '../../schemas';

import ResetPasswordWindow from '../../../reset-password-window';
import SocialButton from '../../../social-button';
import Checkbox from '../../../ui/checkbox';

const LoginUserForm = ({ login, cleanForm, isLoggedIn, t }) => {
  const [modalShow, setModalShow] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  useEffect(() => {
    cleanForm();
  }, [cleanForm]);

  const handleSocialSignUp = async ({
    _profile: profile,
    _provider: provider,
  }) => {
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
        <span>{t('login.or')}</span>
      </div>

      <Formik
        className="form"
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          const isLoginSuccessful = await login(wevedoService.login, {
            email: values.email,
            password: values.password,
            deviseOS: 'android', // TO-DO: 'web' should be later
          });

          if (!isLoginSuccessful) {
            setErrors({
              email: 'wrong credentials',
              password: 'wrong credentials',
            });

            setSubmitting(false);
          }
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
            <Form.Group className="mb-5" controlId="formEmail">
              <Form.Label className="form__label mb-0">
                {t('login.form.emailPlaceholder')}
              </Form.Label>
              <Form.Control
                className="form__control"
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
              <Form.Label className="form__label mb-0">
                {t('login.form.passwordPlaceholder')}
              </Form.Label>
              <Form.Control
                className="form__control"
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
                  {/* <Form.Check className="form__check mr-auto" label="Remember me" /> */}
                  <Checkbox
                    className="form__check mr-auto"
                    labelText={t('login.form.rememberMeLabel')}
                  />
                </Col>
                <Col className="text-right">
                  <Button
                    bsPrefix="password-btn"
                    onClick={() => setModalShow(true)}
                  >
                    {t('login.form.forgotPassword')}
                  </Button>
                </Col>
              </Row>
              <ResetPasswordWindow
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </FormGroup>

            <FormGroup className="text-center text-uppercase">
              <Button
                className="mt-4"
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {t('login.form.loginBtn')}
              </Button>
            </FormGroup>

            <div className="form__question text-center mt-5">
              <span>
                {t('login.form.noAccount')}{' '}
                <Link className="text-wevedo" to="/signup">
                  {t('login.form.signUp')}
                </Link>
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
  cleanForm: () => dispatch(resetError()),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(LoginUserForm);
