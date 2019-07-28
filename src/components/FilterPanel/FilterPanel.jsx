import React from 'react';
import { Row, Col, Form, Button, ButtonToolbar } from 'react-bootstrap';
import { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';

const FilterPanel = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default FilterPanel;
