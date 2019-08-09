import React from 'react';
import { Formik } from 'formik';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import basicInfoSchema from './basicInfoSchema';

const BasicInfoForm = ({ user }) => {
  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        bio: user.bio || 'bio',
        minPrice: user.minPrice || 'minPrice',
        maxPrice: user.maxPrice || 'maxPrice',
        facilities: user.facilities || 'facilities',
      }}
      validationSchema={basicInfoSchema}
    >
      {({ values, handleChange, errors }) => {
        return (
          <Form>
            <Row className="mb-5">
              <Col>
                <div className="dashboard-business__profile__whitebox">
                  <Col sm={12} className="mb-4">
                    <Form.Group>
                      <p className="text-muted">Description</p>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        name="bio"
                        value={values.bio}
                        className=" form__control__account "
                        onChange={handleChange}
                      />
                      {errors.bio && (
                        <p style={{ color: '#dc3545' }}>{errors.bio}</p>
                      )}
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <p className="text-muted">Pricing</p>
                    <Row>
                      <Col sm={4} className="mb-2 mb-sm-0">
                        <Form.Control
                          name="minPrice"
                          value={values.minPrice}
                          className=" form__control__account "
                          onChange={handleChange}
                        />
                        {errors.minPrice && (
                          <p style={{ color: '#dc3545' }}>{errors.minPrice}</p>
                        )}
                      </Col>
                      <Col sm={4}>
                        <Form.Control
                          name="maxPrice"
                          value={values.maxPrice}
                          className=" form__control__account "
                          onChange={handleChange}
                        />
                        {errors.maxPrice && (
                          <p style={{ color: '#dc3545' }}>{errors.maxPrice}</p>
                        )}
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <p className="text-muted">Guests Capacity</p>
                    <Row>
                      <Col sm={4} className="mb-2 mb-sm-0">
                        <Form.Control
                          className=" form__control__account "
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={4}>
                        <Form.Control
                          className=" form__control__account "
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <p className="text-muted">Facilities</p>
                    <Form.Control
                      name="facilities"
                      value={values.facilities}
                      className=" form__control__account "
                      onChange={handleChange}
                    />
                    {errors.facilities && (
                      <p style={{ color: '#dc3545' }}>{errors.facilities}</p>
                    )}
                  </Col>
                  <Col sm={12} className="text-uppercase mt-2 mb-4">
                    <Button size="lg">Save</Button>
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

export default BasicInfoForm;
