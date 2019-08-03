import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

import Sample from '../../../../assets/images/sample-dashboard.png';
import Sample2 from '../../../../assets/images/sample-dashboard2.png';

import ScreensLayoutsDashboardUser from '../../../Layouts/Dashboard/User';

const ScreensDashboardUserHome = () => (
  <ScreensLayoutsDashboardUser>
    <Container className="mb-5">
      <Row className="mt-5">
        <Col>
          <h6 className="text-proxima-bold">
            {' '}
            Find And Book Your Dream Wedding Venue{' '}
          </h6>
        </Col>
      </Row>
      <Row className="h-scroll">
        <Col xs={12} sm={4} className="h-scroll__item h-scroll__item-cardtype1">
          <div className="dashboard-user__home-cardtype1">
            <img src={Sample} alt="" />
            <div className="p-4">
              <h6 className="text-proxima-bold">Fulham Palace</h6>
              <b className="text-muted">
                <i className="fas fa-map-marker-alt text-wevedo" /> South London
              </b>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={4} className="h-scroll__item h-scroll__item-cardtype1">
          <div className="dashboard-user__home-cardtype1">
            <img src={Sample} alt="" />
            <div className="p-4">
              <h6 className="text-proxima-bold">Fulham Palace</h6>
              <b className="text-muted">
                <i className="fas fa-map-marker-alt text-wevedo" /> South London
              </b>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={4} className="h-scroll__item h-scroll__item-cardtype1">
          <div className="dashboard-user__home-cardtype1">
            <img src={Sample} alt="" />
            <div className="p-4">
              <h6 className="text-proxima-bold">Fulham Palace</h6>
              <b className="text-muted">
                <i className="fas fa-map-marker-alt text-wevedo" /> South London
              </b>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={4} className="h-scroll__item h-scroll__item-cardtype1">
          <div className="dashboard-user__home-cardtype1">
            <img src={Sample} alt="" />
            <div className="p-4">
              <h6 className="text-proxima-bold">Fulham Palace</h6>
              <b className="text-muted">
                <i className="fas fa-map-marker-alt text-wevedo" /> South London
              </b>
            </div>
          </div>
        </Col>
        <Col className="d-block d-sm-none text-center m-1">
          <Button size="lg">Show More</Button>
        </Col>
      </Row>

      <Row className="mt-4 mt-sm-5">
        <Col>
          <h6 className="text-proxima-bold"> Wevedo Categories </h6>
        </Col>
      </Row>
      <Row className="h-scroll">
        <Col className="h-scroll__item h-scroll__item-cardtype2">
          <div className="dashboard-user__home-cardtype2">
            <img src={Sample2} alt="" />
            <b>Music</b>
          </div>
        </Col>
        <Col className="h-scroll__item h-scroll__item-cardtype2">
          <div className="dashboard-user__home-cardtype2">
            <img src={Sample2} alt="" />
            <b>Music</b>
          </div>
        </Col>
        <Col className="h-scroll__item h-scroll__item-cardtype2">
          <div className="dashboard-user__home-cardtype2">
            <img src={Sample2} alt="" />
            <b>Music</b>
          </div>
        </Col>
        <Col className="h-scroll__item h-scroll__item-cardtype2">
          <div className="dashboard-user__home-cardtype2">
            <img src={Sample2} alt="" />
            <b>Music</b>
          </div>
        </Col>
        <Col className="h-scroll__item h-scroll__item-cardtype2">
          <div className="dashboard-user__home-cardtype2">
            <img src={Sample2} alt="" />
            <b>Music</b>
          </div>
        </Col>
        <Col className="d-block d-sm-none text-center m-1">
          <Button size="lg">Show More</Button>
        </Col>
      </Row>
    </Container>
  </ScreensLayoutsDashboardUser>
);

export default ScreensDashboardUserHome;
