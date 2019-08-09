import React from 'react';
import { Formik } from 'formik';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const BasicInfoForm = () => {
  return (
    <Formik>
      {() => {
        return (
          <Row className="mb-5">
            <Col>
              <div className="dashboard-business__profile__whitebox">
                <Col sm={12} className="mb-4">
                  <Form.Group>
                    <p className="text-muted">Description</p>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-4">
                  <p className="text-muted">Pricing</p>
                  <Row>
                    <Col sm={4} className="mb-2 mb-sm-0">
                      <Form.Control />
                    </Col>
                    <Col sm={4}>
                      <Form.Control />
                    </Col>
                  </Row>
                </Col>
                <Col sm={12} className="mb-4">
                  <p className="text-muted">Guests Capacity</p>
                  <Row>
                    <Col sm={4} className="mb-2 mb-sm-0">
                      <Form.Control />
                    </Col>
                    <Col sm={4}>
                      <Form.Control />
                    </Col>
                  </Row>
                </Col>
                <Col sm={12} className="mb-4">
                  <p className="text-muted">Facilities</p>
                  <Form.Control />
                </Col>
                <Col sm={12} className="text-uppercase mt-2 mb-4">
                  <Button size="lg">Save</Button>
                </Col>
              </div>
            </Col>
          </Row>
        );
      }}
    </Formik>
  );
};

export default BasicInfoForm;
