import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './pricing.scss';

import Logo from '../../assets/images/symbol.png';

const Pricing = () => (
  <React.Fragment>
    <Container className="pricing">
      <Row className="mt-5">
        <Col><a href="/"><img src={Logo} width="130px" alt="wevedo" /></a></Col>
      </Row>
      <Row className="mt-5 text-center align-items-center">
        <Col sm={8} className="mr-auto ml-auto">
          <h2 className="text-uppercase">Pricing Plans</h2>
          <hr />
          <p>
            Sign up to the the UK&apos;s most popular wedding planning web site and
            get access to more than 100,000 registered wedding couples.
            Start growing your wedding business today.
          </p>
        </Col>
      </Row>
      <Row className="pricing-boxes text-center align-items-center">
        <Col md={4} className="p-3">
          <div>
            <h5 className="text-wevedo"><b>Standard</b></h5>
            <h2 className="m-4">
              <small>$</small>
              <span>15</span>
            </h2>
            <p>
              <i className="fa fa-check" />
              You will feature above Standard listings
            </p>
            <p className="mb-4">
              <i className="fa fa-check" />
              3x more couples will view your listing than the Standard listing
            </p>
            <a href="/pricing" className="text-uppercase text-wevedo">Get Started</a>
          </div>
        </Col>
        <Col md={4} className="p-3">
          <div className="pricing-boxes__enhaced">
            <h5 className="text-wevedo"><b>Enhaced</b></h5>
            <h2 className="m-4">
              <small>$</small>
              <span>85</span>
            </h2>
            <p>
              <i className="fa fa-check" />
              You will feature above Standard listings
            </p>
            <p className="mb-4">
              <i className="fa fa-check" />
              3x more couples will view your listing than the Standard listing
            </p>
            <a href="/pricing" className="text-uppercase">
              Get Started
              <i className="fa fa-arrow-right" />
            </a>
          </div>
        </Col>
        <Col md={4} className="p-3">
          <div>
            <h5 className="text-wevedo"><b>Premium</b></h5>
            <h2 className="m-4">
              <small>$</small>
              <span>100</span>
            </h2>
            <p>
              <i className="fa fa-check" />
              You will feature above Standard listings
            </p>
            <p className="mb-4">
              <i className="fa fa-check" />
              3x more couples will view your listing than the Standard listing
            </p>
            <a href="/pricing" className="text-uppercase text-wevedo">Get Started</a>
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Pricing;
