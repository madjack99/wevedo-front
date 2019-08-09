import React from 'react';
import { Formik } from 'formik';
import { Row, Col, Form, Button } from 'react-bootstrap';

const ContactDetailsForm = ({ user }) => {
  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        fullName: user.fullName || '',
        website: user.website || 'No website',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        address: user.address || '',
        regionName: user.regionName || '',
        country: user.country || '',
        postcode: user.postcode || '',
      }}
    >
      {({ values, handleChange }) => {
        return (
          <Form>
            <Row className="mb-5">
              <Col>
                <div className="dashboard-business__profile__whitebox">
                  <Row className="p-3">
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Service Name</p>
                      <Form.Control
                        className=" form__control__account "
                        value={values.fullName}
                        name="fullName"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Website Url</p>
                      <Form.Control
                        className=" form__control__account "
                        value={values.website}
                        name="website"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Email Address</p>
                      <Form.Control
                        className=" form__control__account "
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Mobile Number</p>
                      <Form.Control
                        className=" form__control__account "
                        value={values.phoneNumber}
                        name="phoneNumber"
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <Col className="mb-4">
                    <p className="text-muted">Address</p>
                    <Row className="mb-sm-3">
                      <Col sm={5} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.address}
                          name="address"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={4} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.regionName}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={5} className="mb-2">
                        <Form.Control className=" form__control__account " />
                      </Col>
                      <Col sm={4} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.country}
                          name="country"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={3} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.postcode}
                          name="postcode"
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} className="text-uppercase mt-2 mb-4">
                    <Button size="lg" type="submit">
                      Save
                    </Button>
                  </Col>
                </div>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactDetailsForm;
