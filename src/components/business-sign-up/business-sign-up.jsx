import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import Logo from '../../assets/images/symbol.png';

function BusinessSignup({ t }) {
  return (
    <Row className="w-100 h-100 m-0 login">
      <Col sm={6} className="login-img login-img__business">
        <div className="login-img-text p-5">
          <h1 className="mb-0">{t('business-signup.jumbotron.largeTitle')}</h1>
          <h2>{t('business-signup.jumbotron.smallTitle')}</h2>
          <hr className="hr-sm m-0 mt-4 mb-4" />
          <p className="pr-5">
            {' '}
            {t('business-signup.jumbotron.text')}
          </p>
        </div>
      </Col>
      <Col sm={6} className="login-form">
        <Row>
          <Col sm={12} className="mb-5">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </Col>
          <Col sm={12} className="mt-4">
            <Form className="login-form-scrollable">
              <Row>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      type=""
                      placeholder={t('business-signup.form.usernamePlaceholder')}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      type=""
                      placeholder={t('business-signup.form.passwordPlaceholder')}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      type=""
                      placeholder={t('business-signup.form.passwordConfirmationPlaceholder')}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      type=""
                      placeholder={t('business-signup.form.businessNamePlaceholder')}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-5">
                  <Form.Control as="select">
                    <option>{t('business-signup.form.categoryPlaceholder')}</option>
                    <option>...</option>
                  </Form.Control>
                </Col>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      type=""
                      placeholder={t('business-signup.form.websitePlaceholder')}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      type=""
                      placeholder={t('business-signup.form.emailPlaceholder')}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      type=""
                      placeholder={t('business-signup.form.numberPlaceholder')}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      type=""
                      placeholder={t('business-signup.form.postcodePlaceholder')}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      type=""
                      placeholder={t('business-signup.form.addressPlaceholder')}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control type="" placeholder={t('business-signup.form.cityPlaceholder')} />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      type=""
                      placeholder={t('business-signup.form.countryPlaceholder')}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={12} className="text-center text-uppercase mt-2 mb-4">
            <Button href="/businesssignup-step1" size="lg">
              {t('business-signup.form.nextStepBtn')}
              <i className="fa fa-arrow-right" />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default withTranslation('common')(BusinessSignup);
