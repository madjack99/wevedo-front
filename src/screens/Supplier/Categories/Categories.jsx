import React from 'react';

import { Row, Container, Col } from 'react-bootstrap';
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

import backgroundImage from '../../../assets/images/wedding-suppliers-bg.png';

import ScreensLayoutMain from '../../Layouts/Main';
import SearchPanel from '../../../components/Search/Panel';

export default function ScreensSupplierCategories() {
  return (
    <ScreensLayoutMain
      title="Wedding Suppliers"
      backgroundImage={backgroundImage}
    >
      <SearchPanel />
      <Container className="mt-5 mb-5 pt-5 pb-5 wedding-suppliers-grid">
        <Row className="mb-5">
          <Col>
            <h2 className="text-uppercase text-center">Supplier by category</h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Venue">
              <img src={venue} alt="Venue" />
              <p>Venue</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Media">
              <img src={media} alt="Media" />
              <p>Media</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Beauty">
              <img src={beauty} alt="Beauty" />
              <p>Beauty</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Catering">
              <img src={catering} alt="Catering" />
              <p>Catering</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Entertainment">
              <img src={entertainment} alt="Entertainment" />
              <p>Entertainment</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Boutique">
              <img src={boutique} alt="Boutique" />
              <p>Boutique</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Decoration">
              <img src={decoration} alt="Decoration" />
              <p>Decoration</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Cake">
              <img src={cake} alt="Cake" />
              <p>Cake</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Transport">
              <img src={transport} alt="Transport" />
              <p>Transport</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Jewelry">
              <img src={jewelry} alt="Jewelry" />
              <p>Jewelry</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Stationery">
              <img src={stationery} alt="Stationery" />
              <p>Stationery</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Honeymoon">
              <img src={honeymoon} alt="Honeymoon" />
              <p>Honeymoon</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </ScreensLayoutMain>
  );
}
