/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import * as Yup from 'yup';

import { Formik } from 'formik';
import { withRouter, Redirect } from 'react-router-dom';

import { Form, FormGroup, Button } from 'react-bootstrap';

import config from '../../../../../config';

import {
  getCountries,
  getRegionNames,
  getCounties,
  getCities,
} from '../../../../../helpers';

import {
  updateUser,
  fetchEmailStatus,
  fetchPhoneStatus,
} from '../../../../../actions';
import { WevedoServiceContext } from '../../../../../contexts';

const BusinessFormsSignupLocationInfo = ({
  isLoggedIn,
  user,
  updateUser,
  emailStatus,
  phoneStatus,
  t,
  nextStep,
}) => {
  const wevedoService = useContext(WevedoServiceContext);
  const phoneRegex = /^\+?((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const { allowedInCountries } = config;

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Formik
      className="form"
      initialValues={{
        email: '',
        phoneNumber: '',
        postcode: '',
        address: '',
        country: '',
        regionName: '',
        county: '',
        city: '',
      }}
      onSubmit={async (
        {
          email,
          phoneNumber,
          postcode,
          address,
          country,
          regionName,
          county,
          city,
        },
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
          updateUser()({
            email,
            phoneNumber,
            postcode,
            address,
            country,
            regionName,
            county,
            city,
          });

          return nextStep();
        }

        setErrors({
          email: !isNewEmail ? t('signAndLogForm.emailIsInUse') : null,
          phoneNumber: !isNewPhone ? t('signAndLogForm.numberIsInUse') : null,
        });
        return setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email(t('signAndLogForm.invalidEmailOrMobileNumber'))
          .required(t('signAndLogForm.required')),
        phoneNumber: Yup.string()
          .matches(phoneRegex, t('business-signup.form.invalidNumber'))
          .required(t('signAndLogForm.required')),
        postcode: Yup.string().required(t('signAndLogForm.required')),
        address: Yup.string().required(t('signAndLogForm.required')),
        country: Yup.string().required(t('signAndLogForm.required')),
        regionName: Yup.string().required(t('signAndLogForm.required')),
        county: Yup.string().required(t('signAndLogForm.required')),
        city: Yup.string().required(t('signAndLogForm.required')),
      })}
      render={({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-5" controlId="formEmail">
              <Form.Label className="form__label mb-0">
                {' '}
                {t('business-signup.form.emailPlaceholder')}
                <span className="form__asterisks">*</span>
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

            <Form.Group className="mb-5" controlId="formPhoneNumber">
              <Form.Label className="form__label mb-0">
                {t('business-signup.form.numberPlaceholder')}
                <span className="form__asterisks">*</span>
              </Form.Label>
              <Form.Control
                className="form__control form__control_phone-number"
                type="text"
                name="phoneNumber"
                placeholder={t('signAndLogForm.countryCodePlaceholder')}
                value={values.phoneNumber}
                onChange={handleChange}
                isValid={values.phoneNumber && !errors.phoneNumber}
                isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                autoComplete="new-phone-number"
              />
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formPostcode">
              <Form.Label className="form__label mb-0">
                {t('business-signup.form.postcodePlaceholder')}
                <span className="form__asterisks">*</span>
              </Form.Label>
              <Form.Control
                className="form__control"
                type="text"
                name="postcode"
                value={values.postcode}
                onChange={handleChange}
                isValid={values.postcode && !errors.postcode}
                isInvalid={touched.postcode && !!errors.postcode}
                autoComplete="new-postcode"
              />
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.postcode}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formAddress">
              <Form.Label className="form__label mb-0">
                {t('business-signup.form.addressPlaceholder')}
                <span className="form__asterisks">*</span>
              </Form.Label>
              <Form.Control
                className="form__control"
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                isValid={values.address && !errors.address}
                isInvalid={touched.address && !!errors.address}
                autoComplete="new-address"
              />
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formCountry">
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
                  values.regionName = '';
                  values.county = '';
                  values.city = '';
                }}
                isValid={values.country && !errors.country}
                isInvalid={touched.country && !!errors.country}
                autoComplete="new-country"
              >
                <option value="" disabled />
                {getCountries(allowedInCountries).map(country => (
                  <option key={uniqid()}>{country}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.country}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formRegionName">
              <Form.Label className="form__label mb-0">
                {t('business-signup.form.regionPlaceholder')}
                <span className="form__asterisks">*</span>
              </Form.Label>
              <Form.Control
                className="form__control"
                type="text"
                name="regionName"
                as="select"
                value={values.regionName}
                onChange={e => {
                  handleChange(e);
                  values.county = '';
                  values.city = '';
                }}
                isValid={values.regionName && !errors.regionName}
                isInvalid={touched.regionName && !!errors.regionName}
                autoComplete="new-region-name"
              >
                <option value="" disabled />
                {values.country &&
                  getRegionNames(values.country).map(regionName => (
                    <option key={uniqid()}>{regionName}</option>
                  ))}
              </Form.Control>
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.regionName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formCounty">
              <Form.Label className="form__label mb-0">
                {t('business-signup.form.countyPlaceholder')}
                <span className="form__asterisks">*</span>
              </Form.Label>
              <Form.Control
                className="form__control"
                type="text"
                name="county"
                as="select"
                value={values.county}
                onChange={e => {
                  handleChange(e);
                  values.city = '';
                }}
                isValid={values.county && !errors.county}
                isInvalid={touched.county && !!errors.county}
                autoComplete="new-county"
              >
                <option value="" disabled />
                {values.regionName &&
                  getCounties(values.country, values.regionName).map(county => (
                    <option key={uniqid()}>{county}</option>
                  ))}
              </Form.Control>
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.county}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formCity">
              <Form.Label className="form__label mb-0">
                {t('business-signup.form.cityPlaceholder')}
                <span className="form__asterisks">*</span>
              </Form.Label>
              <Form.Control
                className="form__control"
                type="text"
                name="city"
                as="select"
                value={values.city}
                onChange={handleChange}
                isValid={values.city && !errors.city}
                isInvalid={touched.city && !!errors.city}
                autoComplete="new-city"
              >
                <option value="" disabled />
                {values.county &&
                  getCities(
                    values.country,
                    values.regionName,
                    values.county,
                  ).map(city => <option key={uniqid()}>{city}</option>)}
              </Form.Control>
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            <FormGroup className="text-center text-uppercase">
              <Button
                className="mt-4"
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {t('business-signup.form.nextStepBtn')}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    />
  );
};

const mapStateToProps = ({ sessionData, userData }) => ({
  ...sessionData,
  ...userData,
});

const mapDispatchToProps = dispatch => ({
  updateUser: updateUser(dispatch),
  emailStatus: fetchEmailStatus(dispatch),
  phoneStatus: fetchPhoneStatus(dispatch),
});

export default withRouter(
  compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
    withTranslation('common'),
  )(BusinessFormsSignupLocationInfo),
);
