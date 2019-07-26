import React from 'react';
import { withTranslation } from 'react-i18next';

import { Row, Container, Col } from 'react-bootstrap';

import backgroundImage from '../../assets/images/common-header.png';

import ScreensLayoutMain from '../Layouts/Main';

const PrivacyPolicy = ({ t }) => (
  <ScreensLayoutMain
    title={t('privacy.jumbotron')}
    backgroundImage={backgroundImage}
  >
    <Container className="mt-2 mb-2 mt-md-5 mb-md-5">
      <Row className="justify-content-center mt-5 mb-5">
        <Col sm={8} className="text-center mb-0 mb-md-3">
          <h4 className="text-uppercase">{t('privacy.mainTitle')}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="mb-5">
          <h5 className="text-uppercase text-proxima-bold">
            {t('privacy.firstText.titleOne')}
          </h5>
          <p className="text-muted">{t('privacy.firstText.pOne')}</p>

          <p className="text-muted">{t('privacy.firstText.pTwo')}</p>
        </Col>
        <Col sm={12} className="mb-5">
          <h5 className="text-uppercase text-proxima-bold">
            {t('privacy.secondText.titleOne')}
          </h5>
          <p className="text-muted">{t('privacy.secondText.pOne')}</p>

          <p className="text-muted">{t('privacy.secondText.pTwo')}</p>
        </Col>
      </Row>
    </Container>
  </ScreensLayoutMain>
);

export default withTranslation('common')(PrivacyPolicy);
