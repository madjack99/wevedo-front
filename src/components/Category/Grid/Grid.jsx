import React from 'react';
import { withTranslation } from 'react-i18next';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import venue from '../../../assets/images/w-venue.png';
import media from '../../../assets/images/w-media.png';
import beauty from '../../../assets/images/w-beauty.png';
import catering from '../../../assets/images/w-catering.png';
import entertainment from '../../../assets/images/w-music.png';
import boutique from '../../../assets/images/w-florist.png';
import decoration from '../../../assets/images/w-decoration.png';
import cake from '../../../assets/images/w-cakes.png';
import transport from '../../../assets/images/w-transport.png';
import jewelry from '../../../assets/images/w-rings.png';
import stationery from '../../../assets/images/w-stationery.png';
import honeymoon from '../../../assets/images/w-honeymoon.png';

const CatergoryGrid = ({ t }) => (
  <Row className="wedding-suppliers-grid">
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Venue">
          <img src={venue} alt="Venue" />
          <p>{t('home.categoryGrid.venue')}</p>
        </Link>
      </div>
    </Col>
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Media">
          <img src={media} alt="Media" />
          <p>{t('home.categoryGrid.media')}</p>
        </Link>
      </div>
    </Col>
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Beauty">
          <img src={beauty} alt="Beauty" />
          <p>{t('home.categoryGrid.beauty')}</p>
        </Link>
      </div>
    </Col>
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Catering">
          <img src={catering} alt="Catering" />
          <p>{t('home.categoryGrid.catering')}</p>
        </Link>
      </div>
    </Col>
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Entertainment">
          <img src={entertainment} alt="Entertainment" />
          <p>{t('home.categoryGrid.entertainment')}</p>
        </Link>
      </div>
    </Col>
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Boutique">
          <img src={boutique} alt="Boutique" />
          <p>{t('home.categoryGrid.boutique')}</p>
        </Link>
      </div>
    </Col>
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Decoration">
          <img src={decoration} alt="Decoration" />
          <p>{t('home.categoryGrid.decoration')}</p>
        </Link>
      </div>
    </Col>
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Cake">
          <img src={cake} alt="Cake" />
          <p>{t('home.categoryGrid.cake')}</p>
        </Link>
      </div>
    </Col>
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Transport">
          <img src={transport} alt="Transport" />
          <p>{t('home.categoryGrid.transport')}</p>
        </Link>
      </div>
    </Col>
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Jewelry">
          <img src={jewelry} alt="Jewelry" />
          <p>{t('home.categoryGrid.jewelry')}</p>
        </Link>
      </div>
    </Col>
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Stationery">
          <img src={stationery} alt="Stationery" />
          <p>{t('home.categoryGrid.stationery')}</p>
        </Link>
      </div>
    </Col>
    <Col sm={4} className="wedding-suppliers-grid__child">
      <div>
        <Link to="/suppliers/Honeymoon">
          <img src={honeymoon} alt="Honeymoon" />
          <p>{t('home.categoryGrid.honeymoon')}</p>
        </Link>
      </div>
    </Col>
  </Row>
);

export default withTranslation('common')(CatergoryGrid);
