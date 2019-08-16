import React from 'react';

import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Beauty from '../../../assets/images/w-beauty.png';
import Cakes from '../../../assets/images/w-cakes.png';
import Decoration from '../../../assets/images/w-decoration.png';
import Florist from '../../../assets/images/w-florist.png';
import Music from '../../../assets/images/w-music.png';
import Rings from '../../../assets/images/w-rings.png';

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
            <Link to="/suppliers/Beauty">
              <img src={Beauty} alt="Beauty" />
              <p>Beauty</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Cake">
              <img src={Cakes} alt="Cake" />
              <p>Cake</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Decoration">
              <img src={Decoration} alt="Decoration" />
              <p>Decoration</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Boutique">
              <img src={Florist} alt="Boutique" />
              <p>Boutique</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Entertainment">
              <img src={Music} alt="Entertainment" />
              <p>Entertainment</p>
            </Link>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <Link to="/suppliers/Jewelry">
              <img src={Rings} alt="Jewelry" />
              <p>Jewelry</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </ScreensLayoutMain>
  );
}
