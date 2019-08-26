import React, { useState } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import '../CityCountyRegionStyles/CityCountyRegionStyles.scss';

import * as UK from '../../../../countryLib/UK.json';

function LocationsSearchAreasCity() {
  const [stateCountry, setStateCountry] = useState('England');
  const countriesObj = UK.default.UK;
  const countries = Object.keys(UK.default.UK);

  const displayCityInCols = selectedCountry => {
    const regionNames = Object.keys(countriesObj[selectedCountry]);
    let cities = [];
    regionNames.forEach(regionName =>
      Object.keys(countriesObj[selectedCountry][regionName]).forEach(
        county =>
          (cities = cities.concat(
            countriesObj[selectedCountry][regionName][county],
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
          <span className="areaSelect">Choose city</span>
        </div>
        {displayCityInCols(stateCountry)}
      </Container>
    </div>
  );
}

export default LocationsSearchAreasCity;
