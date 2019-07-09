import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';

import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';

import './sign-up.scss';

import config from '../../config';
import { fetchLogin, existingEmail } from '../../actions';
import { WevedoServiceContext } from '../contexts';

import SocialButton from '../social-button';

import Logo from '../../assets/images/symbol.png';

function SignUp({
  login, existingEmail, isLoggedIn, error,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSignUp = async event => {
    event.preventDefault();

    const isNewEmail = await wevedoService.checkEmail({ email });
    const body = {
      email,
      password,
      deviceOS: 'android', // TO-DO: 'web' should be later
    };

    if (isNewEmail) {
      await wevedoService.register(body);
      return login(wevedoService, body);
    }

    return existingEmail('Email is already in use');
  };

  const handleSocialSignUp = async ({ _profile: profile }) => {
    await wevedoService.register({
      email: profile.email,
      password: profile.id,
      fullName: profile.fullName,
      firstName: profile.firstName,
      lastName: profile.lastName,
      profileImageURL: profile.profilePicURL,
      deviceOS: 'android', // TO-DO: 'web' should be later
    });

    login(wevedoService, {
      email: profile.email,
      password: profile.id,
      deviceOS: 'android', // TO-DO: 'web' should be later
    });
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Row className="w-100 m-0 login">
      <Col sm={6} className="login-img login-img__user">
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
            <SocialButton
              className="login-form-social-btn-fb"
              provider="facebook"
              appId={config.facebookAppId}
              onLoginSuccess={handleSocialSignUp}
            >
              <i className="fab fa-facebook-f" />
              {' Register with Facebook'}
            </SocialButton>
            <SocialButton
              className={config.googleAppId}
              provider="google"
              appId="692103359776-ge0g7j149nbis5m09amuegnjm5hgg603.apps.googleusercontent.com"
              onLoginSuccess={handleSocialSignUp}
            >
              <i className="fab fa-google" />
              {' Register with Google'}
            </SocialButton>
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
                      autoComplete="password"
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

const mapStateToProps = ({ sessionData }) => sessionData;

const mapDispatchToProps = dispatch => ({
  login: fetchLogin(dispatch),
  existingEmail: error => dispatch(existingEmail(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
