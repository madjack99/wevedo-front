import React, { useState } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

import * as UK from '../../../../UK.json';

function LocationsSearchAreasCity() {
  const [country, setCountry] = useState('England');
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
    console.log(cities.length, firstCol, secondCol);
    return (
      <Row>
        <Col xs={6} md={4}>
          {cities.slice(0, firstCol).map(city => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?city=${city}`}>{city}</Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {cities.slice(firstCol, secondCol).map(city => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?city=${city}`}>{city}</Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {cities.slice(secondCol).map(city => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?city=${city}`}>{city}</Link>
            </div>
          ))}
        </Col>
      </Row>
    );
  };

  return (
    <div>
      <Container className="pb-5 pt-3">
        <Nav variant="tabs" defaultActiveKey="England">
          {countries.map(country => (
            <Nav.Item key={uniqid()}>
              <Nav.Link eventKey={country} onClick={() => setCountry(country)}>
                <h6>{country}</h6>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <div className="font-weight-bold mt-2 mb-2 text-uppercase">
          Choose city
        </div>
        {displayCityInCols(country)}
      </Container>
    </div>
  );
}

export default LocationsSearchAreasCity;
