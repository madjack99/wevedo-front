/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

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
  t,
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
              {t('serviceInfo.describeService')}
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
              {t('serviceInfo.startingPrice')}
            </Form.Label>
            <Form.Text className="updating-form__text">
              {t('serviceInfo.startingPriceDescription')}
            </Form.Text>
            <Row>
              <Col md={3}>
                <Form.Control
                  className="updating-form__control"
                  name="minPrice"
                  placeholder={t('serviceInfo.minPricePlaceholder')}
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
                  placeholder={t('serviceInfo.maxPricePlaceholder')}
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
              {t('serviceInfo.whatFacilities')}
            </Form.Label>
            <Form.Control
              className="updating-form__control"
              name="facilities"
              placeholder={t('serviceInfo.facilitiesDescriptionPlaceholder')}
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
              {t('serviceInfo.save')}
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
  compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
    withTranslation('common'),
  )(ServiceInfoUpdatingForm),
);
