import React, { useState } from 'react';

import { Row, Col, Button, Form } from 'react-bootstrap';

import FilterDialog from '../../../Filter/Dialog';

const SearchPanelMobile = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Row>
      <Col xs={8} className="pr-0">
        <Form.Control placeholder="SEARCH" />
      </Col>
      <Col xs={4} className="pl-0 text-right">
        <Button onClick={() => setModalShow(true)}>Filters</Button>
      </Col>
      <FilterDialog show={modalShow} onHide={() => setModalShow(false)} />
    </Row>
  );
};

export default SearchPanelMobile;
