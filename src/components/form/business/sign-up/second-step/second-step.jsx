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
  isLoggedIn, updateUser, emailStatus, history,
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
        regionName: 'Cheboksary',
        country: 'Russia',
      }}
      onSubmit={async ({
        email, phoneNumber, postcode, address, regionName, country,
      }, { setSubmitting, setErrors }) => {
        const isNewEmail = await emailStatus({ email }, wevedoService.checkEmail);

        if (isNewEmail) {
          updateUser()({
            email,
            phoneNumber,
            postcode,
            address,
            regionName,
            country,
          });

          return history.push('/image-upload'); // TO-DO: add route to load images
        }

        setSubmitting(false);
        return setErrors({ email: 'email is already in use' });
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
          <Form.Group className="mb-5" controlId="formEmail">
            <Form.Label className="form__label mb-0">Business Email</Form.Label>
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
            <Form.Label className="form__label mb-0">Business Phone Number</Form.Label>
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
            <Form.Label className="form__label mb-0">Your postcode</Form.Label>
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
            <Form.Label className="form__label mb-0">Business Address</Form.Label>
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
            <Form.Label className="form__label mb-0">Town/City</Form.Label>
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
            <Form.Label className="form__label mb-0">Country</Form.Label>
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
