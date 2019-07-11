import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Container, Col, Form, Button, ButtonToolbar,
} from 'react-bootstrap';

import PopularSearches from '../popularSearches';
import './venues.scss';

import 'rc-slider/assets/index.css';
import { Range } from 'rc-slider';

import sampleImg from '../../../assets/images/sample-list-img.png';

const Venues = () => (
  <React.Fragment>
    <div className="section section-header-full venues">
      <Container className="h-100 w-100 align-items-center">
        <Row className="h-100 align-items-center">
          <Col sm={12} className="text-center text-uppercase">
            <h1>
              Wedding
              <br />
              {' '}
Venues
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
    <Container className="venues-results">
      <Row>
        <Col sm={4} className="results-filters">
          <Form>
            <div className="mb-5">
              <div className="mb-3">
                <b>Budget</b>
              </div>
              <Row>
                <Col sm={12}>
                  <Range min={0} max={20} defaultValue={[3, 10]} />
                </Col>
                <Col sm={12} className="mt-3">
                  <span className="text-muted">Price: </span>
                  $30 - $100
                </Col>
              </Row>
            </div>
            <div className="mb-5">
              <div className="mb-3">
                <b>Seated Dining Capacity</b>
              </div>
              <Row>
                <Col sm={12}>
                  <Range min={0} max={20} defaultValue={[3, 10]} />
                </Col>
                <Col sm={12} className="mt-3">
                  <span className="text-muted">Seated: </span>
                  30 - 100
                </Col>
              </Row>
            </div>
            <div className="mb-5">
              <div className="mb-3">
                <b>Venue Type</b>
              </div>
              <Form.Check label="Country House" />
              <Form.Check label="Barm" />
              <Form.Check label="Outdoor" />
              <Form.Check label="Attraction" />
            </div>
            <div className="mb-5">
              <div className="mb-3">
                <b>Venue Styles</b>
              </div>
              <Form.Check label="Classic" />
              <Form.Check label="Intimate" />
              <Form.Check label="Unusual" />
              <Form.Check label="Modern" />
            </div>
          </Form>
          <ButtonToolbar>
            <Button variant="primary" className="mr-2">
              Apply Filter
            </Button>
            <Button variant="dark">Clear</Button>
          </ButtonToolbar>
        </Col>
        <Col sm={8} className="results-data">
          <Col>
            <Row className="mb-4">
              <Col className="mr-auto text-uppercase">
                <h4 className="pt-2">740 Wedding Venues</h4>
              </Col>
              <Col className="text-right">
                <Button variant="secondary" className="mr-2">
                  Show map
                </Button>
                <Button variant="secondary" className="mr-2">
                  <i className="fas fa-th-large" />
                </Button>
                <Button variant="primary">
                  <i className="fas fa-bars" />
                </Button>
              </Col>
            </Row>
            <Link to="/supplier">
              <Row>
                <Col sm={5}>
                  <img src={sampleImg} alt="" />
                </Col>
                <Col sm={7}>
                  <h5>Fulham Palace</h5>
                  <span className="results-data-location">
                    <i className="fas fa-map-marker-alt" />
                    {' '}
South London
                  </span>
                  <p className="mt-2 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua...
                  </p>
                  <b>$985 - $85,000 | Up to 220 Capacity</b>
                </Col>
              </Row>
            </Link>
            <div className="divider" />
            <Row>
              <Col sm={5}>
                <img src={sampleImg} alt="" />
              </Col>
              <Col sm={7}>
                <h5>Fulham Palace</h5>
                <span className="results-data-location">
                  <i className="fas fa-map-marker-alt" />
                  {' '}
South London
                </span>
                <p className="mt-2 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua...
                </p>
                <b>$985 - $85,000 | Up to 220 Capacity</b>
              </Col>
            </Row>
            <div className="divider" />
            <Row>
              <Col sm={5}>
                <img src={sampleImg} alt="" />
              </Col>
              <Col sm={7}>
                <h5>Fulham Palace</h5>
                <span className="results-data-location">
                  <i className="fas fa-map-marker-alt" />
                  {' '}
South London
                </span>
                <p className="mt-2 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua...
                </p>
                <b>$985 - $85,000 | Up to 220 Capacity</b>
              </Col>
            </Row>
            <div className="divider" />
            <Row>
              <Col sm={5}>
                <img src={sampleImg} alt="" />
              </Col>
              <Col sm={7}>
                <h5>Fulham Palace</h5>
                <span className="results-data-location">
                  <i className="fas fa-map-marker-alt" />
                  {' '}
South London
                </span>
                <p className="mt-2 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua...
                </p>
                <b>$985 - $85,000 | Up to 220 Capacity</b>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <ButtonToolbar>
                  <Button variant="light" className="mr-2">
                    <i className="fa fa-angle-double-left" />
                  </Button>
                  <Button variant="light" className="mr-2">
                    <i className="fa fa-angle-left" />
                  </Button>
                  <Button className="mr-2">1</Button>
                  <Button className="mr-2" variant="secondary">
                    2
                  </Button>
                  <Button className="mr-2" variant="secondary">
                    3
                  </Button>
                  <Button variant="light" className="mr-2">
                    <i className="fa fa-angle-right" />
                  </Button>
                </ButtonToolbar>
              </Col>
              <Col className="text-right pt-2">
                <span className="text-muted">Showing 1 - 6 of 8 results</span>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
    <PopularSearches />
  </React.Fragment>
);

export default Venues;
