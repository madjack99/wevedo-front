import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import rn from 'random-number';
import { Link } from 'react-router-dom';

import countries from '../../countryLib';

function PopularSearches({ t }) {
  const UKCities = countries.GB.default.provinces;

  const randomNumbersArray = [];

  while (randomNumbersArray.length < 12) {
    const randomNumber = rn({ min: 0, max: UKCities.length, integer: true });
    if (randomNumbersArray.includes(randomNumber)) continue;
    else randomNumbersArray.push(randomNumber);
  }

  const randomCities = randomNumbersArray.map(number => UKCities[number]);
  const randomLinks = randomCities.map((city, index) => (
    <li key={index}>
      <Link to={`/suppliers/Venue?supplier=${city}`}>{city}</Link>
    </li>
  ));

  return (
    <div className="popularsearches">
      <Container className="pb-5">
        <Row>
          <Col sm={6}>
            <h3 className="text-uppercase">{t('popularSearches.title')}</h3>
            <p className="d-none d-sm-block">{t('popularSearches.text')}</p>
          </Col>
          <Col sm={6}>
            <Row>
              <Col>
                <ul>{randomLinks.slice(0, 4)}</ul>
              </Col>
              <Col>
                <ul>{randomLinks.slice(4, 8)}</ul>
              </Col>
              <Col className="d-none d-sm-block">
                <ul>{randomLinks.slice(8)}</ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withTranslation('common')(PopularSearches);
