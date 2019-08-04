import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, ButtonToolbar, Card } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import ClampLines from 'react-clamp-lines';

import 'rc-slider/assets/index.css';

import './List.scss';

import supplierMap from '../../../assets/images/aMap.png';

import config from '../../../config';

const SupplierList = ({
  suppliers,
  supplierCategory,
  numberOfSuppliers,
  currentPage,
  onPaginationChange,
}) => {
  const displayTypes = {
    LIST: 'list',
    GRID: 'grid',
    MAP: 'map',
  };
  const [displayType, setDisplayType] = useState(displayTypes.GRID);

  function SupplierGrid({ supplier }) {
    const { _id: supplierId } = supplier;
    return (
      <Link to={`/suppliers/details/${supplierId}`}>
        <Card className="h-100">
          <Card.Img
            className="supplier-list__image supplier-list__image_grid"
            variant="top"
            src={supplier.profileImageURL}
            alt="Wevedo Venues"
          />
          <Card.Body>
            <Card.Title className="mb-1">{supplier.fullName}</Card.Title>
            <span className="results-data-location">
              <i className="fas fa-map-marker-alt mr-2" />
              {supplier.regionName}
            </span>
            <ClampLines
              className="mt-3"
              text={supplier.bio || ''}
              id="supplier-grid-text"
              ellipsis="..."
              lines={2}
              buttons={false}
              innerElement={Card.Text}
            />
          </Card.Body>
          {supplier.minPrice && supplier.maxPrice ? (
            <Card.Footer>
              <Row>
                <Col className="pl-md-3 text-center">
                  <b>
                    ${supplier.minPrice} - ${supplier.maxPrice}
                  </b>
                </Col>
              </Row>
            </Card.Footer>
          ) : null}
        </Card>
      </Link>
    );
  }

  function SupplierCard({ supplier }) {
    const { _id: supplierId } = supplier;
    return (
      <Link to={`/suppliers/details/${supplierId}`}>
        <Row>
          <Col className="h-100" sm={5}>
            <img
              className="supplier-list__image supplier-list__image_card"
              src={supplier.profileImageURL}
              alt=""
            />
          </Col>
          <Col sm={7}>
            <h5>{supplier.fullName}</h5>
            <span className="results-data-location">
              <i className="fas fa-map-marker-alt mr-2" />
              {supplier.regionName}
            </span>
            <ClampLines
              className="mt-2 mb-2"
              text={supplier.bio || ''}
              id="supplier-grid-text"
              ellipsis="..."
              lines={3}
              buttons={false}
              innerElement="p"
            />
            {supplier.minPrice && supplier.maxPrice ? (
              <b>
                ${supplier.minPrice} - ${supplier.maxPrice}
              </b>
            ) : null}
          </Col>
        </Row>
      </Link>
    );
  }

  const Suppliers = () => {
    switch (displayType) {
      case displayTypes.GRID:
        return (
          <Row>
            {suppliers.map(supplier => {
              const { _id: id } = supplier;
              return (
                <Col className="mb-4" sm={6} key={id}>
                  <SupplierGrid supplier={supplier} />
                </Col>
              );
            })}
          </Row>
        );

      case displayTypes.LIST:
        return suppliers.map(supplier => {
          const { _id: id } = supplier;
          return (
            <React.Fragment key={id}>
              <SupplierCard supplier={supplier} />
              <div className="divider" />
            </React.Fragment>
          );
        });
      case displayTypes.MAP:
        return (
          <Col>
            <img src={supplierMap} alt="Suppliers locations" />
          </Col>
        );
      default:
        return null;
    }
  };

  function PaginationButtons() {
    function ResultsArea() {
      const numberOfSuppliersShown = config.suppliersPerPage * currentPage;
      const beginRangeCount = suppliers.length
        ? config.suppliersPerPage * (currentPage - 1) + 1
        : 0;
      const endRangeCount =
        numberOfSuppliersShown > numberOfSuppliers
          ? numberOfSuppliers
          : numberOfSuppliersShown;

      return (
        <span className="text-muted">
          {`Showing ${beginRangeCount} - ${endRangeCount} of ${numberOfSuppliers} results`}
        </span>
      );
    }

    return (
      <Row>
        <Col>
          <ButtonToolbar>
            <Pagination
              firstPageText={<i className="fa fa-angle-double-left" />}
              prevPageText={<i className="fa fa-angle-left" />}
              nextPageText={<i className="fa fa-angle-right" />}
              lastPageText={<i className="fa fa-angle-double-right" />}
              itemsCountPerPage={config.suppliersPerPage}
              pageRangeDisplayed={config.pageRangeDisplayed}
              activePage={+currentPage}
              totalItemsCount={numberOfSuppliers}
              onChange={onPaginationChange}
              itemClass="paginationItem"
              itemClassLast="paginationIcon"
              itemClassNext="paginationIcon"
              itemClassPrev="paginationIcon"
              itemClassFirst="paginationIcon"
            />
          </ButtonToolbar>
        </Col>
        <Col className="text-right pt-2">
          <ResultsArea />
        </Col>
      </Row>
    );
  }

  return (
    <React.Fragment>
      <Row className="mb-4">
        <Col md={6} xs={4} className="mr-auto text-uppercase">
          <h4 className="pt-2">{`${numberOfSuppliers} ${supplierCategory}`}</h4>
        </Col>
        <Col md={6} xs={8} className="text-right">
          <Button
            variant={displayType === displayTypes.MAP ? 'primary' : 'secondary'}
            className="mr-2"
            onClick={() => setDisplayType(displayTypes.MAP)}
          >
            Show map
          </Button>
          <Button
            variant={
              displayType === displayTypes.GRID ? 'primary' : 'secondary'
            }
            className="mr-2"
            onClick={() => setDisplayType(displayTypes.GRID)}
          >
            <i className="fas fa-th-large" />
          </Button>
          <Button
            variant={
              displayType === displayTypes.LIST ? 'primary' : 'secondary'
            }
            className="d-none d-sm-inline"
            onClick={() => setDisplayType(displayTypes.LIST)}
          >
            <i className="fas fa-bars" />
          </Button>
        </Col>
      </Row>
      <Suppliers />
      {displayType !== displayTypes.MAP && suppliers.length !== 0 ? (
        <PaginationButtons className="mt-5" />
      ) : null}
      {suppliers.length === 0 ? (
        <p className="supplier-list__legend">Suppliers not found</p>
      ) : null}
    </React.Fragment>
  );
};

export default SupplierList;
