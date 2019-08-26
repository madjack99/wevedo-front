import React, { useState } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import '../CityCountyRegionStyles/CityCountyRegionStyles.scss';

import * as UK from '../../../../countryLib/UK.json';

function LocationsSearchAreasCounty() {
  const [stateCountry, setStateCountry] = useState('England');
  const countriesObj = UK.default.UK;
  const countries = Object.keys(UK.default.UK);

  const displayCountyInCols = selectedCountry => {
    const regionNames = Object.keys(countriesObj[selectedCountry]);
    let counties = [];
    regionNames.forEach(
      regionName =>
        (counties = counties.concat(
          Object.keys(countriesObj[selectedCountry][regionName]),
        )),
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
        <div className="font-weight-bold mt-3 mb-2 text-uppercase">
          <span className="areaSelect">Choose county</span>
        </div>
        {displayCountyInCols(stateCountry)}
      </Container>
    </div>
  );
}

export default LocationsSearchAreasCounty;
