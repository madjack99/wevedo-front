import React, { useState } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

import * as UK from '../../../../UK.json';

function LocationsSearchAreasCounty() {
  const [country, setCountry] = useState('England');
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
    const firstCol = Math.floor(counties.length / 3);
    const secondCol = Math.floor((counties.length / 3) * 2);
    console.log(counties.length, firstCol, secondCol);
    return (
      <Row>
        <Col xs={6} md={4}>
          {counties.slice(0, firstCol).map(county => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?county=${county}`}>{county}</Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {counties.slice(firstCol, secondCol).map(county => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?county=${county}`}>{county}</Link>
            </div>
          ))}
        </Col>
        <Col xs={6} md={4}>
          {counties.slice(secondCol).map(county => (
            <div key={uniqid()} className="p-1">
              <Link to={`/suppliers/Venue?county=${county}`}>{county}</Link>
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
          Choose county
        </div>
        {displayCountyInCols(country)}
      </Container>
    </div>
  );
}

export default LocationsSearchAreasCounty;
