import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import * as Yup from 'yup';

const DashboardAccountFormsPhoneNumberChange = ({
  phoneNumber,
  updateProfile,
  updateUser,
  t,
}) => {
  const [phoneNumberIsChanged, setPhoneNumberIsChanged] = useState(false);

  const phoneRegex = /^\+?((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
      validationSchema={Yup.object().shape({
        phoneNumber: Yup.string()
          .matches(phoneRegex, t('dashboard.account.invalidMobileNumber'))
          .required(t('dashboard.account.required')),
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
            <Form.Group className="mb-2">
              <p className="text-muted">
                {t('dashboard.account.phoneNumber')}
                <span className="form__asterisks">*</span>
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
                  {t('dashboard.account.phoneNumberWasChanged')}
                </p>
              )}
            </Form.Group>
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {t('dashboard.account.save')}
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
