import React, { useState } from 'react';
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
  getCities,
} from '../../../../helpers';

function LocationsSearchAreasCity({ user }) {
  const [stateCountry, setStateCountry] = useState('England');

  const displayCityInCols = selectedCountry => {
    const regionNames = getRegionNames(user && user.appearInCountries)(
      selectedCountry,
    );
    let cities = [];
    regionNames.forEach(regionName =>
      getCounties(user && user.appearInCountries)(
        selectedCountry,
        regionName,
      ).forEach(
        county =>
          (cities = cities.concat(
            getCities(user && user.appearInCountries)(
              selectedCountry,
              regionName,
              county,
            ),
          )),
      ),
    );
    cities.sort();
    const firstCol = Math.floor(cities.length / 3);
    const secondCol = Math.floor((cities.length / 3) * 2);
    return (
      <Row>
        <Col xs={6} md={4}>
          {cities.slice(0, firstCol).map(city => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?city=${city}`}>
                <span className="areaTitle">{city}</span>
              </Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {cities.slice(firstCol, secondCol).map(city => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?city=${city}`}>
                <span className="areaTitle">{city}</span>
              </Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {cities.slice(secondCol).map(city => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?city=${city}`}>
                <span className="areaTitle">{city}</span>
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
          {getCountries(user && user.appearInCountries).map(country => (
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
        <div className="font-weight-bold mt-3 mb-3 text-uppercase">
          <span className="areaSelect">Choose city</span>
        </div>
        {displayCityInCols(stateCountry)}
      </Container>
    </div>
  );
}

const mapStateToProps = ({ userData }) => userData;

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
)(LocationsSearchAreasCity);
