import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer-border"></div>
        <Container className="footer">
          <Row className="h-100 align-items-center">
            <Col sm={10}>
              <Nav className="text-uppercase">
                <Nav.Link href="">© 2019 Wewedo</Nav.Link>
                <div className="footer-dot"></div>
                <Nav.Link href="">Contact</Nav.Link>
                <div className="footer-dot"></div>
                <Nav.Link href="">Terms & Conditions</Nav.Link>
                <div className="footer-dot"></div>
                <Nav.Link href="">Privacy Policy</Nav.Link>
              </Nav>            
            </Col>
            <Col sm={2} className="text-right">
              <Row className="text-right">
                <Col className="p-0"><i className="fab fa-instagram"></i></Col>
                <Col className="p-0"><i className="fab fa-facebook"></i></Col>
                <Col className="p-0"><i className="fab fa-twitter"></i></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Footer;
