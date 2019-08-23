/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import { Formik } from 'formik';
import { withRouter, Redirect } from 'react-router-dom';

import { Form, FormGroup, Button } from 'react-bootstrap';

import * as UK from '../../../../../UK.json';

import {
  updateUser,
  fetchEmailStatus,
  fetchPhoneStatus,
} from '../../../../../actions';
import { WevedoServiceContext } from '../../../../../contexts';
import formScheme from './schema';

console.log(UK.default.UK);

const BusinessFormsSignupLocationInfo = ({
  isLoggedIn,
  updateUser,
  emailStatus,
  phoneStatus,
  t,
  nextStep,
}) => {
  const wevedoService = useContext(WevedoServiceContext);

  const UKLocations = UK.default.UK;

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const defineCountries = () => {
    return Object.keys(UKLocations);
  };

  const defineRegionNames = country => {
    return Object.keys(UKLocations[country]);
  };

  const defineCounties = (country, regionName) => {
    return Object.keys(UKLocations[country][regionName]);
  };

  const defineCities = (country, regionName, county) => {
    return UKLocations[country][regionName][county];
  };

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
          email: !isNewEmail ? 'email is already in use' : null,
          phoneNumber: !isNewPhone ? 'number is already in use' : null,
        });
        return setSubmitting(false);
      }}
      validationSchema={formScheme}
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
              </Form.Label>
              <Form.Control
                className="form__control"
                type="text"
                name="phoneNumber"
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
                {defineCountries().map(country => (
                  <option key={uniqid()}>{country}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.country}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formRegionName">
              <Form.Label className="form__label mb-0">Region Name</Form.Label>
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
                  defineRegionNames(values.country).map(regionName => (
                    <option key={uniqid()}>{regionName}</option>
                  ))}
              </Form.Control>
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.regionName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formCounty">
              <Form.Label className="form__label mb-0">County</Form.Label>
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
                  defineCounties(values.country, values.regionName).map(
                    county => <option key={uniqid()}>{county}</option>,
                  )}
              </Form.Control>
              <Form.Control.Feedback className="form__feedback" type="invalid">
                {errors.county}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formCity">
              <Form.Label className="form__label mb-0">City</Form.Label>
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
                  defineCities(
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

const mapStateToProps = ({ sessionData }) => sessionData;

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
