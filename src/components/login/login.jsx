import React, { Component } from 'react';
import {
  Row, Col, Form, Button, Modal,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './login.scss';

import Logo from '../../assets/images/symbol.png';
import WevedoService from '../../api/services/wevedo-service';

class Login extends Component {
  constructor(...args) {
    super(...args);

    this.wevedoService = new WevedoService();

    this.state = {
      phoneNumber: '',
      modalShow: false,
      password: '',
      // isPasswordIncorect: false,
      // isLoginIncorrect: false,
      error: false,
    };
  }

  handleUserInput = e => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value }, () => {
      this.validateField(name);
    });
  };

  validateField = fieldName => {
    switch (fieldName) {
      case 'phoneNumber':
        break;
      case 'password':
        break;
      default:
        break;
    }
  };

  onLogIn = async e => {
    e.preventDefault();

    this.setState({
      error: false,
    });

    const { phoneNumber, password } = this.state;

    const res = await this.wevedoService.login({
      phoneNumber,
      password,
      deviceOS: 'android', // TODO: 'web' should be later
    });

    console.log(`TOKEN: ${res.data}`); // TODO: save to redux
  };

  render() {
    const {
      phoneNumber, modalShow, password, error,
    } = this.state;

    const modalClose = () => this.setState({ modalShow: false });
    return (
      <Row className="w-100 m-0 login">
        <Col sm={6} className="login-img">
          <div className="login-img-text p-5">
            <h1 className="mb-0">Welcome Back,</h1>
            <h2>Please login to your account</h2>
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
            {error && (
              <Col sm={12} className="d-flex align-items-center justify-content-center mt-4 mb-4">
                {error}
              </Col>
            )}

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
                  <Col sm={6} className="text-right text-muted">
                    <a href onClick={() => this.setState({ modalShow: true })}>
                      Forgot password?
                    </a>
                    <PassReset show={modalShow} onHide={modalClose} />
                  </Col>
                  <Col sm={12} className="text-center text-uppercase mt-5 mb-4">
                    <Button size="lg" onClick={this.onLogIn}>
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col className="text-center">
              <p>
                <b>
                  Don&apos;t have and account?
                  {' '}
                  <Link to="/signup" className="text-wevedo">
                    Sign Up
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
export default Login;

const PassReset = props => (
  <Modal
    {...props}
    size="md"
    aria-labelledby="Password reset"
    centered
    className="global-modal"
  >
    <Modal.Body className="p-0">
      <Row>
        <span
          className="modal-close-btn"
          onClick={props.onHide}
        >
          <i className="fas fa-times fa-2x" />
        </span>
        <Col sm={12} className="p-5 text-center">
          <h5 className="text-uppercase">Reset Password</h5>
          <hr />
          <p className="mb-0">
            Reset password has been sent to user@email.com address.
            <br />
            Please check your e-mail.
          </p>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
);
