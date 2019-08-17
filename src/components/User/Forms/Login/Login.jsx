import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import { Row, Col, Form, Button, FormGroup } from 'react-bootstrap';

import config from '../../../../config';

import { fetchSignUp, fetchLogin } from '../../../../actions';
import { WevedoServiceContext } from '../../../../contexts';
import formSchema from './schema';

import ResetPasswordDialog from '../../../ResetPassword/Dialog';
import SocialButton from '../../../SocialButton';
import Checkbox from '../../../UI/Checkbox';

const UserFormsLogin = ({ login, t }) => {
  const [resetPassword, setResetPassword] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  const handleSocialLogin = async ({
    _profile: profile,
    _provider: provider,
  }) => {
    login(wevedoService.socialLogin, {
      ...profile,
      provider,
    });
  };

  return (
    <React.Fragment>
      <Row>
        <Col md={6}>
          <SocialButton
            variant="facebook"
            provider="facebook"
            appId={config.facebookAppId}
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={error => console.error(error)}
          >
            <i className="fab fa-facebook-f mr-3" />
            {' Login with Facebook'}
          </SocialButton>
        </Col>
        <Col md={6}>
          <SocialButton
            variant="google"
            provider="google"
            appId={config.googleAppId}
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={error => console.error(error)}
          >
            <i className="fab fa-google mr-3" />
            {' Login with Google'}
          </SocialButton>
        </Col>
      </Row>

      <div className="form__divider text-center my-5">
        <span>{t('signAndLogForm.or')}</span>
      </div>

      <Formik
        className="form"
        initialValues={{
          emailPhone: '',
          password: '',
        }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          const isEmailEntered = values.emailPhone.includes('@'); // only email includes '@'

          if (resetPassword) {
            setResetPassword(false);
            if (isEmailEntered) {
              setModalShow(true);
            }
            setErrors({
              emailPhone: 'password recovery email is required',
            });
            return setSubmitting(false);
          }

          const body = isEmailEntered
            ? {
                email: values.emailPhone,
                password: values.password,
                deviseOS: 'android', // TO-DO: 'web' should be later
              }
            : {
                phoneNumber: values.emailPhone,
                password: values.password,
                deviseOS: 'android', // TO-DO: 'web' should be later
              };

          const isLoginSuccessful = await login(wevedoService.login, body);

          if (!isLoginSuccessful) {
            setErrors({
              emailPhone: 'wrong credentials',
              password: 'wrong credentials',
            });
          }

          return setSubmitting(false);
        }}
        validationSchema={formSchema}
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
                {t('signAndLogForm.emailLabel')}
              </Form.Label>
              <Form.Control
                className="form__control"
                type="email"
                name="emailPhone"
                value={values.emailPhone}
                onChange={handleChange}
                isValid={values.emailPhone && !errors.emailPhone}
                isInvalid={touched.emailPhone && !!errors.emailPhone}
                autoComplete="current-email"
              />
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.emailPhone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className="form__label mb-0">
                {t('signAndLogForm.passwordLabel')}
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
                <Col md={6} className="text-left mb-2">
                  <Checkbox
                    className="form__check mr-auto"
                    labelText={t('signAndLogForm.rememberMe')}
                  />
                </Col>
                <Col md={6} className="text-right">
                  <Button
                    bsPrefix="password-btn"
                    onClick={() => {
                      setResetPassword(true);
                      handleSubmit();
                    }}
                  >
                    {t('signAndLogForm.forgotPassword')}
                  </Button>
                </Col>
              </Row>
              <ResetPasswordDialog
                show={modalShow}
                onHide={() => setModalShow(false)}
                email={values.emailPhone}
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
                {t('signAndLogForm.logIn')}
              </Button>
            </FormGroup>

            <div className="form__question text-center mt-5">
              <span>
                {t('signAndLogForm.noAccount')}{' '}
                <Link to="/signup">{t('signAndLogForm.signUp')}</Link>
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(UserFormsLogin);
