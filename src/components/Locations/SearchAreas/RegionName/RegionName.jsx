import React, { useState } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

import * as UK from '../../../../UK.json';

function LocationsSearchAreasRegionName() {
  const [country, setCountry] = useState('England');
  const countriesObj = UK.default.UK;
  const countries = Object.keys(UK.default.UK);

  const displayRegionNameInCols = selectedCountry => {
    const regionNames = Object.keys(countriesObj[selectedCountry]);
    const firstCol = Math.floor(regionNames.length / 3);
    const secondCol = Math.floor((regionNames.length / 3) * 2);
    console.log(regionNames.length, firstCol, secondCol);
    return (
      <Row>
        <Col xs={6} md={4}>
          {regionNames.slice(0, firstCol).map(regionName => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?regionName=${regionName}`}>
                {regionName}
              </Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {regionNames.slice(firstCol, secondCol).map(regionName => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?regionName=${regionName}`}>
                {regionName}
              </Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {regionNames.slice(secondCol).map(regionName => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?regionName=${regionName}`}>
                {regionName}
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
          Choose region
        </div>
        {displayRegionNameInCols(country)}
      </Container>
    </div>
  );
}

export default LocationsSearchAreasRegionName;
