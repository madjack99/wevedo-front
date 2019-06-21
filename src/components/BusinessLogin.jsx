import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../sass/wevedo.scss';
import Logo from '../images/symbol.png';

class BusinessLogin extends Component {
  render() {
    return (
    	<Row className="w-100 m-0 login">
  			<Col sm={6} className="login-img login-img__business">
  				<div className="login-img-text p-5">
            <h1 className="mb-0">Welcome Back,</h1>
            <h2>Please login to your account</h2>
            <hr className="hr-sm m-0 mt-4 mb-4"/>
          </div>
  			</Col>
  			<Col sm={6} className="login-form">
  				<Row>
            <Col sm={12} className="mb-5"><a href="/"><img src={Logo} alt=""/></a></Col>
            <Col sm={12} className="mt-4">
              <Form>
                <Row>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-3">
                    <Form.Group controlId="">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Check label="Remember me"/>
                  </Col>
                  <Col sm={12} className="text-center text-uppercase mt-5 mb-4">
                    <Button href="/dashboard" size="lg">Login</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col className="text-center"><p><b>Don't have and account? <a href="/pricing" className="text-wevedo">Signup</a></b></p></Col>
          </Row>
  			</Col>
    	</Row>
		)
  }
}

export default BusinessLogin;