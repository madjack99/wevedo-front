import React from 'react';
import { withTranslation } from 'react-i18next';

import { Row, Col, Form, Button } from 'react-bootstrap';

const SearchPanel = ({ t }) => (
  <Row className="findseparator d-flex align-items-center text-center">
    <Col sm={12}>
      <h1>{t('home.findForm.title')}</h1>
      <Form>
        <Form.Row>
          <Col className="boxed-form">
            <Row>
              <Col sm={6} md>
                <Form.Control as="select">
                  <option>{t('home.findForm.category')}</option>
                  <option>{t('home.findForm.options')}</option>
                </Form.Control>
              </Col>
              <div className="divider d-none d-sm-none d-md-inline" />
              <Col sm={6} md>
                <Form.Control
                  placeholder={t('home.findForm.locationPlaceholder')}
                />
              </Col>
            </Row>
          </Col>
          <Col sm={3}>
            <Button variant="light" size="lg">
              {t('home.findForm.searchBtn')}
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Col>
  </Row>
);

export default withTranslation('common')(SearchPanel);
