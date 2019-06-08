import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icons from '../../images/social-networks.png';

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
            <Col sm={2}>
              <img className="display-right" src={icons} alt="logo" />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Footer;
