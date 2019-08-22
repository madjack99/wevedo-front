import React, { useState, useContext } from 'react';

import { Row, Col, Form, Modal, Button } from 'react-bootstrap';
import { Formik } from 'formik';

import { WevedoServiceContext } from '../../../contexts';
import schema from './schema';

import UIModal from '../../UI/Modal';

const ResetPasswordDialog = ({ show, onHide, email, phoneNumber }) => {
  const [resetCodeIsSended, setResetCodeIsSended] = useState(false);
  const [passwordWasChanged, setPasswordWasChanged] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  return (
    <UIModal show={show} onHide={onHide}>
      <Row>
        <Col sm={12} className="px-5 pb-5 text-center">
          <Formik
            className="form"
            enableReinitialize
            initialValues={{
              resetCode: '',
              newPassword: '',
            }}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              if (!resetCodeIsSended) {
                try {
                  if (email) {
                    await wevedoService.resetPasswordEmail({
                      email,
                      resetPassword: values.newPassword,
                    });
                  } else {
                    await wevedoService.resetPassword({
                      phoneNumber,
                      resetPassword: values.newPassword,
                    });
                  }
                  setResetCodeIsSended(true);
                } catch (error) {
                  console.error(error);
                }
              } else {
                try {
                  if (email) {
                    await wevedoService.checkResetCodeEmail({
                      email,
                      phoneNumber,
                      resetToken: values.resetCode,
                    });
                  } else {
                    await wevedoService.checkResetCode({
                      phoneNumber,
                      resetToken: values.resetCode,
                    });
                  }
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
            validationSchema={schema}
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
                  <div className={resetCodeIsSended ? 'd-none' : 'd-block'}>
                    <Modal.Title className="text-center text-uppercase font-weight-bold w-100 pt-2">
                      New password
                    </Modal.Title>
                    <Form.Group className="mb-2">
                      <Form.Control
                        className="form__control__account"
                        type="password"
                        name="newPassword"
                        value={values.newPassword}
                        onChange={handleChange}
                        isValid={values.newPassword && !errors.newPassword}
                        isInvalid={touched.newPassword && !!errors.newPassword}
                      />
                      {errors.newPassword && (
                        <p style={{ color: '#dc3545' }}>{errors.newPassword}</p>
                      )}
                      {passwordWasChanged && (
                        <p style={{ color: '#28a745' }}>
                          password was successfully changed
                        </p>
                      )}
                    </Form.Group>
                    <Button type="submit" disabled={isSubmitting}>
                      Send code
                    </Button>
                  </div>
                  <div className={resetCodeIsSended ? 'd-block' : 'd-none'}>
                    <Modal.Title className="text-center text-uppercase font-weight-bold w-100 pt-2">
                      Reset code
                    </Modal.Title>
                    <p className="mb-0">
                      Reset code has been sent to{' '}
                      {email
                        ? `${email} address`
                        : `${phoneNumber} phone number`}
                      .
                      <br />
                      Please enter it.
                    </p>
                    <Form.Group className="mb-2">
                      <Form.Control
                        className="form__control__account"
                        type="text"
                        name="resetCode"
                        value={values.resetCode}
                        onChange={handleChange}
                        isValid={values.resetCode && !errors.resetCode}
                        isInvalid={touched.resetCode && !!errors.resetCode}
                        placeholder="Reset code"
                      />
                      {errors.resetCode && (
                        <p style={{ color: '#dc3545' }}>{errors.resetCode}</p>
                      )}
                    </Form.Group>
                    <Button type="submit" disabled={isSubmitting}>
                      Change password
                    </Button>
                  </div>
                </Form>
              );
            }}
          />
        </Col>
      </Row>
    </UIModal>
  );
};

export default ResetPasswordDialog;
