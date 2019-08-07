import React from 'react';

import { Formik } from 'formik';

import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

import addImage from '../../../assets/images/addimg.png';

import nameSchema from './nameSchema';

const DashboardAccount = () => (
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
                  <NameChangeForm />
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

const NameChangeForm = () => {
  return (
    <Formik
      className="form"
      initialValues={{
        fullName: '', // Get from redux
      }}
      handleSubmit={() => {
        // Send POST to backend
      }}
      validationSchema={nameSchema}
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
                placeholder="John Smith"
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
    </Formik>
  );
};

export default DashboardAccount;
