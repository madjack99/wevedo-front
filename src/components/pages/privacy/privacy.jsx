import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import PopularSearches from '../popularSearches';
import './privacy.scss';

const Privacy = ({ t }) => (
  <React.Fragment>
    <div className="section section-header-half privacy">
      <Container className="h-100 w-100 align-items-center">
        <Row className="h-100 align-items-center">
          <Col sm={12} className="text-center text-uppercase">
            <h1>{t('privacy.jumbotron')}</h1>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mt-5 mb-5">
      <Row className="justify-content-center mt-5 mb-5">
        <Col sm={8} className="text-center mb-3">
          <h4 className="text-uppercase">{t('privacy.mainTitle')}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="mb-5">
          <h5 className="text-uppercase text-proxima-bold">{t('privacy.firstText.titleOne')}</h5>
          <p>{t('privacy.firstText.pOne')}</p>
          <p>{t('privacy.firstText.pTwo')}</p>
        </Col>
        <Col sm={12} className="mb-5">
          <h5 className="text-uppercase text-proxima-bold">{t('privacy.secondText.titleOne')}</h5>
          <p>{t('privacy.secondText.pOne')}</p>

          <p>{t('privacy.secondText.pTwo')}</p>
        </Col>
      </Row>
    </Container>
    <PopularSearches />
  </React.Fragment>
);

export default withTranslation('common')(Privacy);
