import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../sass/wevedo.scss';
import Logo from '../images/symbol.png';

class BusinessSignup extends Component {
  render() {
    return (
    	<Row className="w-100 h-100 m-0 login">
  			<Col sm={6} className="login-img login-img__business">
  				<div className="login-img-text p-5">
            <h1 className="mb-0">Hey,</h1>
            <h2>Glad to see you...</h2>
            <hr className="hr-sm m-0 mt-4 mb-4"/>   
            <p className="pr-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 
          </div>
  			</Col>
  			<Col sm={6} className="login-form">
  				<Row>
            <Col sm={12} className="mb-5"><a href="/"><img src={Logo} alt=""/></a></Col>
            <Col sm={12} className="mt-4">
              <Form className="login-form-scrollable">
                <Row>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="" placeholder="Username" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="" placeholder="Password" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="" placeholder="Confirm Password" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="" placeholder="Business Name" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-5">
                    <Form.Control as="select">
                      <option>Select Category</option>
                      <option>...</option>
                    </Form.Control>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="" placeholder="Business Website" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="" placeholder="Business Email" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="" placeholder="Business Phone Number" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="" placeholder="Your Postcode" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="" placeholder="Business Address" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="" placeholder="Town/City" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="" placeholder="Country" />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col sm={12} className="text-center text-uppercase mt-2 mb-4">
              <Button href="/businesssignup-step1" size="lg">Next stap <i className="fa fa-arrow-right"></i></Button>
            </Col>
          </Row>
  			</Col>
    	</Row>
		)
  }
}

export default BusinessSignup;