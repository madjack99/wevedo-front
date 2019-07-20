/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import { withRouter, Redirect } from 'react-router-dom';

import {
  Form, FormGroup, Button,
} from 'react-bootstrap';

import '../../../form.scss';

import { updateUser, fetchEmailStatus } from '../../../../../actions';
import { WevedoServiceContext } from '../../../../contexts';
import { SecondStepSignUpBusinessScheme } from '../../../schemas';

const SecondStepSignUpBusinessForm = ({
  isLoggedIn, error, updateUser, emailStatus, history,
}) => {
  const wevedoService = useContext(WevedoServiceContext);

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Formik
      className="form"
      initialValues={{
        email: 'pavel@gmail.com',
        phoneNumber: '+79123456789',
        postcode: '422456',
        address: 'Some street',
        townOrCity: 'Cheboksary',
        country: 'Russia',
      }}
      onSubmit={async ({
        email, phoneNumber, postcode, address, townOrCity, country,
      }, { setSubmitting }) => {
        setSubmitting(false);

        const isNewEmail = await emailStatus({ email }, wevedoService.checkEmail);

        if (isNewEmail) {
          updateUser()({
            email,
            phoneNumber,
            postcode,
            address,
            townOrCity,
            country,
          });

          history.push('/'); // TO-DO: add route to load images
        }
      }}
      validationSchema={SecondStepSignUpBusinessScheme}
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
            <Form.Label className="form__label mb-0">Business Email</Form.Label>
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

          <Form.Group className="mb-5" controlId="formPhoneNumber">
            <Form.Label className="form__label mb-0">Business Phone Number</Form.Label>
            <Form.Control
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
            <Form.Label className="form__label mb-0">Your postcode</Form.Label>
            <Form.Control
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
            <Form.Label className="form__label mb-0">Business Address</Form.Label>
            <Form.Control
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
            <Form.Label className="form__label mb-0">Town/City</Form.Label>
            <Form.Control
              type="text"
              name="townOrCity"
              value={values.townOrCity}
              onChange={handleChange}
              isValid={values.townOrCity && !errors.townOrCity}
              isInvalid={touched.townOrCity && !!errors.townOrCity}
              autoComplete="new-town-or-city"
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.townOrCity}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formCountry">
            <Form.Label className="form__label mb-0">Country</Form.Label>
            <Form.Control
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
              Next step
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
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    SecondStepSignUpBusinessForm,
  ),
);
