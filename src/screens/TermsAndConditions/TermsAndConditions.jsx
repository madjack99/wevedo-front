import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import backgroundImage from '../../assets/images/common-header.png';

import ScreensLayoutsMain from '../Layouts/Main';
import eula from './wevedo_eula.pdf';

const TermsAndConditions = ({ t }) => (
  <ScreensLayoutsMain
    title={t('terms.jumbotron')}
    backgroundImage={backgroundImage}
  >
    <Container className="mt-5 mb-5">
      <embed src={eula} type="application/pdf" width="100%" height="500px" />
      {/* <Row className="justify-content-center mt-5 mb-5">
        <Col sm={8} className="text-center mb-3">
          <h4 className="text-uppercase">{t('terms.mainTitle')}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="mb-5">
          <h5 className="text-uppercase text-proxima-bold">
            {t('terms.firstText.titleOne')}
          </h5>
          <p>{t('terms.firstText.pOne')}</p>
          <p>{t('terms.firstText.pTwo')}</p>
        </Col>
        <Col sm={12} className="mb-5">
          <h5 className="text-uppercase text-proxima-bold">
            {t('terms.secondText.titleOne')}
          </h5>
          <p>{t('terms.secondText.pOne')}</p>
          <p>{t('terms.secondText.pTwo')}</p>
        </Col>
      </Row> */}
    </Container>
  </ScreensLayoutsMain>
);

export default withTranslation('common')(TermsAndConditions);
