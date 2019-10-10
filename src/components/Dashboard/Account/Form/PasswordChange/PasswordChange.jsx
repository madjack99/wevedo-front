import React, { useState, useContext } from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { WevedoServiceContext } from '../../../../../contexts';

const DashboardAccountFormPasswordChange = ({ email, t }) => {
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
            await wevedoService.resetPasswordEmail({
              email,
              resetPassword: values.resetPassword,
            });
            setResetCodeIsSended(true);
          } catch (error) {
            console.error(error);
          }
        } else {
          try {
            await wevedoService.checkResetCodeEmail({
              email,
              resetToken: values.resetCode,
            });
            setChangeRequested(false);
            setResetCodeIsSended(false);
            setPasswordWasChanged(true);
          } catch (error) {
            setErrors({
              resetCode: t('dashboard.account.wrongCode'),
            });
          }
        }
        setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        resetPassword: Yup.string()
          .min(8, t('dashboard.account.minimum8chars'))
          .max(50, t('dashboard.account.maximum50chars'))
          .required(t('dashboard.account.required')),
        confirmResetPassword: Yup.string()
          .oneOf(
            [Yup.ref('resetPassword'), null],
            t('dashboard.account.passwordDoesntMatch'),
          )
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
            <p className="text-muted">
              {t('dashboard.account.wantChangePassword')}
            </p>
            <div className={changeRequested ? 'd-none' : 'd-block'}>
              {passwordWasChanged && (
                <p style={{ color: '#28a745' }}>
                  {t('dashboard.account.passwordWasChanged')}
                </p>
              )}
              <Form.Group className="mb-2">
                <div
                  className={`mb-3 ${
                    passwordWasChanged ? 'd-none' : 'd-block'
                  }`}
                >
                  <b>{t('dashboard.account.youWillReceiveInstructions')}</b>
                </div>
                <Button onClick={() => setChangeRequested(true)} size="lg">
                  {t('dashboard.account.changePassword')}
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
                  placeholder={t('dashboard.account.newPasswordPlaceholder')}
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
                  placeholder={t(
                    'dashboard.account.confirmPasswordPlaceholder',
                  )}
                  size="lg"
                />
                {errors.confirmResetPassword && (
                  <p style={{ color: '#dc3545' }}>
                    {errors.confirmResetPassword}
                  </p>
                )}
              </Form.Group>
              <Button type="submit" disabled={isSubmitting} size="lg">
                {t('dashboard.account.sendResetCode')}
              </Button>
            </div>
            <div className={resetCodeIsSended ? 'd-block' : 'd-none'}>
              <Form.Group className="mb-3">
                <div className="mb-3">
                  <b>{t('dashboard.account.checkYourEmail')}</b>
                </div>
                <Form.Control
                  className="form__control__account"
                  type="text"
                  name="resetCode"
                  value={values.resetCode}
                  onChange={handleChange}
                  placeholder={t('dashboard.account.resetCode')}
                  size="lg"
                />
                {errors.resetCode && (
                  <p style={{ color: '#dc3545' }}>{errors.resetCode}</p>
                )}
              </Form.Group>
              <Button type="submit" disabled={isSubmitting} size="lg">
                {t('dashboard.account.save')}
              </Button>
            </div>
          </Form>
        );
      }}
    />
  );
};

export default withTranslation('common')(DashboardAccountFormPasswordChange);
