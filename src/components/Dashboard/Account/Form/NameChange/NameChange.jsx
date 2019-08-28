import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import nameSchema from './schema';

const DashboardAccountFormsNameChange = ({
  fullName,
  updateProfile,
  updateUser,
  t,
}) => {
  const [nameIsChanged, setNameIsChanged] = useState(false);

  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        fullName: fullName || '',
      }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const [firstName, ...lastName] = values.fullName.split(' ');
        try {
          await updateUser(updateProfile)({
            fullName: values.fullName,
            firstName,
            lastName: lastName.join(' '),
          });

          setNameIsChanged(true);
          setSubmitting(false);
        } catch (err) {
          setErrors({
            fullName: err.message,
          });
          setSubmitting(false);
        }
      }}
      validationSchema={nameSchema}
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
                Full Name<span className="form__asterisks">*</span>
              </p>
              <Form.Control
                className="form__control__account"
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                isValid={values.fullName && !errors.fullName}
                isInvalid={touched.fullName && !!errors.fullName}
                size="lg"
              />
              {errors.fullName && (
                <p style={{ color: '#dc3545' }}>{errors.fullName}</p>
              )}
              {nameIsChanged && (
                <p style={{ color: '#28a745' }}>
                  {t('dashboard.nameWasChanged')}
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

export default withTranslation('common')(DashboardAccountFormsNameChange);
