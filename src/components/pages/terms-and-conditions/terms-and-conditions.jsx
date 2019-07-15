import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import PopularSearches from '../popularSearches';
import './terms-and-conditions.scss';

const TermsAndConditions = ({ t }) => (
  <React.Fragment>
    <div className="section section-header-half terms-and-conditions">
      <Container className="h-100 w-100 align-items-center">
        <Row className="h-100 align-items-center">
          <Col sm={12} className="text-center text-uppercase">
            <h1>{t('terms.jumbotron')}</h1>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mt-5 mb-5">
      <Row className="justify-content-center mt-5 mb-5">
        <Col sm={8} className="text-center mb-3">
          <h4 className="text-uppercase">{t('terms.mainTitle')}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="mb-5">
          <h5 className="text-uppercase text-proxima-bold">{t('terms.firstText.titleOne')}</h5>
          <p>{t('terms.firstText.pOne')}</p>
          <p>{t('terms.firstText.pTwo')}</p>
        </Col>
        <Col sm={12} className="mb-5">
          <h5 className="text-uppercase text-proxima-bold">{t('terms.secondText.titleOne')}</h5>
          <p>{t('terms.secondText.pOne')}</p>
          <p>{t('terms.secondText.pTwo')}</p>
        </Col>
      </Row>
    </Container>

    <PopularSearches />
  </React.Fragment>
);

export default withTranslation('common')(TermsAndConditions);
