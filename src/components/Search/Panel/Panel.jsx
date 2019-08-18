import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { Row, Col, Form, Button } from 'react-bootstrap';

import countries from '../../../countryLib';

const SearchPanel = ({ title, categories, t, history }) => {
  const UKCities = countries.GB.default.provinces;

  const [supplierCategory, setSupplierCategory] = useState('Venue');
  const [supplierLocation, setSupplierLocation] = useState('Location');
  const handleSubmit = e => {
    e.preventDefault();
    if (supplierCategory !== '' && supplierLocation !== '') {
      history.push(
        `/suppliers/${supplierCategory}?supplier=${supplierLocation}`,
      );
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
                    onChange={e => setSupplierCategory(e.target.value)}
                    value={supplierCategory}
                  >
                    <option value="default" disabled>
                      Category
                    </option>
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
                    as="select"
                    onChange={e => setSupplierLocation(e.target.value)}
                    value={supplierLocation}
                  >
                    <option value="Location">Location</option>
                    <option value="All">All</option>
                    {UKCities.map((city, index) => (
                      <option key={index}>{city}</option>
                    ))}
                  </Form.Control>
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
