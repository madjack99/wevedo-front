import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

import addImage from '../../../assets/images/addimg.png';

import { WevedoServiceContext } from '../../../contexts';

import { updateUser } from '../../../actions/user-actions';

import nameSchema from './nameSchema';

const DashboardAccount = ({ user, updateUser }) => {
  const wevedoService = useContext(WevedoServiceContext);
  return (
    <div className="dashboard">
      <div className="dashboard-background" />
      <Container className="dashboard-business__profile">
        <h6 className="mb-3 mb-sm-5 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          Your Account{' '}
        </h6>
        <Row>
          <Col>
            <div className="dashboard-business__profile__whitebox">
              <Row>
                <Col sm={3}>
                  <div className="text-center">
                    <img src={addImage} alt="" />
                    <p className="mt-2">Upload Photo</p>
                  </div>
                </Col>
                <Col sm={9}>
                  <Col sm={12} className="mb-4">
                    <NameChangeForm
                      fullName={user.fullName}
                      updateProfile={wevedoService.updateProfile}
                      updateUser={updateUser}
                    />
                  </Col>

                  <Col sm={12} className="mb-4">
                    <p className="text-muted">E-Mail address</p>
                    <InputGroup className="d-none d-sm-flex">
                      <Form.Control size="lg" type="email" />
                      <div className="input-group-append">
                        <Button>Change the email</Button>
                      </div>
                    </InputGroup>
                    <Form.Group className="d-block d-sm-none">
                      <Form.Control size="lg" type="email" className="mb-2" />
                      <Button size="lg">Change the email</Button>
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <div className="mb-3">
                      <p className="text-muted mb-0">
                        Want to change your password?
                      </p>
                      <b>You will recieve an email with intructions.</b>
                    </div>
                    <Button size="lg">Change password</Button>
                  </Col>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const NameChangeForm = ({ fullName, updateProfile, updateUser }) => {
  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        fullName: fullName || '',
      }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const result = await updateUser(updateProfile)({
          fullName: values.fullName,
        });
        console.log(result);
        setSubmitting(false);
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
        console.log(values);
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <p className="text-muted">Full Name</p>
              <Form.Control
                className="form__control"
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                isValid={values.fullName && !errors.fullName}
                isInvalid={touched.fullName && !!errors.fullName}
                size="lg"
              />
            </Form.Group>
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.fullName}
            </Form.Control.Feedback>
            <Button type="submit" size="lg" disabled={isSubmitting}>
              Save
            </Button>
          </Form>
        );
      }}
    />
  );
};

const mapStateToProps = ({ userData }) => userData;

const mapDispatchToProps = dispatch => ({
  updateUser: updateUser(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardAccount);
