import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { Formik } from 'formik';

import { Form, Button, FormGroup } from 'react-bootstrap';

import './sign-up-form.scss';

import { fetchSignUp, fetchLogin, existingEmail } from '../../actions';
import { WevedoServiceContext } from '../contexts';
import { signUpFormSchema } from '../../form-schemas';

const SignUpForm = ({
  signUp, login, existingEmail, t,
}) => {
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
      validationSchema={signUpFormSchema}
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
              autoComplete="new-email"
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
              autoComplete="new-password"
            />
          </Form.Group>

          <FormGroup>
            <Form.Check className="mr-auto" label={t('signAndLogForm.rememberMe')} />
          </FormGroup>

          <FormGroup className="text-center text-uppercase">
            <Button variant="primary" type="submit" size="lg" disabled={isSubmitting}>
              {t('signAndLogForm.signUp')}
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(SignUpForm);
