import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';

import './login.scss';

import config from '../../config';
import { fetchLogin } from '../../actions';
import { WevedoServiceContext } from '../contexts';

import SocialButton from '../social-button';
import LoginForm from '../login-form';

import Logo from '../../assets/images/symbol.png';

function Login({ login, isLoggedIn, error }) {
  const wevedoService = useContext(WevedoServiceContext);

  const handleSocialLogIn = ({ _profile: profile, _provider: provider }) => {
    login(wevedoService.socialLogin, {
      ...profile,
      provider,
    });
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

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
            <SocialButton
              className="login-form-social-btn-fb"
              provider="facebook"
              appId={config.facebookAppId}
              onLoginSuccess={handleSocialLogIn}
            >
              <i className="fab fa-facebook-f" />
              {' Login with Facebook'}
            </SocialButton>
            <SocialButton
              className="login-form-social-btn-g"
              provider="google"
              appId={config.googleAppId}
              onLoginSuccess={handleSocialLogIn}
            >
              <i className="fab fa-google" />
              {' Login with Google'}
            </SocialButton>
          </Col>
          <Col sm={12} className="d-flex align-items-center justify-content-center mt-4 mb-4">
            <hr />
            {' '}
            <b className="text-muted text-butler-bold">OR</b>
            {' '}
            <hr />
          </Col>
          <Col sm={12} className="d-flex align-items-center justify-content-center my-2">
            {error}
          </Col>
          <Col sm={12} className="mt-4">
            <LoginForm />
          </Col>
          <Col className="text-center mt-4">
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

const mapStateToProps = ({ sessionData }) => sessionData;

const mapDispatchToProps = dispatch => ({
  login: fetchLogin(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
