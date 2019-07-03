import React, { useState, useContext } from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './sign-up.scss';

import Logo from '../../assets/images/symbol.png';
import { WevedoServiceContext } from '../contexts';

export default function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const wevedoService = useContext(WevedoServiceContext);

  const handleUserInput = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'phone-number':
        setPhoneNumber(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSignUp = async event => {
    event.preventDefault();

    const res = await wevedoService.register({
      phoneNumber,
      password,
      deviceOS: 'android', // TODO: 'web' should be later
    });

    // TODO: make something after the user is registered
    console.log('RESPONSE: ', res.data);
  };

  return (
    <Row className="w-100 m-0 login">
      <Col sm={6} className="login-img">
        <div className="login-img-text p-5">
          <h1 className="mb-0">Hey,</h1>
          <h2>Glad to see you...</h2>
          <hr className="hr-sm m-0 mt-4 mb-4" />
        </div>
      </Col>
      <Col sm={6} className="p-5 login-form">
        <Row>
          <Col sm={12} className="mb-5">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </Col>
          <Col sm={12} className="text-center login-form-social-btn">
            <Button className="login-form-social-btn-fb">
              <i className="fab fa-facebook-f" />
              {' Login with Facebook'}
            </Button>
            <Button className="login-form-social-btn-g">
              <i className="fab fa-google" />
              {' Login with Google'}
            </Button>
          </Col>
          <Col sm={12} className="d-flex align-items-center justify-content-center mt-4 mb-4">
            <hr />
            {' '}
            <b className="text-muted text-butler-bold">OR</b>
            {' '}
            <hr />
          </Col>
          <Col sm={12} className="mt-4">
            <Form>
              <Row>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      name="phone-number"
                      value={phoneNumber}
                      onChange={handleUserInput}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-3">
                  <Form.Group controlId="">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleUserInput}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Check label="Remember me" />
                </Col>
                <Col sm={12} className="text-center text-uppercase mt-5 mb-4">
                  <Button size="lg" onClick={handleSignUp}>
                    SignUp
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col className="text-center">
            <p>
              <b>
                {'Already have and account? '}
                <Link to="/login" className="text-wevedo">
                  Login
                </Link>
              </b>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
