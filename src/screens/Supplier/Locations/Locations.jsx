import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';

import weddingdress from '../../../assets/images/wedding dress.png';
import musicphoto from '../../../assets/images/music.png';
import florist from '../../../assets/images/florist.png';
import photography from '../../../assets/images/photography.png';
import decoration from '../../../assets/images/decoration.png';

import ScreensLayoutMain from '../../Layouts/Main';
import backgroundImage from '../../../assets/images/venues-bg.png';
import Locations from '../../../components/Locations';

function ScreensSupplierLocations({ match }) {
  return (
    <ScreensLayoutMain title="Locations" backgroundImage={backgroundImage}>
      <Locations match={match} />
      <Container className="howitworks d-none d-md-block mt-5">
        <Row className="howitworks-img mt-5">
          <Col md={5}>
            <Image src={weddingdress} alt="wedding-dress" />
          </Col>
          <Col md={4}>
            <Row>
              <Col sm={12} className="mb-4">
                <Image src={musicphoto} alt="music-photo" />
              </Col>
              <Col sm={12}>
                <Image src={florist} alt="florist-photo" />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col sm={12} className="mb-4">
                <Image src={photography} alt="photo-icon" />
              </Col>
              <Col sm={12}>
                <Image src={decoration} alt="decoration-photo" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </ScreensLayoutMain>
  );
}

export default ScreensSupplierLocations;
