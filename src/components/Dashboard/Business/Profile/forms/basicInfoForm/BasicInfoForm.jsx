import React from 'react';
import { Formik } from 'formik';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const BasicInfoForm = () => {
  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        bio: 'bio',
        minPrice: 'minPrice',
        maxPrice: 'maxPrice',
        facilities: 'facilities',
      }}
    >
      {({ values }) => {
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
                        value={values.bio}
                        className=" form__control__account "
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <p className="text-muted">Pricing</p>
                    <Row>
                      <Col sm={4} className="mb-2 mb-sm-0">
                        <Form.Control
                          value={values.minPrice}
                          className=" form__control__account "
                        />
                      </Col>
                      <Col sm={4}>
                        <Form.Control
                          value={values.minPrice}
                          className=" form__control__account "
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <p className="text-muted">Guests Capacity</p>
                    <Row>
                      <Col sm={4} className="mb-2 mb-sm-0">
                        <Form.Control className=" form__control__account " />
                      </Col>
                      <Col sm={4}>
                        <Form.Control className=" form__control__account " />
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <p className="text-muted">Facilities</p>
                    <Form.Control
                      value={values.facilities}
                      className=" form__control__account "
                    />
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
