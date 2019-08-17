import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { Formik } from 'formik';
import { Redirect, Link } from 'react-router-dom';

import { Row, Col, Form, Button, FormGroup } from 'react-bootstrap';

import { fetchSignUp, fetchLogin } from '../../../../actions';
import { WevedoServiceContext } from '../../../../contexts';
import formSchema from './schema';

import Checkbox from '../../../UI/Checkbox';
import ResetPasswordDialog from '../../../ResetPassword/Dialog';

const BusinessFormLogin = ({ login, isLoggedIn, t }) => {
  const [resetPassword, setResetPassword] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <Formik
        className="form"
        initialValues={{
          emailPhone: '',
          password: '',
        }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          if (resetPassword) {
            setResetPassword(false);
            setSubmitting(false);
            return setModalShow(true);
          }

          const body = values.emailPhone.includes('@') // only email includes '@'
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

          const loggedInUser = await login(wevedoService.login, body);

          if (!loggedInUser) {
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
                <Col>
                  <Checkbox
                    className="form__check mr-auto"
                    labelText={t('signAndLogForm.rememberMe')}
                  />
                </Col>
                <Col className="text-right">
                  <Button
                    bsPrefix="password-btn"
                    type="submit"
                    onClick={() => setResetPassword(true)}
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
                <Link to="/business/signup">{t('signAndLogForm.signUp')}</Link>
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
)(BusinessFormLogin);
