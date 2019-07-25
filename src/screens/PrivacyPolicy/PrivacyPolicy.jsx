import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

import backgroundImage from '../../assets/images/common-header.png';

import ScreensLayoutMain from '../Layouts/Main';
import Hero from '../../components/Hero';

const PrivacyPolicy = () => (
  <ScreensLayoutMain title="Privacy Policy" backgroundImage={backgroundImage}>
    <Container className="mt-2 mb-2 mt-md-5 mb-md-5">
      <Row className="justify-content-center mt-5 mb-5">
        <Col sm={8} className="text-center mb-0 mb-md-3">
          <h4 className="text-uppercase">Data protection policy</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="mb-5">
          <h5 className="text-uppercase text-proxima-bold">1. Controller</h5>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
        </Col>
        <Col sm={12} className="mb-5">
          <h5 className="text-uppercase text-proxima-bold">2. Personal data</h5>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
        </Col>
      </Row>
    </Container>
  </ScreensLayoutMain>
);

export default PrivacyPolicy;
