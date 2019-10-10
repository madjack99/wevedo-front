import React, { useState, useContext } from 'react';
import { Formik } from 'formik';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { WevedoServiceContext } from '../../../../../contexts';

const DashboardAccountFormsEmailChange = ({
  email,
  updateProfile,
  updateUser,
  t,
}) => {
  const [mailIsChanging, setMailIsChanging] = useState(false);
  const [emailIsChanged, setEmailIsChanged] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        email: email || '',
        password: '',
      }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          await wevedoService.checkEmail({ email: values.email });
        } catch (err) {
          setSubmitting(false);
          return setErrors({ email: t('dashboard.account.emailInUse') });
        }
        try {
          await wevedoService.checkPassword({
            email,
            password: values.password,
            deviceOS: 'android',
          });
        } catch (err) {
          setSubmitting(false);
          return setErrors({
            password: 'wrong password',
          });
        }
        try {
          await updateUser(updateProfile)({
            email: values.email,
          });
        } catch (err) {
          console.error(err);
        }

        setMailIsChanging(false);
        setEmailIsChanged(true);
        return setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email(t('dashboard.account.invalidEmail'))
          .required(t('dashboard.account.required')),
        password: Yup.string()
          .min(6, t('dashboard.account.minimum8chars'))
          .max(50, t('dashboard.account.maximum50chars'))
          .required(t('dashboard.account.required')),
      })}
    >
      {({
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
              {t('dashboard.account.emailAddress')}
              <span className="form__asterisks">*</span>
            </p>
            {/* Desktop */}
            <div className={mailIsChanging ? 'd-none' : 'd-none d-sm-block'}>
              <InputGroup>
                <Form.Control
                  className=" form__control__account "
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={values.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                  size="lg"
                />

                <div className="input-group-append">
                  <Button onClick={() => setMailIsChanging(true)}>
                    {t('dashboard.account.changeEmail')}
                  </Button>
                </div>
              </InputGroup>
              {errors.email && (
                <p style={{ color: '#dc3545' }}>{errors.email}</p>
              )}
              {emailIsChanged && (
                <p style={{ color: '#28a745' }}>
                  {t('dashboard.emailWasChanged')}
                </p>
              )}
            </div>
            <div className={mailIsChanging ? 'd-block' : 'd-none'}>
              <Form.Group>
                <Form.Control
                  className=" form__control__account "
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={values.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                  size="lg"
                />
                {errors.email && (
                  <p style={{ color: '#dc3545' }}>{errors.email}</p>
                )}
                <Form.Control
                  className="form__control__account mt-3"
                  type="password"
                  name="password"
                  placeholder="Current password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={values.password && !errors.password}
                  isInvalid={touched.password && !!errors.password}
                  size="lg"
                />
                {errors.password && (
                  <p style={{ color: '#dc3545' }}>{errors.password}</p>
                )}
              </Form.Group>
              <Button type="submit" disabled={isSubmitting} size="lg">
                {t('dashboard.account.save')}
              </Button>
            </div>
            {/* Mobile */}
            <div className={mailIsChanging ? 'd-none' : 'd-block d-sm-none'}>
              <Form.Group>
                <Form.Control
                  className=" form__control__account "
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={values.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                  size="lg"
                />
                {errors.email && (
                  <p style={{ color: '#dc3545' }}>{errors.email}</p>
                )}
                {emailIsChanged && (
                  <p style={{ color: '#28a745' }}>
                    {t('dashboard.account.emailWasChanged')}
                  </p>
                )}
                <Button
                  className="mt-2"
                  onClick={() => setMailIsChanging(true)}
                  size="lg"
                >
                  {t('dashboard.account.change')}
                </Button>
              </Form.Group>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default withTranslation('common')(DashboardAccountFormsEmailChange);
