/* eslint-disable no-shadow */
import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { Form, Row, Col, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import StripeCheckout from 'react-stripe-checkout';

import config from '../../../../../config';
import { WevedoServiceContext } from '../../../../../contexts';
import { updateUser } from '../../../../../actions';
import formSchema from './schema';
import MyCalendar from '../../../../Calendar';

const BusinessFormsSignupServiceInfo = ({
  isLoggedIn,
  updateUser,
  user,
  t,
  nextStep,
}) => {
  const [price, setPrice] = useState(0);
  const [paymentMade, setPaymentMade] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  useEffect(() => {
    const fetchPrice = async () => {
      const { data: newPrice } = await wevedoService.getPrice(
        'registrationFee',
      );
      setPrice(newPrice);
    };
    fetchPrice();
  }, [wevedoService]);

  const handleToken = async token => {
    await updateUser()({ paymentToken: token.id });
    setPaymentMade(true);
    nextStep();
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Formik
      className="form dashboard-form"
      enableReinitialize
      initialValues={{
        bio: '',
        minPrice: '0',
        maxPrice: '100000',
        facilities: '',
        bookedDates: user.bookedDates || [],
      }}
      onSubmit={({ bio, minPrice, maxPrice, facilities }) => {
        updateUser()({
          bio,
          minPrice,
          maxPrice,
          facilities,
          profileImageURL:
            'https://res.cloudinary.com/wevedo/image/upload/v1540042022/profileImages/rlcvvysjjmxwfbuddrx2.png',
        });

        if (!config.publishableKey) {
          nextStep();
        }
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
          <Form.Group className="dashboard-form__group">
            <Form.Label className="dashboard-form__label">
              {t('serviceInfo.availabilityCalendar')}
              <span className="form__asterisks">*</span>
            </Form.Label>
            <div className="mt-4">
              <MyCalendar bookedDates={values.bookedDates} />
            </div>
          </Form.Group>

          <Form.Group className="dashboard-form__group">
            <Form.Label className="dashboard-form__label">
              {t('serviceInfo.describeService')}
              <span className="form__asterisks">*</span>
            </Form.Label>
            <Form.Control
              className="form__textarea dashboard-form__control"
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

          <Form.Group className="dashboard-form__group">
            <Form.Label className="dashboard-form__label">
              {t('serviceInfo.startingPrice')}
              <span className="form__asterisks">*</span>
            </Form.Label>
            <Form.Text className="dashboard-form__text">
              {t('serviceInfo.startingPriceDescription')}
            </Form.Text>
            <Row>
              <Col md={3}>
                <Form.Control
                  className="dashboard-form__control"
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
                  className="dashboard-form__control"
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

          <Form.Group className="dashboard-form__group">
            <Form.Label className="dashboard-form__label">
              {t('serviceInfo.whatFacilities')}
              <span className="form__asterisks">*</span>
            </Form.Label>
            <Form.Control
              className="dashboard-form__control"
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
            {config.publishableKey ? (
              <StripeCheckout
                stripeKey={config.publishableKey}
                token={handleToken}
                amount={price * 100} // price is in cents
                name="Registration Fee"
                email={user.email}
                allowRememberMe={false}
              >
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  disabled={paymentMade}
                >
                  Proceed to payment
                </Button>
              </StripeCheckout>
            ) : (
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {t('serviceInfo.save')}
              </Button>
            )}
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
  updateUser: updateUser(dispatch),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(BusinessFormsSignupServiceInfo);
