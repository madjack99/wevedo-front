import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import * as Yup from 'yup';

import { Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import config from '../../../../config';
import {
  getLocation,
  getCountries,
  abbreviationMap,
} from '../../../../helpers';

import Checkbox from '../../../UI/Checkbox';

import {
  fetchSignUp,
  fetchLogin,
  fetchEmailStatus,
  fetchPhoneStatus,
} from '../../../../actions';
import { WevedoServiceContext } from '../../../../contexts';
import SocialButton from '../../../SocialButton';

const UserFormsSignup = ({
  signUp,
  login,
  emailStatus,
  phoneStatus,
  user,
  t,
}) => {
  const wevedoService = useContext(WevedoServiceContext);
  const { profileImageURL } = config;
  const phoneRegex = /^\+?((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const { allowedInCountries } = config;

  const handleSocialSignUp = async ({
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
            onLoginSuccess={handleSocialSignUp}
            onLoginFailure={error => console.error(error)}
          >
            <i className="fab fa-facebook-f mr-3" />
            {' Register with Facebook'}
          </SocialButton>
        </Col>
        <Col md={6}>
          <SocialButton
            variant="google"
            provider="google"
            appId={config.googleAppId}
            onLoginSuccess={handleSocialSignUp}
            onLoginFailure={error => console.error(error)}
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
          phoneNumber: '',
          country: '',
        }}
        onSubmit={async (
          { email, password, phoneNumber, country },
          { setSubmitting, setErrors },
        ) => {
          const isNewEmail = await emailStatus(
            { email },
            wevedoService.checkEmail,
          );

          const isNewPhone = await phoneStatus(
            { phoneNumber },
            wevedoService.checkPhone,
          );

          if (isNewEmail && isNewPhone) {
            const body = {
              email,
              phoneNumber,
              password,
              country,
              countryCode: abbreviationMap[getLocation(country)],
              profileImageURL,
              deviceOS: 'android', // TO-DO: 'web' should be later
            };

            await signUp(wevedoService.register, body);
            return login(wevedoService.login, body);
          }

          setSubmitting(false);
          if (!isNewEmail) {
            return setErrors({
              email: t('signAndLogForm.emailIsInUse'),
            });
          }
          return setErrors({
            phoneNumber: t('signAndLogForm.numberIsInUse'),
          });
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(t('signAndLogForm.invalidEmail'))
            .required(t('signAndLogForm.required')),
          phoneNumber: Yup.string()
            .matches(phoneRegex, t('signAndLogForm.invalidMobile'))
            .required(t('signAndLogForm.required')),
          password: Yup.string()
            .min(8, t('signAndLogForm.minimum8chars'))
            .max(50, t('signAndLogForm.maximum50chars'))
            .required(t('signAndLogForm.required')),
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
              <Form.Label className="form__label mb-0">
                {t('signAndLogForm.emailLabel')}
                <span className="form__asterisks">*</span>
              </Form.Label>
              <Form.Control
                className="form__control form__control_phone-number"
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

            <Form.Group className="mb-5" controlId="formPhoneNumber">
              <Form.Label className="form__label mb-0">
                {t('signAndLogForm.phoneNumberLabel')}
                <span className="form__asterisks">*</span>
              </Form.Label>
              <Form.Control
                className="form__control form__control_phone-number"
                type="string"
                name="phoneNumber"
                placeholder={t('signAndLogForm.countryCodePlaceholder')}
                value={values.phoneNumber}
                onChange={handleChange}
                isValid={values.phoneNumber && !errors.phoneNumber}
                isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                autoComplete="new-phoneNumber"
              />
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formPassword">
              <Form.Label className="form__label mb-0">
                {t('signAndLogForm.passwordLabel')}
                <span className="form__asterisks">*</span>
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

            <FormGroup controlId="formCountry">
              <Form.Label className="form__label mb-0">
                {t('business-signup.form.countryPlaceholder')}
                <span className="form__asterisks">*</span>
              </Form.Label>
              <Form.Control
                className="form__control"
                type="text"
                name="country"
                as="select"
                value={values.country}
                onChange={e => {
                  handleChange(e);
                }}
                isValid={values.country && !errors.country}
                isInvalid={touched.country && !!errors.country}
                autoComplete="new-country"
              >
                <option value="" disabled />
                {/* for signup use an array of allowed countries from config to 
                allow all countries for registrations disregarding IP */}
                {getCountries(allowedInCountries).map(country => (
                  <option key={uniqid()}>{country}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.country}
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup className="text-left">
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
                <Link to="/login">{t('signAndLogForm.logIn')}</Link>
              </span>
              <br />
              <span>
                {t('signAndLogForm.businessAccount')}{' '}
                <Link to="/business/signup">{t('signAndLogForm.signUp')}</Link>
              </span>
            </div>
          </Form>
        )}
      />
    </React.Fragment>
  );
};

const mapStateToProps = ({ sessionData, userData }) => ({
  ...sessionData,
  ...userData,
});

const mapDispatchToProps = dispatch => ({
  signUp: fetchSignUp(dispatch),
  login: fetchLogin(dispatch),
  emailStatus: fetchEmailStatus(dispatch),
  phoneStatus: fetchPhoneStatus(dispatch),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(UserFormsSignup);
