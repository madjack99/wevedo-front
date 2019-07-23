import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import {
  Row, Col, Form, Button,
} from 'react-bootstrap';

import './business-login.scss';

import Logo from '../../assets/images/symbol.png';

function BusinessLogin({ t }) {
  return (
    <Row className="w-100 m-0 login">
      <Col sm={6} className="login-img login-img__business">
        <div className="login-img-text p-5">
          <h1 className="mb-0">{t('business-login.jumbotron.largeTitle')}</h1>
          <h2>{t('business-login.jumbotron.smallTitle')}</h2>
          <hr className="hr-sm m-0 mt-4 mb-4" />
        </div>
      </Col>
      <Col sm={6} className="login-form">
        <Row>
          <Col sm={12} className="mb-5">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </Col>
          <Col sm={12} className="mt-4">
            <Form>
              <Row>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="username">
                    <Form.Control
                      type="email"
                      placeholder={t('business-login.form.emailPlaceholder')}
                      autoComplete="username"
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-3">
                  <Form.Group controlId="password">
                    <Form.Control
                      type="password"
                      placeholder={t('business-login.form.passwordPlaceholder')}
                      autoComplete="password"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Check label={t('business-login.form.rememberMeLabel')} />
                </Col>
                <Col sm={12} className="text-center text-uppercase mt-5 mb-4">
                  <Button href="/dashboard" size="lg">
                    {t('business-login.form.loginBtn')}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col className="text-center">
            <p>
              <b>
                {t('business-login.form.noAccount')}
                {' '}
                <Link to="/pricing" className="text-wevedo">
                  {t('business-login.form.signUp')}
                </Link>
              </b>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default withTranslation('common')(BusinessLogin);
