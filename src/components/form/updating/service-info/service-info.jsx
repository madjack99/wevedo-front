/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { withRouter, Redirect } from 'react-router-dom';
import { Formik } from 'formik';

import { Form, Row, Col, Button } from 'react-bootstrap';

import '../../form.scss';
import '../updating-form.scss';

import { fetchSignUp, fetchLogin } from '../../../../actions';
import { WevedoServiceContext } from '../../../contexts';
import { ServiceInfoScheme } from '../../schemas';

const ServiceInfoUpdatingForm = ({
  user,
  isLoggedIn,
  login,
  signUp,
  history,
}) => {
  const wevedoService = useContext(WevedoServiceContext);

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Formik
      className="form updating-form"
      initialValues={{
        bio: '',
        minPrice: '',
        maxPrice: '',
        facilities: '',
      }}
      onSubmit={async (
        { bio, minPrice, maxPrice, facilities },
        { setSubmitting },
      ) => {
        const body = {
          ...user,
          bio,
          minPrice,
          maxPrice,
          facilities,
          isProvider: true,
          profileImageURL:
            'https://res.cloudinary.com/wevedo/image/upload/v1540042022/profileImages/rlcvvysjjmxwfbuddrx2.png',
          isApproved: true, // TO-DO: must be false before payment
          deviceOS: 'android', // TO-DO: 'web' should be later
        };

        const isRegisterSuccessful = await signUp(wevedoService.register, body);

        if (isRegisterSuccessful) {
          await login(wevedoService.login, body);
          return history.push('/');
        }

        return setSubmitting(false);
      }}
      validationSchema={ServiceInfoScheme}
      render={({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="updating-form__group">
            <Form.Label className="updating-form__label">
              Describe your business and services
            </Form.Label>
            <Form.Control
              className="form__textarea updating-form__control"
              name="bio"
              as="textarea"
              rows="5"
              value={values.bio}
              onChange={handleChange}
              isValid={values.bio && !errors.bio}
              isInvalid={touched.bio && !!errors.bio}
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.bio}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="updating-form__group">
            <Form.Label className="updating-form__label">
              From which price can I hire Service name?
            </Form.Label>
            <Form.Text className="updating-form__text">
              Enter your average pricing in order for your Shopfont to appear in
              results when couples search by price
            </Form.Text>
            <Row>
              <Col md={3}>
                <Form.Control
                  className="updating-form__control"
                  name="minPrice"
                  placeholder="Minimum Price"
                  value={values.minPrice}
                  onChange={handleChange}
                  isValid={values.minPrice && !errors.minPrice}
                  isInvalid={touched.minPrice && !!errors.minPrice}
                />
                <Form.Control.Feedback
                  className="form__feedback"
                  type="invalid"
                >
                  {errors.minPrice}
                </Form.Control.Feedback>
              </Col>
              <Col md={3}>
                <Form.Control
                  className="updating-form__control"
                  name="maxPrice"
                  placeholder="Maximum Price"
                  value={values.maxPrice}
                  onChange={handleChange}
                  isValid={values.maxPrice && !errors.maxPrice}
                  isInvalid={touched.maxPrice && !!errors.maxPrice}
                />
                <Form.Control.Feedback
                  className="form__feedback"
                  type="invalid"
                >
                  {errors.maxPrice}
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="updating-form__group">
            <Form.Label className="updating-form__label">
              Which facilities do you provide?
            </Form.Label>
            <Form.Control
              className="updating-form__control"
              name="facilities"
              placeholder="Eg. Pre wedding, Post wedding, ..."
              value={values.facilities}
              onChange={handleChange}
              isValid={values.facilities && !errors.facilities}
              isInvalid={touched.facilities && !!errors.facilities}
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.facilities}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="text-center text-md-right text-uppercase">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              disabled={isSubmitting}
            >
              Save
            </Button>
          </Form.Group>
        </Form>
      )}
    />
  );
};

const mapStateToProps = ({ sessionData, userData }) => ({
  ...sessionData,
  ...userData,
});

const mapDispatchToProps = dispatch => ({
  login: fetchLogin(dispatch),
  signUp: fetchSignUp(dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ServiceInfoUpdatingForm),
);
