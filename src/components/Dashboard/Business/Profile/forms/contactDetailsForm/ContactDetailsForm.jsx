import React from 'react';
import { Formik } from 'formik';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactDetailsForm = () => {
  return (
    <Formik>
      {() => {
        return (
          <Form>
            <Row className="mb-5">
              <Col>
                <div className="dashboard-business__profile__whitebox">
                  <Row className="p-3">
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Service Name</p>
                      <Form.Control className=" form__control__account " />
                    </Col>
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Website Url</p>
                      <Form.Control className=" form__control__account " />
                    </Col>
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Email Address</p>
                      <Form.Control className=" form__control__account " />
                    </Col>
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Mobile Number</p>
                      <Form.Control className=" form__control__account " />
                    </Col>
                  </Row>
                  <Col className="mb-4">
                    <p className="text-muted">Address</p>
                    <Row className="mb-sm-3">
                      <Col sm={5} className="mb-2">
                        <Form.Control className=" form__control__account " />
                      </Col>
                      <Col sm={4} className="mb-2">
                        <Form.Control className=" form__control__account " />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={5} className="mb-2">
                        <Form.Control className=" form__control__account " />
                      </Col>
                      <Col sm={4} className="mb-2">
                        <Form.Control className=" form__control__account " />
                      </Col>
                      <Col sm={3} className="mb-2">
                        <Form.Control className=" form__control__account " />
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
