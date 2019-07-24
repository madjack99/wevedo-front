import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { Formik } from 'formik';
import { Redirect, Link } from 'react-router-dom';

import { Row, Col, Form, Button, FormGroup } from 'react-bootstrap';

import '../../form.scss';

import config from '../../../../config';

import Checkbox from '../../../ui/checkbox';

import {
  fetchSignUp,
  fetchLogin,
  fetchEmailStatus,
  resetError,
} from '../../../../actions';
import { WevedoServiceContext } from '../../../contexts';
import { userFormSchema } from '../../schemas';
import SocialButton from '../../../social-button';

const SignUpUserForm = ({
  signUp,
  login,
  emailStatus,
  cleanForm,
  isLoggedIn,
  t,
}) => {
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
        <span>{t('signAndLogForm.or')}</span>
      </div>
      <Formik
        className="form"
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async ({ email, password }, { setSubmitting, setErrors }) => {
          const isNewEmail = await emailStatus(
            { email },
            wevedoService.checkEmail,
          );

          if (isNewEmail) {
            const body = {
              email,
              password,
              deviceOS: 'android', // TO-DO: 'web' should be later
            };

            await signUp(wevedoService.register, body);
            return login(wevedoService.login, body);
          }

          setSubmitting(false);
          return setErrors({ email: 'email is already in use' });
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
                {t('signAndLogForm.emailLabel')}
              </Form.Label>
              <Form.Control
                className="form__control"
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
                autoComplete="new-password"
              />
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <FormGroup>
              <Checkbox
                className="form__check mr-auto"
                labelText={t('signAndLogForm.rememberMe')}
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
                {t('signAndLogForm.signUp')}
              </Button>
            </FormGroup>

            <div className="form__question text-center mt-5">
              <span>
                {t('signAndLogForm.alreadyHaveAccount')}{' '}
                <Link className="text-wevedo" to="/login">
                  {t('signAndLogForm.logIn')}
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
  emailStatus: fetchEmailStatus(dispatch),
  cleanForm: () => dispatch(resetError()),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(SignUpUserForm);
