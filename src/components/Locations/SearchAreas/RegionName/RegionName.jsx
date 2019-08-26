import React, { useState } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import '../CityCountyRegionStyles/CityCountyRegionStyles.scss';

import * as UK from '../../../../countryLib/UK.json';

function LocationsSearchAreasRegionName() {
  const [stateCountry, setStateCountry] = useState('England');
  const countriesObj = UK.default.UK;
  const countries = Object.keys(UK.default.UK);

  const displayRegionNameInCols = selectedCountry => {
    const regionNames = Object.keys(countriesObj[selectedCountry]);
    const firstCol = Math.ceil(regionNames.length / 3);
    const secondCol = Math.ceil((regionNames.length / 3) * 2);
    regionNames.sort();
    return (
      <Row>
        <Col xs={6} md={4}>
          {regionNames.slice(0, firstCol).map(regionName => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?regionName=${regionName}`}>
                <span className="areaTitle">{regionName}</span>
              </Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {regionNames.slice(firstCol, secondCol).map(regionName => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?regionName=${regionName}`}>
                <span className="areaTitle">{regionName}</span>
              </Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {regionNames.slice(secondCol).map(regionName => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?regionName=${regionName}`}>
                <span className="areaTitle">{regionName}</span>
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
        <Nav>
          {countries.map(country => (
            <Nav.Item
              key={uniqid()}
              className={`navItem ${
                country === stateCountry ? 'active' : null
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
          <span className="areaSelect">Choose region</span>
        </div>
        {displayRegionNameInCols(stateCountry)}
      </Container>
    </div>
  );
}

export default LocationsSearchAreasRegionName;
