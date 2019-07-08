import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Container, Col, Form, Button, ButtonToolbar,
} from 'react-bootstrap';
import Pagination from 'react-js-pagination';

import './supplier-list.scss';

import 'rc-slider/assets/index.css';
import { Range } from 'rc-slider';

import { WevedoServiceContext } from '../../contexts';

import serches1 from '../../../assets/images/serches1.png';
import serches2 from '../../../assets/images/serches2.png';
import serches3 from '../../../assets/images/serches3.png';
import serches4 from '../../../assets/images/serches4.png';

export default function SupplierList({ history, location, match }) {
  const [providers, setProviders] = useState([]);
  const [numberOfProviders, setNumberOfProviders] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [providersPerPage, setProvidersPerPage] = useState(1);

  const wevedoService = useContext(WevedoServiceContext);
  const supplierName = match.params.name;

  useEffect(() => {
    const fetchProviders = async () => {
      const {
        data: newProviders,
      } = await wevedoService.getListByCategory(supplierName, currentPage);
      const {
        data: newNumberOfProviders,
      } = await wevedoService.getNumberOfProvidersByCategory(supplierName);
      const {
        data: newProvidersPerPage,
      } = await wevedoService.getProvidersPerPage();

      setProviders(newProviders);
      setNumberOfProviders(newNumberOfProviders);
      setProvidersPerPage(newProvidersPerPage);
    };
    fetchProviders();
  }, [wevedoService, currentPage, supplierName]);

  useEffect(() => {
    const pageNumber = location.search.match(/^\?page=(\d*)$/);
    setCurrentPage(pageNumber ? pageNumber[1] : 1);
  }, [location.search]);

  const onPaginationChange = pageNumber => {
    setCurrentPage(pageNumber);
    history.push(`${location.pathname}?page=${pageNumber}`);
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <Hero supplierName={supplierName} />
      <SearchForm />
      <Container className="supplier-list-results">
        <Row>
          <Col sm={4} className="results-filters">
            <Filters />
          </Col>
          <Col sm={8} className="results-data">
            <Providers
              providers={providers}
              providersPerPage={providersPerPage}
              currentPage={currentPage}
              numberOfProviders={numberOfProviders}
              onPaginationChange={onPaginationChange}
            />
          </Col>
        </Row>
      </Container>
      <PopularSearches />
    </React.Fragment>
  );
}

function Hero({ supplierName }) {
  return (
    <div className="section section-header-full supplier-list">
      <Container className="h-100 w-100 align-items-center">
        <Row className="h-100 align-items-center">
          <Col sm={12} className="text-center text-uppercase">
            <h1>{ supplierName }</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function SearchForm() {
  return (
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
              <Button variant="light" size="lg">Search</Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
}

function Filters() {
  return (
    <React.Fragment>
      <Form>
        <div className="mb-5">
          <div className="mb-3"><b>Budget</b></div>
          <Row>
            <Col sm={12}><Range min={0} max={20} defaultValue={[3, 10]} /></Col>
            <Col sm={12} className="mt-3">
              <span className="text-muted">Price: </span>
              $30 - $100
            </Col>
          </Row>
        </div>
        <div className="mb-5">
          <div className="mb-3"><b>Seated Dining Capacity</b></div>
          <Row>
            <Col sm={12}><Range min={0} max={20} defaultValue={[3, 10]} /></Col>
            <Col sm={12} className="mt-3">
              <span className="text-muted">Seated: </span>
              30 - 100
            </Col>
          </Row>
        </div>
        <div className="mb-5">
          <div className="mb-3"><b>Venue Type</b></div>
          <Form.Check label="Country House" />
          <Form.Check label="Barm" />
          <Form.Check label="Outdoor" />
          <Form.Check label="Attraction" />
        </div>
        <div className="mb-5">
          <div className="mb-3"><b>Venue Styles</b></div>
          <Form.Check label="Classic" />
          <Form.Check label="Intimate" />
          <Form.Check label="Unusual" />
          <Form.Check label="Modern" />
        </div>
      </Form>
      <ButtonToolbar>
        <Button variant="primary" className="mr-2">Apply Filter</Button>
        <Button variant="dark">Clear</Button>
      </ButtonToolbar>
    </React.Fragment>
  );
}

function Providers({
  providers, providersPerPage, numberOfProviders, currentPage, onPaginationChange,
}) {
  function ProviderCard({ provider }) {
    return (
      <Link to="/supplier">
        <Row>
          <Col sm={5}><img src={provider.profileImageURL} alt="" /></Col>
          <Col sm={7}>
            <h5>{provider.firstName}</h5>
            <span className="results-data-location">
              <i className="fas fa-map-marker-alt" />
              {' '}
              {provider.regionName}
            </span>
            <p className="mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            <b>$985 - $85,000 | Up to 220 Capacity</b>
          </Col>
        </Row>
      </Link>
    );
  }

  function PaginationButtons() {
    return (
      <Row>
        <Col>
          <ButtonToolbar>
            <Pagination
              firstPageText={<i className="fa fa-angle-double-left" />}
              prevPageText={<i className="fa fa-angle-left" />}
              nextPageText={<i className="fa fa-angle-right" />}
              lastPageText={<i className="fa fa-angle-double-right" />}
              itemsCountPerPage={providersPerPage}
              pageRangeDisplayed={3}
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
          <span className="text-muted">Showing 1 - 6 of 8 results</span>
        </Col>
      </Row>
    );
  }

  return (
    <React.Fragment>
      <Row className="mb-4">
        <Col className="mr-auto text-uppercase"><h4 className="pt-2">740 Wedding Venues</h4></Col>
        <Col className="text-right">
          <Button variant="secondary" className="mr-2">Show map</Button>
          <Button variant="secondary" className="mr-2"><i className="fas fa-th-large" /></Button>
          <Button variant="primary"><i className="fas fa-bars" /></Button>
        </Col>
      </Row>
      {
        providers.map(provider => {
          const { _id: id } = provider;
          return (
            <React.Fragment key={id}>
              <ProviderCard provider={provider} />
              <div className="divider" />
            </React.Fragment>
          );
        })
      }
      <PaginationButtons className="mt-5" />
    </React.Fragment>
  );
}

function PopularSearches() {
  return (
    <div className="popularserches">
      <Container className="pb-5">
        <Row>
          <Col sm={6}>
            <h3 className="text-uppercase">Popular venue serches</h3>
            <p className="d-none d-sm-block">
              At some stage in all our lives we want clearer, fresher,
              younger looking skin. Well it can be achieved without spending a lot of money.
            </p>
          </Col>
          <Col sm={6}>
            <Row>
              <Col>
                <ul>
                  <li>Essex</li>
                  <li>Hertforshire</li>
                  <li>West Midlands</li>
                  <li>Hampshire</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Essex</li>
                  <li>Hertforshire</li>
                  <li>West Midlands</li>
                  <li>Hampshire</li>
                </ul>
              </Col>
              <Col className="d-none d-sm-block">
                <ul>
                  <li>Essex</li>
                  <li>Hertforshire</li>
                  <li>West Midlands</li>
                  <li>Hampshire</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Row className="m-0">
        <Col xs={3} className="p-0 overlayed">
          <img src={serches1} alt="" />
          <div className="overlay">
            <i className="fa fa-search fa-2x" />
          </div>
        </Col>
        <Col xs={3} className="p-0 overlayed">
          <img src={serches2} alt="" />
          <div className="overlay">
            <i className="fa fa-search fa-2x" />
          </div>
        </Col>
        <Col xs={3} className="p-0 overlayed">
          <img src={serches3} alt="" />
          <div className="overlay">
            <i className="fa fa-search fa-2x" />
          </div>
        </Col>
        <Col xs={3} className="p-0 overlayed">
          <img src={serches4} alt="" />
          <div className="overlay">
            <i className="fa fa-search fa-2x" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
