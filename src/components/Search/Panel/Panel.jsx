import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { Row, Col, Form, Button } from 'react-bootstrap';

const SearchPanel = ({ title, categories, t, history }) => {
  const [providerCategory, setProviderCategory] = useState('');
  const [providerTitle, setProviderTitle] = useState('');
  const handleChange = e => {
    setProviderTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (providerCategory !== '' && providerTitle !== '') {
      history.push(`/suppliers/${providerCategory}?supplier=${providerTitle}`);
    }
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
                  <Form.Control
                    as="select"
                    onChange={e => setProviderCategory(e.target.value)}
                    value={providerCategory}
                  >
                    <option disabled />
                    {categories.map(({ _id, name }) => (
                      <option key={_id} style={{ color: 'black' }}>
                        {name}
                      </option>
                    ))}
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

const mapStateToProps = ({ categoryList }) => categoryList;

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
  withRouter,
)(SearchPanel);
