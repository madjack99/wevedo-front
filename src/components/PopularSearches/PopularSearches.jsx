import React, { useMemo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import rn from 'random-number';

import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClampLines from 'react-clamp-lines';

import {
  getCountries,
  getRegionNames,
  showIpDetectedOrUserSelectedCountry,
} from '../../helpers';

function getRandomLinks(user, countries) {
  let allRegionNames = [];
  countries.forEach(country => {
    const countryRegionNames = getRegionNames(country);
    allRegionNames = allRegionNames.concat(countryRegionNames);
  });
  const randomNumbersArray = [];
  const randomLinks = [];
  while (randomNumbersArray.length < Math.min(12, allRegionNames.length)) {
    const randomNumber = rn({
      min: 0,
      max: allRegionNames.length - 1,
      integer: true,
    });
    if (randomNumbersArray.includes(randomNumber)) continue;
    else {
      const randomRegionName = allRegionNames[randomNumber];
      randomLinks.push(
        <li key={randomNumber}>
          <Link
            to={`/suppliers/Venue?regionName=${randomRegionName}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <ClampLines
              text={randomRegionName}
              id={randomNumber}
              lines={1}
              ellipsis="..."
              innerElement="p"
              buttons={false}
            />
          </Link>
        </li>,
      );
      randomNumbersArray.push(randomNumber);
    }
  }
  return randomLinks;
}

function PopularSearches({ user, t, ipDetectedCountry, userSelectedCountry }) {
  const calculatedCountry = showIpDetectedOrUserSelectedCountry(
    ipDetectedCountry,
    userSelectedCountry,
  );
  const countries = getCountries(calculatedCountry);

  const randomLinks = useMemo(() => getRandomLinks(user, countries), [
    user,
    countries,
  ]);

  return (
    <div className="popularsearches">
      <Container className="pb-5">
        <Row>
          <Col sm={6}>
            <h3 className="text-uppercase">{t('popularSearches.title')}</h3>
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

const mapStateToProps = ({ userData }) => userData;

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
)(PopularSearches);
