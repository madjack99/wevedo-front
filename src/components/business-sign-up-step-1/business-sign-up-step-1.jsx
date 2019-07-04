import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import Logo from '../../assets/images/symbol.png';

export default function BusinessSignUpStep1() {
  return (
    <React.Fragment>
      <Container className="business-signup-config">
        <Row className="mt-5 mb-5">
          <Col><a href="/"><img src={Logo} width="130px" alt="wevedo" /></a></Col>
        </Row>
        <Row className="pt-4 pb-4">
          <Col sm={12}>
            <h6 className="text-uppercase text-proxima-bold">Upload Photos</h6>
            <hr className="hr-md" />
          </Col>
          <Col sm={12} className="mt-2">
            drag and drop box
          </Col>
          <Col sm={4}>pic1</Col>
          <Col sm={4}>pic2</Col>
          <Col sm={4}>pic3</Col>
          <Col sm={12} className="text-right text-uppercase mt-2 mb-4">
            <Button href="/businesssignup-step2" size="lg">
              Next stap
              <i className="fa fa-arrow-right" />
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
