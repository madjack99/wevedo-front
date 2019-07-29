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
  providers,
  supplierCategory,
  numberOfProviders,
  currentPage,
  onPaginationChange,
}) => {
  const displayTypes = {
    LIST: 'list',
    GRID: 'grid',
    MAP: 'map',
  };
  const [displayType, setDisplayType] = useState(displayTypes.GRID);

  function SupplierGrid({ provider }) {
    const { _id: providerId } = provider;
    return (
      <Link to={`/suppliers/details/${providerId}`}>
        <Card className="h-100">
          <Card.Img
            className="supplier-list__image supplier-list__image_grid"
            variant="top"
            src={provider.profileImageURL}
            alt="Wevedo Venues"
          />
          <Card.Body>
            <Card.Title className="mb-1">{provider.fullName}</Card.Title>
            <span className="results-data-location">
              <i className="fas fa-map-marker-alt mr-2" />
              {provider.regionName}
            </span>
            <ClampLines
              className="mt-3"
              text={provider.bio || ''}
              id="supplier-grid-text"
              ellipsis="..."
              lines={2}
              buttons={false}
              innerElement={Card.Text}
            />
          </Card.Body>
          {provider.minPrice && provider.maxPrice ? (
            <Card.Footer>
              <Row>
                <Col className="pl-md-3 text-center">
                  <b>
                    ${provider.minPrice} - ${provider.maxPrice}
                  </b>
                </Col>
              </Row>
            </Card.Footer>
          ) : null}
        </Card>
      </Link>
    );
  }

  function SupplierCard({ provider }) {
    const { _id: providerId } = provider;
    return (
      <Link to={`/suppliers/details/${providerId}`}>
        <Row>
          <Col className="h-100" sm={5}>
            <img
              className="supplier-list__image supplier-list__image_card"
              src={provider.profileImageURL}
              alt=""
            />
          </Col>
          <Col sm={7}>
            <h5>{provider.firstName}</h5>
            <span className="results-data-location">
              <i className="fas fa-map-marker-alt mr-2" />
              {provider.regionName}
            </span>
            <ClampLines
              className="mt-2 mb-2"
              text={provider.bio || ''}
              id="supplier-grid-text"
              ellipsis="..."
              lines={3}
              buttons={false}
              innerElement="p"
            />
            {provider.minPrice && provider.maxPrice ? (
              <b>
                ${provider.minPrice} - ${provider.maxPrice}
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
            {providers.map(provider => {
              const { _id: id } = provider;
              return (
                <Col className="mb-4" sm={6} key={id}>
                  <SupplierGrid provider={provider} />
                </Col>
              );
            })}
          </Row>
        );

      case displayTypes.LIST:
        return providers.map(provider => {
          const { _id: id } = provider;
          return (
            <React.Fragment key={id}>
              <SupplierCard provider={provider} />
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
      const numberOfProvidersShown = config.providersPerPage * currentPage;
      const beginRangeCount = config.providersPerPage * (currentPage - 1) + 1;
      const endRangeCount =
        numberOfProvidersShown > numberOfProviders
          ? numberOfProviders
          : numberOfProvidersShown;

      return (
        <span className="text-muted">
          {`Showing ${beginRangeCount} - ${endRangeCount} of ${numberOfProviders} results`}
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
              itemsCountPerPage={config.providersPerPage}
              pageRangeDisplayed={config.pageRangeDisplayed}
              activePage={+currentPage}
              totalItemsCount={numberOfProviders}
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
        <Col className="mr-auto text-uppercase">
          <h4 className="pt-2">{`${numberOfProviders} ${supplierCategory}`}</h4>
        </Col>
        <Col className="text-right">
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
      {displayType !== displayTypes.MAP ? (
        <PaginationButtons className="mt-5" />
      ) : null}
    </React.Fragment>
  );
};

export default SupplierList;