import React from 'react';
import {
  Row, Container, Col, Form, Button,
} from 'react-bootstrap';

import PopularSearches from '../popularSearches';
import Beauty from '../../../assets/images/w-beauty.png';
import Cakes from '../../../assets/images/w-cakes.png';
import Decoration from '../../../assets/images/w-decoration.png';
import Florist from '../../../assets/images/w-florist.png';
import Music from '../../../assets/images/w-music.png';
import Rings from '../../../assets/images/w-rings.png';

export default function WeddingSuppliers() {
  return (
    <React.Fragment>
      <div className="section section-header-full wedding-suppliers">
        <Container className="h-100 w-100 align-items-center">
          <Row className="h-100 align-items-center">
            <Col sm={12} className="text-center text-uppercase">
              <h1>
                Wedding
                <br />
                Suppliers
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Row className="findseparator findseparator-sm d-flex align-items-center text-center">
        <Col sm={12}>
          <Form>
            <Form.Row>
              <Col className="boxed-form">
                <Row>
                  <Col>
                    <Form.Control as="select">
                      <option>Category</option>
                      <option>...</option>
                    </Form.Control>
                  </Col>
                  <div className="divider" />
                  <Col>
                    <Form.Control placeholder="Location" />
                  </Col>
                </Row>
              </Col>
              <Col sm={3}>
                <Button variant="light" size="lg">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
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
      <PopularSearches />
    </React.Fragment>
  );
}
