import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Container,
  Col,
  Form,
  Button,
  ButtonToolbar,
  Card,
} from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import { Range } from 'rc-slider';

import PopularSearches from '../popularSearches';
import './supplier-list.scss';

import 'rc-slider/assets/index.css';

import { WevedoServiceContext } from '../../contexts';
import config from '../../../config';

export default function SupplierList({ history, match }) {
  const [providers, setProviders] = useState([]);
  const [numberOfProviders, setNumberOfProviders] = useState(0);

  const wevedoService = useContext(WevedoServiceContext);
  const supplierName = match.params.name;
  const currentPage = +match.params.pageNumber || 1;

  useEffect(() => {
    const fetchProviders = async () => {
      const {
        data: {
          providers: newProviders,
          numberOfProviders: newNumberOfProviders,
        },
      } = await wevedoService.getProvidersByFilters(supplierName, currentPage);

      setProviders(newProviders);
      setNumberOfProviders(newNumberOfProviders);
    };
    fetchProviders();
  }, [wevedoService, currentPage, supplierName]);

  const onPaginationChange = pageNumber => {
    history.push(`/suppliers/${supplierName}/${pageNumber}`);
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
            <h1>{supplierName}</h1>
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
              <Button variant="light" size="lg">
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
}

function Filters() {
  const budgetDefaultValues = [500, 1000];
  const [budgetValues, setBudgetValues] = useState([...budgetDefaultValues]);

  const guestsDefaultNumber = [30, 100];
  const [guestsNumber, setGuestsNumber] = useState([...guestsDefaultNumber]);

  const [venueTypes, setVenueTypes] = useState({
    'Country House': false,
    Barn: false,
    Outdoor: false,
    Attraction: false,
  });
  const handleVenueTypeSelection = e => {
    const venueName = e.target.id;
    setVenueTypes({
      ...venueTypes,
      [venueName]: !venueTypes[venueName],
    });
  };

  const [venueStyles, setVenueStyles] = useState({
    Classic: false,
    Intimate: false,
    Unusual: false,
    Modern: false,
  });
  const handleVenueStyleSelection = e => {
    const venueStyle = e.target.id;
    setVenueStyles({
      ...venueStyles,
      [venueStyle]: !venueStyles[venueStyle],
    });
  };

  console.log(venueStyles);

  return (
    <React.Fragment>
      <Form>
        <div className="mb-5">
          <div className="mb-3">
            <b>Budget</b>
          </div>
          <Row>
            <Col sm={12}>
              <Range
                min={0}
                max={10000}
                defaultValue={[...budgetDefaultValues]}
                step={budgetValues[1] > 5000 ? 1000 : 10}
                onChange={updatedValues => setBudgetValues(updatedValues)}
              />
            </Col>
            <Col sm={12} className="mt-3">
              <span className="text-muted">Price: </span>
              {`$${budgetValues[0]} - $${budgetValues[1]}`}
            </Col>
          </Row>
        </div>
        <div className="mb-5">
          <div className="mb-3">
            <b>Seated Dining Capacity</b>
          </div>
          <Row>
            <Col sm={12}>
              <Range
                min={0}
                max={200}
                defaultValue={[...guestsDefaultNumber]}
                step={1}
                onChange={updatedGuestsNumber =>
                  setGuestsNumber(updatedGuestsNumber)
                }
              />
            </Col>
            <Col sm={12} className="mt-3">
              <span className="text-muted">Seated: </span>
              {`${guestsNumber[0]} - ${guestsNumber[1]}`}
            </Col>
          </Row>
        </div>
        <div className="mb-5">
          <div className="mb-3">
            <b>Venue Type</b>
          </div>
          <Form.Check
            label="Country House"
            id="Country House"
            onChange={handleVenueTypeSelection}
          />
          <Form.Check
            label="Barn"
            id="Barn"
            onChange={handleVenueTypeSelection}
          />
          <Form.Check
            label="Outdoor"
            id="Outdoor"
            onChange={handleVenueTypeSelection}
          />
          <Form.Check
            label="Attraction"
            id="Attraction"
            onChange={handleVenueTypeSelection}
          />
        </div>
        <div className="mb-5">
          <div className="mb-3">
            <b>Venue Styles</b>
          </div>
          <Form.Check
            label="Classic"
            id="Classic"
            onChange={handleVenueStyleSelection}
          />
          <Form.Check
            label="Intimate"
            id="Intimate"
            onChange={handleVenueStyleSelection}
          />
          <Form.Check
            label="Unusual"
            id="Unusual"
            onChange={handleVenueStyleSelection}
          />
          <Form.Check
            label="Modern"
            id="Modern"
            onChange={handleVenueStyleSelection}
          />
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
}

function Providers({
  providers,
  numberOfProviders,
  currentPage,
  onPaginationChange,
}) {
  const [gridView, changeView] = useState(true);

  function ProviderGrid({ provider }) {
    const { _id: providerId } = provider;
    return (
      <Col sm={6}>
        <Link to={`/supplier/${providerId}`}>
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src={provider.profileImageURL}
              alt="Wevedo Venues"
            />
            <Card.Body>
              <Card.Title className="mb-1">{provider.firstName}</Card.Title>
              <span className="results-data-location">
                <i className="fas fa-map-marker-alt" />
                {provider.regionName}
              </span>
              <Card.Text className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod ...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col className="pl-md-3 text-center">
                  <b>$985 - $85,000</b>
                </Col>
                <span
                  className="d-sm-none d-md-block"
                  style={{ borderRight: '1px solid #e9ecef' }}
                />
                <Col className="pr-md-3 text-center">
                  <b>Up to 220 Capacity</b>{' '}
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Link>
      </Col>
    );
  }

  function ProviderCard({ provider }) {
    const { _id: providerId } = provider;
    return (
      <Link to={`/supplier/${providerId}`}>
        <Row>
          <Col sm={5}>
            <img src={provider.profileImageURL} alt="" />
          </Col>
          <Col sm={7}>
            <h5>{provider.firstName}</h5>
            <span className="results-data-location">
              <i className="fas fa-map-marker-alt" /> {provider.regionName}
            </span>
            <p className="mt-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <b>$985 - $85,000 | Up to 220 Capacity</b>
          </Col>
        </Row>
      </Link>
    );
  }

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
          <h4 className="pt-2">740 Wedding Venues</h4>
        </Col>
        <Col className="text-right">
          <Button variant="secondary" className="mr-2">
            Show map
          </Button>
          <Button
            variant={gridView ? 'primary' : 'secondary'}
            className="mr-2"
            onClick={() => changeView(!gridView)}
          >
            <i className="fas fa-th-large" />
          </Button>
          <Button
            variant={gridView ? 'secondary' : 'primary'}
            onClick={() => changeView(!gridView)}
          >
            <i className="fas fa-bars" />
          </Button>
        </Col>
      </Row>
      {gridView ? (
        <Row>
          {providers.map(provider => {
            const { _id: id } = provider;
            return (
              <React.Fragment key={id}>
                <ProviderGrid provider={provider} />
              </React.Fragment>
            );
          })}
        </Row>
      ) : (
        providers.map(provider => {
          const { _id: id } = provider;
          return (
            <React.Fragment key={id}>
              <ProviderCard provider={provider} />
              <div className="divider" />
            </React.Fragment>
          );
        })
      )}
      <PaginationButtons className="mt-5" />
    </React.Fragment>
  );
}
