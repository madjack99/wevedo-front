import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  Row, Col, Form, Button, Modal,
} from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import './login.scss';

import config from '../../config';
import { fetchLogin } from '../../actions';
import { WevedoServiceContext } from '../contexts';

import SocialButton from '../social-button';

import Logo from '../../assets/images/symbol.png';

function Login({
  login, isLoggedIn, error, t,
}) {
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

    login(wevedoService.login, {
      email,
      password,
      deviceOS: 'android', // TO-DO: 'web' should be later
    });
  };

  const handleSocialLogIn = ({ _profile: profile, _provider: provider }) => {
    login(wevedoService.socialLogin, {
      ...profile,
      provider,
    });
  };

  const modalClose = () => setModalShow(false);

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Row className="w-100 m-0 login logi">
      <Col sm={6} className="login-img login-img__user">
        <div className="login-img-text p-5">
          <h1 className="mb-0">{t('login.jumbotron.largeTitle')}</h1>
          <h2>{t('login.jumbotron.smallTitle')}</h2>
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
            <b className="text-muted text-butler-bold">{t('login.or')}</b>
            {' '}
            <hr />
          </Col>
          <Col sm={12} className="d-flex align-items-center justify-content-center my-2">
            {error}
          </Col>
          <Col sm={12} className="mt-4">
            <Form>
              <Row>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      placeholder={t('login.form.emailPlaceholder')}
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
                      placeholder={t('login.form.passwordPlaceholder')}
                      name="password"
                      value={password}
                      onChange={handleUserInput}
                      autoComplete="current-password"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Check label={t('login.form.rememberMeLabel')} />
                </Col>
                <Col sm={6} className="text-right text-muted">
                  <Button
                    className="button-password"
                    onClick={() => setModalShow(true)}
                    variant="link"
                  >
                    {t('login.form.forgotPassword')}
                  </Button>
                  <PassReset show={modalShow} onHide={modalClose} t={t} />
                </Col>
                <Col sm={12} className="text-center text-uppercase mt-5 mb-4">
                  <Button size="lg" onClick={handleLogIn}>
                    {t('login.form.loginBtn')}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col className="text-center">
            <p>
              <b>
                {t('login.form.noAccount')}
                {' '}
                <Link to="/signup" className="text-wevedo">
                  {t('login.form.signUp')}
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
  <Modal {...props} size="md" aria-labelledby="Password reset" centered className="global-modal">
    <Modal.Body className="p-0">
      <Row>
        <span className="modal-close-btn" onClick={props.onHide}>
          <i className="fas fa-times fa-2x" />
        </span>
        <Col sm={12} className="p-5 text-center">
          <h5 className="text-uppercase">{props.t('login.passResetModal.title')}</h5>
          <hr />
          <p className="mb-0">
            {props.t('login.passResetModal.pOne')}
            <br />
            {props.t('login.passResetModal.pTwo')}
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(Login);
