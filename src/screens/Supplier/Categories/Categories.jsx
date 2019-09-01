import React from 'react';

import { Row, Container, Col } from 'react-bootstrap';

import backgroundImage from '../../../assets/images/wedding-suppliers-bg.png';

import ScreensLayoutMain from '../../Layouts/Main';
import SearchPanel from '../../../components/Search/Panel';
import CategoryGrid from '../../../components/Category/Grid';

export default function ScreensSupplierCategories() {
  return (
    <ScreensLayoutMain
      title="Wedding Suppliers"
      backgroundImage={backgroundImage}
    >
      <SearchPanel />
      <Container className="mt-5 mb-5 pt-5 pb-5">
        <Row className="mb-5">
          <Col>
            <h2 className="text-uppercase text-center">Supplier by category</h2>
            <hr />
          </Col>
        </Row>
        <CategoryGrid />
      </Container>
    </ScreensLayoutMain>
  );
}
