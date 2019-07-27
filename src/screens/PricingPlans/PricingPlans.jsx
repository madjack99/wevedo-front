import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import './PricingPlans.scss';

import Logo from '../../assets/images/symbol.png';

const ScreensPricingPlans = ({ t }) => (
  <React.Fragment>
    <Container className="pricing">
      <Row className="mt-5">
        <Col>
          <a href="/">
            <img src={Logo} width="130px" alt="wevedo" />
          </a>
        </Col>
      </Row>
      <Row className="mt-5 text-center align-items-center">
        <Col sm={8} className="mr-auto ml-auto">
          <h2 className="text-uppercase">{t('pricing.mainTitle')}</h2>
          <hr />
          <p>{t('pricing.mainText')}</p>
        </Col>
      </Row>
      <Row className="pricing-boxes text-center align-items-center">
        <Col md={4} className="p-3">
          <div>
            <h5 className="text-wevedo">
              <b>{t('pricing.standard.title')}</b>
            </h5>
            <h2 className="m-4">
              <small>{t('pricing.dollarSign')}</small>
              <span>15</span>
            </h2>
            <p>
              <i className="fa fa-check" />
              {t('pricing.standard.pOne')}
            </p>
            <p className="mb-4">
              <i className="fa fa-check" />
              {t('pricing.standard.pTwo')}
            </p>
            <a href="/pricing" className="text-uppercase text-wevedo">
              {t('pricing.standard.getStarted')}
            </a>
          </div>
        </Col>
        <Col md={4} className="p-3">
          <div className="pricing-boxes__enhaced">
            <h5 className="text-wevedo">
              <b>{t('pricing.enhanced.title')}</b>
            </h5>
            <h2 className="m-4">
              <small>{t('pricing.dollarSign')}</small>
              <span>85</span>
            </h2>
            <p>
              <i className="fa fa-check" />
              {t('pricing.enhanced.pOne')}
            </p>
            <p className="mb-4">
              <i className="fa fa-check" />
              {t('pricing.enhanced.pTwo')}
            </p>
            <a href="/pricing" className="text-uppercase">
              {t('pricing.enhanced.getStarted')}
              <i className="fa fa-arrow-right" />
            </a>
          </div>
        </Col>
        <Col md={4} className="p-3">
          <div>
            <h5 className="text-wevedo">
              <b>{t('pricing.premium.title')}</b>
            </h5>
            <h2 className="m-4">
              <small>{t('pricing.dollarSign')}</small>
              <span>100</span>
            </h2>
            <p>
              <i className="fa fa-check" />
              {t('pricing.enhanced.pOne')}
            </p>
            <p className="mb-4">
              <i className="fa fa-check" />
              {t('pricing.enhanced.pTwo')}
            </p>
            <a href="/pricing" className="text-uppercase text-wevedo">
              {t('pricing.enhanced.getStarted')}
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default withTranslation('common')(ScreensPricingPlans);
