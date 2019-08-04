import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import Icon from '../../../../assets/images/uploadImg.png';
import sample1 from '../../../../assets/images/dnd-1.png';
import sample3 from '../../../../assets/images/dnd-3.png';

const DashboardBusinessProfile = () => (
  <div className="dashboard">
    <div className="dashboard-background" />
    <Container className="dashboard-business__profile">
      <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
        {' '}
        Basic Info{' '}
      </h6>
      <Row className="mb-5">
        <Col>
          <div className="dashboard-business__profile__whitebox">
            <Col sm={12} className="mb-4">
              <Form.Group>
                <p className="text-muted">Description</p>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Col>
            <Col sm={12} className="mb-4">
              <p className="text-muted">Pricing</p>
              <Row>
                <Col sm={4} className="mb-2 mb-sm-0">
                  <Form.Control />
                </Col>
                <Col sm={4}>
                  <Form.Control />
                </Col>
              </Row>
            </Col>
            <Col sm={12} className="mb-4">
              <p className="text-muted">Guests Capacity</p>
              <Row>
                <Col sm={4} className="mb-2 mb-sm-0">
                  <Form.Control />
                </Col>
                <Col sm={4}>
                  <Form.Control />
                </Col>
              </Row>
            </Col>
            <Col sm={12} className="mb-4">
              <p className="text-muted">Facilities</p>
              <Form.Control />
            </Col>
            <Col sm={12} className="text-uppercase mt-2 mb-4">
              <Button size="lg">Save</Button>
            </Col>
          </div>
        </Col>
      </Row>
      <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
        {' '}
        Contact Details{' '}
      </h6>
      <Row className="mb-5">
        <Col>
          <div className="dashboard-business__profile__whitebox">
            <Row className="p-3">
              <Col sm={6} className="mb-4">
                <p className="text-muted">Service Name</p>
                <Form.Control />
              </Col>
              <Col sm={6} className="mb-4">
                <p className="text-muted">Website Url</p>
                <Form.Control />
              </Col>
              <Col sm={6} className="mb-4">
                <p className="text-muted">Email Address</p>
                <Form.Control />
              </Col>
              <Col sm={6} className="mb-4">
                <p className="text-muted">Mobile Number</p>
                <Form.Control />
              </Col>
            </Row>
            <Col className="mb-4">
              <p className="text-muted">Address</p>
              <Row className="mb-sm-3">
                <Col sm={5} className="mb-2">
                  <Form.Control />
                </Col>
                <Col sm={4} className="mb-2">
                  <Form.Control />
                </Col>
              </Row>
              <Row>
                <Col sm={5} className="mb-2">
                  <Form.Control />
                </Col>
                <Col sm={4} className="mb-2">
                  <Form.Control />
                </Col>
                <Col sm={3} className="mb-2">
                  <Form.Control />
                </Col>
              </Row>
            </Col>
          </div>
        </Col>
      </Row>
      <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
        {' '}
        Upload Photos{' '}
      </h6>
      <Row className="mb-3">
        <Col>
          <div className="busines-signup-config__uploadImg-inverse">
            <Row className="d-flex align-items-center">
              <div className="ml-sm-5 p-4 pr-sm-5">
                <img src={Icon} width="40px" alt="" />
              </div>
              <div className="d-block align-self-center">
                <p className="mb-2">
                  <b>Upload Photos</b>{' '}
                  <span className="text-muted">or just drag and drop</span>
                </p>
                <span className="text-muted">+ Add at least 3 photos</span>
              </div>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="mb-3 busines-signup-config__uploadImg-loaded">
        <Col sm={4} className="mb-3">
          <div className="overlayed">
            <img src={sample1} alt="" />
            <div className="overlay">
              <i className="fas fa-pencil-alt fa-2x" />
            </div>
          </div>
        </Col>
        <Col sm={4} className="mb-3">
          <div className="overlayed">
            <img src={sample1} alt="" />
            <div className="overlay">
              <i className="fas fa-pencil-alt fa-2x" />
            </div>
          </div>
        </Col>
        <Col sm={4} className="mb-3">
          <div className="overlayed">
            <img src={sample3} alt="" />
            <div className="overlay">
              <i className="fas fa-pencil-alt fa-2x" />
            </div>
          </div>
        </Col>
      </Row>
      <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
        {' '}
        Upload Video{' '}
      </h6>
      <Row className="mb-5">
        <Col>
          <div className="dashboard-business__profile__whitebox">
            <Col sm={12} className="mb-4">
              <p className="text-muted">Add a Video</p>
              <Form.Control placeholder="Enter video URL" />
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default DashboardBusinessProfile;
