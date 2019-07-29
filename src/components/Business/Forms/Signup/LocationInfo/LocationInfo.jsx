/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { Formik } from 'formik';
import { withRouter, Redirect } from 'react-router-dom';

import { Form, FormGroup, Button } from 'react-bootstrap';

import {
  updateUser,
  fetchEmailStatus,
  fetchPhoneStatus,
} from '../../../../../actions';
import { WevedoServiceContext } from '../../../../../contexts';
import formScheme from './schema';

const BusinessFormsSignupLocationInfo = ({
  isLoggedIn,
  updateUser,
  emailStatus,
  phoneStatus,
  history,
  t,
}) => {
  const wevedoService = useContext(WevedoServiceContext);

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
        regionName: '',
        country: '',
      }}
      onSubmit={async (
        { email, phoneNumber, postcode, address, regionName, country },
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
            regionName,
            country,
          });

          return history.push('/business/signup/image-upload'); // TO-DO: add route to load images
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
      }) => (
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

          <Form.Group className="mb-5" controlId="formTownOrCity">
            <Form.Label className="form__label mb-0">
              {t('business-signup.form.cityPlaceholder')}
            </Form.Label>
            <Form.Control
              className="form__control"
              type="text"
              name="regionName"
              value={values.regionName}
              onChange={handleChange}
              isValid={values.regionName && !errors.regionName}
              isInvalid={touched.regionName && !!errors.regionName}
              autoComplete="new-town-or-city"
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.regionName}
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
              value={values.country}
              onChange={handleChange}
              isValid={values.country && !errors.country}
              isInvalid={touched.country && !!errors.country}
              autoComplete="new-country"
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.country}
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
      )}
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
