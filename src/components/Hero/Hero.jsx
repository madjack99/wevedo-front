import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';

import './Hero.scss';

const Hero = ({ title, subtitle, backgroundImage }) => (
  <div className="hero section section-header-half">
    <Image className="hero__background-image" src={backgroundImage} />
    <Container className="h-100 w-100 align-items-center">
      <Row className="h-100 align-items-center">
        <Col sm={12} className="text-center text-uppercase">
          <h4 className="hero__subtitle">{subtitle}</h4>
          <h1 className="hero__title mx-auto">{title}</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Hero;
