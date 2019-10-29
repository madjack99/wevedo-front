import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import { Row, Col, Form, Button } from 'react-bootstrap';

import {
  getCountries,
  getRegionNames,
  showIpDetectedOrUserSelectedCountry,
} from '../../../helpers';

const SearchPanel = ({
  title,
  categories,
  user,
  t,
  history,
  supplierLocationQuery,
  ipDetectedCountry,
  userSelectedCountry,
  onSearch = () => {},
}) => {
  const calculatedCountry = showIpDetectedOrUserSelectedCountry(
    ipDetectedCountry,
    userSelectedCountry,
  );
  const countries = getCountries(calculatedCountry);
  let allRegionNames = [];
  countries.forEach(country => {
    const countryRegionNames = getRegionNames(country);
    allRegionNames = allRegionNames.concat(countryRegionNames);
  });

  const [supplierCategory, setSupplierCategory] = useState(
    t('home.findForm.venue'),
  );
  const [supplierLocation, setSupplierLocation] = useState(
    t('home.findForm.location'),
  );
  const handleSubmit = e => {
    e.preventDefault();
    if (supplierCategory !== '' && supplierLocation !== '') {
      history.push(
        `/suppliers/${supplierCategory}?regionName=${supplierLocation}`,
      );
    }
    onSearch();
  };

  // as the state depends on the incoming supplierLocationQuery prop
  // (for 'PopularSearches') coming from 'FilteredList' and
  // which is set as a value for city select input
  // useEffect is used to prevent infinite rerender
  useEffect(() => {
    if (supplierLocationQuery && supplierLocationQuery.regionName) {
      setSupplierLocation(supplierLocationQuery.regionName);
    }
  }, [supplierLocationQuery]);

  return (
    <Row
      className={
        title
          ? 'findseparator d-flex align-items-center text-center'
          : 'findseparator findseparator-sm align-items-center text-center d-none d-sm-flex mb-5'
      }
    >
      <Col sm={12}>
        {title ? <h1>{t('home.findForm.title')}</h1> : null}
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
                      {t('home.findForm.category')}
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
                    type="text"
                    as="select"
                    onChange={e => setSupplierLocation(e.target.value)}
                    value={supplierLocation}
                  >
                    <option value={supplierLocation}>{supplierLocation}</option>
                    {supplierLocation !== 'All' && (
                      <option value="All">{t('home.findForm.all')}</option>
                    )}
                    {allRegionNames.map(regionName => (
                      <option key={uniqid()}>{regionName}</option>
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

const mapStateToProps = ({ categoryList, userData }) => ({
  ...categoryList,
  ...userData,
});

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
  withRouter,
)(SearchPanel);
