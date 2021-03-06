import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import { Row, Container, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../CityCountyRegionStyles/CityCountyRegionStyles.scss';

import {
  getCountries,
  getRegionNames,
  getCounties,
  showIpDetectedOrUserSelectedCountry,
} from '../../../../helpers';

function LocationsSearchAreasCounty({
  t,
  ipDetectedCountry,
  userSelectedCountry,
}) {
  const [stateCountry, setStateCountry] = useState('England');

  const calculatedCountry = showIpDetectedOrUserSelectedCountry(
    ipDetectedCountry,
    userSelectedCountry,
  );

  useEffect(() => {
    if (calculatedCountry && calculatedCountry !== 'United Kingdom') {
      setStateCountry(calculatedCountry);
    } else {
      setStateCountry('England');
    }
  }, [calculatedCountry]);

  const displayCountyInCols = selectedCountry => {
    const regionNames = getRegionNames(selectedCountry);
    let counties = [];
    regionNames.forEach(
      regionName =>
        (counties = counties.concat(getCounties(selectedCountry, regionName))),
    );
    counties.sort();
    const firstCol = Math.ceil(counties.length / 3);
    const secondCol = Math.ceil((counties.length / 3) * 2);
    return (
      <Row>
        <Col xs={6} md={4}>
          {counties.slice(0, firstCol).map(county => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?county=${county}`}>
                <span className="areaTitle">{county}</span>
              </Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {counties.slice(firstCol, secondCol).map(county => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?county=${county}`}>
                <span className="areaTitle">{county}</span>
              </Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {counties.slice(secondCol).map(county => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?county=${county}`}>
                <span className="areaTitle">{county}</span>
              </Link>
            </div>
          ))}
        </Col>
      </Row>
    );
  };

  return (
    <div>
      <Container className="pb-5 pt-3">
        <Nav className="flex-column flex-md-row">
          {getCountries(calculatedCountry).map(country => (
            <Nav.Item
              key={uniqid()}
              className={`navItem mb-1 ${
                country === stateCountry ? 'activeLocationNavItem' : null
              }`}
            >
              <Nav.Link
                onClick={() => setStateCountry(country)}
                className="navLink"
              >
                <p className="navParagraph">{country}</p>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <div className="font-weight-bold mt-3 mb-2 text-uppercase">
          <span className="areaSelect">{t('header.chooseCounty')}</span>
        </div>
        {displayCountyInCols(stateCountry)}
      </Container>
    </div>
  );
}

const mapStateToProps = ({ userData }) => userData;

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
)(LocationsSearchAreasCounty);
