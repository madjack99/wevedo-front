import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

import Beauty from '../../../assets/images/w-beauty.png';
import Cakes from '../../../assets/images/w-cakes.png';
import Decoration from '../../../assets/images/w-decoration.png';
import Florist from '../../../assets/images/w-florist.png';
import Music from '../../../assets/images/w-music.png';
import Rings from '../../../assets/images/w-rings.png';

import backgroundImage from '../../../assets/images/wedding-suppliers-bg.png';

import ScreensLayoutMain from '../../Layouts/Main';
import SearchPanel from '../../../components/SearchPanel';

export default function WeddingSuppliers() {
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
            <img src={Beauty} alt="Beauty" />
            <p>Beauty</p>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <img src={Cakes} alt="Cakes" />
            <p>Cakes</p>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <img src={Decoration} alt="Decoration" />
            <p>Decoration</p>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <img src={Florist} alt="Florist" />
            <p>Florist</p>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <img src={Music} alt="Music" />
            <p>Music</p>
          </Col>
          <Col sm={4} className="wedding-suppliers-grid__child">
            <img src={Rings} alt="Rings" />
            <p>Rings</p>
          </Col>
        </Row>
      </Container>
    </ScreensLayoutMain>
  );
}
