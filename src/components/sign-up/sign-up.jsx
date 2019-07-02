import React, { Component } from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './sign-up.scss';

import Logo from '../../assets/images/symbol.png';
import WevedoService from '../../api/services/wevedo-service';

class SignUp extends Component {
  constructor() {
    super();

    this.wevedoService = new WevedoService();

    this.state = {
      phoneNumber: '',
      password: '',
      formErrors: { phoneNumber: '', password: '' },
      phoneValid: false,
      passwordValid: false,
      formValid: true,
      // error: false,
    };
  }

  onSignUp = async e => {
    const { formValid } = this.state;

    e.preventDefault();

    if (formValid) {
      const { phoneNumber, password } = this.state;

      const res = await this.wevedoService.register({
        phoneNumber,
        password,
        deviceOS: 'android', // TODO: 'web' should be later
      });

      // TODO: make something after the user is registered
      console.log('RESPONSE: ', res.data);
    }
  };

  handleUserInput = e => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  };

  validateField(fieldName, value) {
    const { formErrors } = this.state;

    const fieldValidationErrors = formErrors;
    let { phoneValid } = this.state;
    let { passwordValid } = this.state;

    switch (fieldName) {
      case 'phoneNumber':
        phoneValid = value.match(
          /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?(\d{4}|\d{3}))?$/,
        );
        fieldValidationErrors.phoneNumber = phoneValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        phoneValid,
        passwordValid,
      },
      this.validateForm,
    );
  }

  validateForm() {
    const { phoneValid, passwordValid } = this.state;

    this.setState({ formValid: (phoneValid && passwordValid) });
  }

  render() {
    const { phoneNumber, password } = this.state;

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
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.handleUserInput}
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
                        onChange={this.handleUserInput}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Check label="Remember me" />
                  </Col>
                  <Col sm={12} className="text-center text-uppercase mt-5 mb-4">
                    <Button size="lg" onClick={this.onSignUp}>
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
}

export default SignUp;
