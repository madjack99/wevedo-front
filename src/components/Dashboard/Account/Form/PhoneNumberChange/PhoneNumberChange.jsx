import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import phoneNumberSchema from './schema';

const DashboardAccountFormsPhoneNumberChange = ({
  phoneNumber,
  updateProfile,
  updateUser,
  t,
}) => {
  const [phoneNumberIsChanged, setPhoneNumberIsChanged] = useState(false);

  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        phoneNumber: phoneNumber || '',
      }}
      onSubmit={async ({ phoneNumber }, { setSubmitting, setErrors }) => {
        try {
          await updateUser(updateProfile)({
            phoneNumber,
          });

          setPhoneNumberIsChanged(true);
          setSubmitting(false);
        } catch (err) {
          setErrors({
            phoneNumber: err.message,
          });
          setSubmitting(false);
        }
      }}
      validationSchema={phoneNumberSchema}
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
            <Form.Group className="mb-2">
              <p className="text-muted">
                Phone Number<span className="form__asterisks">*</span>
              </p>
              <Form.Control
                className="form__control__account"
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                isValid={values.phoneNumber && !errors.phoneNumber}
                isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                size="lg"
              />
              {errors.phoneNumber && (
                <p style={{ color: '#dc3545' }}>{errors.phoneNumber}</p>
              )}
              {phoneNumberIsChanged && (
                <p style={{ color: '#28a745' }}>
                  {t('dashboard.phoneNumberWasChanged')}
                </p>
              )}
            </Form.Group>
            <Button type="submit" size="lg" disabled={isSubmitting}>
              Save
            </Button>
          </Form>
        );
      }}
    />
  );
};

export default withTranslation('common')(
  DashboardAccountFormsPhoneNumberChange,
);
