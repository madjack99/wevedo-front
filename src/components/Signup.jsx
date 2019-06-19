import React, { Component } from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../sass/wevedo.scss';
import Logo from '../images/symbol.png';
import AuthApi from '../api/auth.api';

const api = new AuthApi('api');

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      password: '',
      formErrors: { phoneNumber: '', password: '' },
      phoneValid: false,
      passwordValid: false,
      formValid: true,
      error: false,
    };
  }

  handleSignUp = async e => {
    e.preventDefault();
    if (this.state.formValid) {
      const { phoneNumber, password } = this.state;
      const body = {
        phoneNumber,
        password,
        fullName: '',
        firstName: '',
        lastName: '',
        countryCode: '',
        regionName: '',
        appearInCountries: '',
        eulaAccepted: true,
        deviceToken: 'somerandomtoken',
      };

      const response = await api.signupUserByEmailOrPhone(body);
      console.log('response', response);
    }
  };

  handleUserInput = e => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  };

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let { phoneValid } = this.state;
    let { passwordValid } = this.state;

    switch (fieldName) {
      case 'phoneNumber':
        phoneValid = value.match(
          /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/,
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
    this.setState({ formValid: this.state.phoneValid && this.state.passwordValid });
  }

  render() {
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
                        onChange={this.handleUserInput}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Check label="Remember me" />
                  </Col>
                  <Col sm={12} className="text-center text-uppercase mt-5 mb-4">
                    <Button size="lg" onClick={this.handleSignUp}>
                      Signup
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

export default Signup;
