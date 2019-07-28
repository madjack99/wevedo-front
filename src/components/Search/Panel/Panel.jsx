import React from 'react';
import { withTranslation } from 'react-i18next';

import { Row, Col, Form, Button } from 'react-bootstrap';

const SearchPanel = ({ t }) => (
  <Row className="findseparator findseparator-sm align-items-center text-center d-none d-sm-flex mb-5">
    <Col sm={12}>
      <Form>
        <Form.Row>
          <Col className="boxed-form">
            <Row>
              <Col>
                <Form.Control as="select">
                  <option>{t('home.findForm.category')}</option>
                  <option>{t('home.findForm.options')}</option>
                </Form.Control>
              </Col>
              <div className="divider" />
              <Col>
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
