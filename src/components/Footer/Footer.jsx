import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer-border"></div>
        <Container className="footer">
          <Row className="h-100 align-items-center">
            <Col sm={10} className="links">
              <Nav className="text-uppercase">
                <Nav.Link href="">© 2019 Wewedo</Nav.Link>
                <span className="footer-dot"></span>
                <Nav.Link href="">Contact</Nav.Link>
                <span className="footer-dot"></span>
                <Nav.Link href="">Terms & Conditions</Nav.Link>
                <span className="footer-dot"></span>
                <Nav.Link href="">Privacy Policy</Nav.Link>
              </Nav>            
            </Col>
            <Col sm={2} xs className="text-center social-links">
              <Row className="d-flex justify-content-center">
                <Col className="p-0" xs={2} sm={4}><a href=""><i className="fab fa-instagram"></i></a></Col>
                <Col className="p-0" xs={2} sm={4}><a href=""><i className="fab fa-facebook"></i></a></Col>
                <Col className="p-0" xs={2} sm={4}><a href=""><i className="fab fa-twitter"></i></a></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Footer;
