import React from 'react';
import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap';

import Logo from '../../assets/images/symbol.png';

export default function BusinessSignUpStep2() {
  return (
    <React.Fragment>
      <Container className="business-signup-config">
        <Row className="mt-5 mb-5">
          <Col><a href="/"><img src={Logo} width="130px" alt="wevedo" /></a></Col>
        </Row>
        <Row className="pt-4 pb-4">
          <Col sm={12}>
            <h6 className="text-uppercase text-proxima-bold">Basic Info</h6>
            <hr className="hr-md" />
          </Col>
          <Col sm={12} className="mt-5 mb-3">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <p><b>Describe your business and services</b></p>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Col>
          <Col sm={12} className="mb-4">
            <p>
              <b>From which price can I hire Venue?</b>
              <span className="d-block text-muted">Enter your average pricing in order for your Shopfront to appear in results when couples search by price.</span>
            </p>
            <Row>
              <Col sm={4}><Form.Control placeholder="Minimum Price" /></Col>
              <Col sm={4}><Form.Control placeholder="Maximum Price" /></Col>
            </Row>
          </Col>
          <Col sm={12} className="mb-4">
            <p><b>How many guests can you accomodate?</b></p>
            <Row>
              <Col sm={4}><Form.Control placeholder="Minimum Number" /></Col>
              <Col sm={4}><Form.Control placeholder="Maximum Number" /></Col>
            </Row>
          </Col>
          <Col sm={12} className="mb-4">
            <p><b>Type of your venue</b></p>
            <Form.Control placeholder="Eg. Country house" />
          </Col>
          <Col sm={12} className="mb-4">
            <p><b>Your venue style</b></p>
            <Form.Control placeholder="Eg. Modern, Classic..." />
          </Col>
          <Col sm={12} className="mb-4">
            <p><b>Which facilities do you provide?</b></p>
            <Form.Control placeholder="Eg. Banquet hall, Kitchen..." />
          </Col>

          <Col sm={12} className="text-right text-uppercase mt-2 mb-4">
            <Button href="/dashboard" size="lg">Save</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
