import React, { useState } from 'react';

import { Row, Col, Button, Form } from 'react-bootstrap';

import './Mobile.scss';

import FilterDialog from '../../../Filter/Dialog';

const SearchPanelMobile = ({ ...rest }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Form>
      <Row>
        <Col xs={8} className="pr-0">
          <Form.Control
            className="search-mobile__control"
            placeholder="SEARCH"
          />
        </Col>
        <Col xs={4} className="pl-0 text-right">
          <Button onClick={() => setModalShow(true)}>Filters</Button>
        </Col>
        <FilterDialog
          show={modalShow}
          onHide={() => setModalShow(false)}
          {...rest}
        />
      </Row>
    </Form>
  );
};

export default SearchPanelMobile;
