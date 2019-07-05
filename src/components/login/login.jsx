import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';

import validator from 'validator';

import {
  Row, Col, Form, Button, Modal,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './login.scss';

import { fetchLogin } from '../../actions';
import { WevedoServiceContext } from '../contexts';

import Logo from '../../assets/images/symbol.png';

function Login({ login, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const wevedoService = useContext(WevedoServiceContext);

  const handleUserInput = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleLogIn = event => {
    event.preventDefault();

    // if (validator.isMobilePhone(value)) {
    //   console.log('PHONE: ', validator.isMobilePhone(value));
    // }
    // if (validator.isEmail(value)) {
    //   console.log('EMAIL: ', validator.isEmail(value));
    // }

    login(wevedoService, {
      email,
      password,
      deviceOS: 'android', // TO-DO: 'web' should be later
    });
  };

  const modalClose = () => setModalShow(false);

  return (
    <Row className="w-100 m-0 login logi">
      <Col sm={6} className="login-img login-img__user">
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
                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={email}
                      onChange={handleUserInput}
                      autoComplete="email"
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-3">
                  <Form.Group controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleUserInput}
                      autoComplete="current-password"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Check label="Remember me" />
                </Col>
                <Col sm={6} className="text-right text-muted">
                  <Button
                    className="button-password"
                    onClick={() => setModalShow(true)}
                    variant="link"
                  >
                    Forgot password?
                  </Button>
                  <PassReset show={modalShow} onHide={modalClose} />
                </Col>
                <Col sm={12} className="text-center text-uppercase mt-5 mb-4">
                  <Button size="lg" onClick={handleLogIn}>
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

const mapStateToProps = ({ sessionData }) => sessionData;

const mapDispatchToProps = dispatch => ({
  login: fetchLogin(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
