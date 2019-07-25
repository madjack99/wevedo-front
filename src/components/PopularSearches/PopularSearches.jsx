import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import serches1 from '../../assets/images/serches1.png';
import serches2 from '../../assets/images/serches2.png';
import serches3 from '../../assets/images/serches3.png';
import serches4 from '../../assets/images/serches4.png';

function PopularSearches({ t }) {
  return (
    <div className="popularserches">
      <Container className="pb-5">
        <Row>
          <Col sm={6}>
            <h3 className="text-uppercase">{t('popularSearches.title')}</h3>
            <p className="d-none d-sm-block">{t('popularSearches.text')}</p>
          </Col>
          <Col sm={6}>
            <Row>
              <Col>
                <ul>
                  <li>{t('popularSearches.essex')}</li>
                  <li>{t('popularSearches.hertforshire')}</li>
                  <li>{t('popularSearches.westMidlands')}</li>
                  <li>{t('popularSearches.hampshire')}</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>{t('popularSearches.essex')}</li>
                  <li>{t('popularSearches.hertforshire')}</li>
                  <li>{t('popularSearches.westMidlands')}</li>
                  <li>{t('popularSearches.hampshire')}</li>
                </ul>
              </Col>
              <Col className="d-none d-sm-block">
                <ul>
                  <li>{t('popularSearches.essex')}</li>
                  <li>{t('popularSearches.hertforshire')}</li>
                  <li>{t('popularSearches.westMidlands')}</li>
                  <li>{t('popularSearches.hampshire')}</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Row className="m-0">
        <Col xs={3} className="p-0 overlayed">
          <img src={serches1} alt="" />
          <div className="overlay">
            <i className="fa fa-search fa-2x" />
          </div>
        </Col>
        <Col xs={3} className="p-0 overlayed">
          <img src={serches2} alt="" />
          <div className="overlay">
            <i className="fa fa-search fa-2x" />
          </div>
        </Col>
        <Col xs={3} className="p-0 overlayed">
          <img src={serches3} alt="" />
          <div className="overlay">
            <i className="fa fa-search fa-2x" />
          </div>
        </Col>
        <Col xs={3} className="p-0 overlayed">
          <img src={serches4} alt="" />
          <div className="overlay">
            <i className="fa fa-search fa-2x" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default withTranslation('common')(PopularSearches);
