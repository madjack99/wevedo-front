import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function PopularSearches({ t }) {
  return (
    <div className="popularsearches">
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
    </div>
  );
}

export default withTranslation('common')(PopularSearches);
