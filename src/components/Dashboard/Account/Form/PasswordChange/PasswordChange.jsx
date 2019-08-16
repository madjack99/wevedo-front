import React, { useState, useContext } from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';

import passwordSchema from './schema';

import { WevedoServiceContext } from '../../../../../contexts';

const DashboardAccountFormPasswordChange = ({ email }) => {
  const [changeRequested, setChangeRequested] = useState(false);
  const [resetCodeIsSended, setResetCodeIsSended] = useState(false);
  const [passwordWasChanged, setPasswordWasChanged] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        resetPassword: '',
        confirmResetPassword: '',
        resetCode: '',
      }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        if (changeRequested && !resetCodeIsSended) {
          try {
            await wevedoService.resetPassword({
              email,
              resetPassword: values.resetPassword,
            });
            setResetCodeIsSended(true);
          } catch (error) {
            console.error(error);
          }
        } else {
          try {
            await wevedoService.checkResetCode({
              email,
              resetToken: values.resetCode,
            });
            setChangeRequested(false);
            setResetCodeIsSended(false);
            setPasswordWasChanged(true);
          } catch (error) {
            setErrors({
              resetCode: 'wrong code provided',
            });
          }
        }
        setSubmitting(false);
      }}
      validationSchema={passwordSchema}
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
            <p className="text-muted">Want to change your password?</p>
            <div className={changeRequested ? 'd-none' : 'd-block'}>
              {passwordWasChanged && (
                <p style={{ color: '#28a745' }}>
                  password was successfully changed
                </p>
              )}
              <Form.Group className="mb-2">
                <div
                  className={`mb-3 ${
                    passwordWasChanged ? 'd-none' : 'd-block'
                  }`}
                >
                  <b>You will recieve an email with instructions.</b>
                </div>
                <Button onClick={() => setChangeRequested(true)} size="lg">
                  Change password
                </Button>
              </Form.Group>
            </div>
            <div
              className={
                changeRequested && !resetCodeIsSended ? 'd-block' : 'd-none'
              }
            >
              <Form.Group>
                <Form.Control
                  className="form__control__account"
                  type="password"
                  name="resetPassword"
                  value={values.resetPassword}
                  onChange={handleChange}
                  isValid={values.resetPassword && !errors.resetPassword}
                  isInvalid={touched.resetPassword && !!errors.resetPassword}
                  placeholder="New password"
                  size="lg"
                />
                {errors.resetPassword && (
                  <p style={{ color: '#dc3545' }}>{errors.resetPassword}</p>
                )}
                <Form.Control
                  className="form__control__account mt-3"
                  type="password"
                  name="confirmResetPassword"
                  value={values.confirmResetPassword}
                  onChange={handleChange}
                  isValid={
                    values.confirmResetPassword && !errors.confirmResetPassword
                  }
                  isInvalid={
                    touched.confirmResetPassword &&
                    !!errors.confirmResetPassword
                  }
                  placeholder="Confirm password"
                  size="lg"
                />
                {errors.confirmResetPassword && (
                  <p style={{ color: '#dc3545' }}>
                    {errors.confirmResetPassword}
                  </p>
                )}
              </Form.Group>
              <Button type="submit" disabled={isSubmitting} size="lg">
                Send reset code
              </Button>
            </div>
            <div className={resetCodeIsSended ? 'd-block' : 'd-none'}>
              <Form.Group className="mb-3">
                <div className="mb-3">
                  <b>Check your email and enter reset code</b>
                </div>
                <Form.Control
                  className="form__control__account"
                  type="text"
                  name="resetCode"
                  value={values.resetCode}
                  onChange={handleChange}
                  placeholder="Reset code"
                  size="lg"
                />
                {errors.resetCode && (
                  <p style={{ color: '#dc3545' }}>{errors.resetCode}</p>
                )}
              </Form.Group>
              <Button type="submit" disabled={isSubmitting} size="lg">
                Save
              </Button>
            </div>
          </Form>
        );
      }}
    />
  );
};

export default DashboardAccountFormPasswordChange;
