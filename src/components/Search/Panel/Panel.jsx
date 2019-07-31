import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

import { Row, Col, Form, Button } from 'react-bootstrap';

const SearchPanel = ({ title, t }) => {
  const [providerTitle, setProviderTitle] = useState('');
  const handleChange = e => {
    setProviderTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitting');
    setProviderTitle('');
  };
  return (
    <Row
      className={
        title
          ? 'findseparator d-flex align-items-center text-center'
          : 'findseparator findseparator-sm align-items-center text-center d-none d-sm-flex mb-5'
      }
    >
      <Col sm={12}>
        {title ? <h1>Find your best wedding supplier by Location</h1> : null}
        <Form onSubmit={handleSubmit}>
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
                    placeholder={t('home.findForm.providerTitlePlaceholder')}
                    onChange={handleChange}
                    value={providerTitle}
                  />
                </Col>
              </Row>
            </Col>
            <Col sm={3}>
              <Button variant="light" size="lg" type="submint">
                {t('home.findForm.searchBtn')}
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
};

export default withTranslation('common')(SearchPanel);
