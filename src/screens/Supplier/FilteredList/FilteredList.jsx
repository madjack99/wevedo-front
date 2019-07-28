import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Container,
  Col,
  Button,
  ButtonToolbar,
  Card,
} from 'react-bootstrap';
import Pagination from 'react-js-pagination';

import './FilteredList.scss';
import 'rc-slider/assets/index.css';

import backgroundImage from '../../../assets/images/venues-bg.png';

import { WevedoServiceContext } from '../../../contexts';
import config from '../../../config';

import ScreensLayoutMain from '../../Layouts/Main';
import SearchPanel from '../../../components/Search/Panel';
import SearchPanelMobile from '../../../components/Search/Panel/Mobile';
import FilterPanel from '../../../components/Filter/Panel';

const ScreensSupplierFilteredList = ({ history, match }) => {
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
    <ScreensLayoutMain title={supplierName} backgroundImage={backgroundImage}>
      <Container>
        <Row className="venues-filters d-flex d-sm-none pt-4 pb-4 mb-4">
          <Col className="d-inline">
            <SearchPanelMobile />
          </Col>
        </Row>
      </Container>

      <SearchPanel />
      <Container className="venues-results">
        <Row>
          <Col sm={4} className="results-filters d-none d-sm-inline">
            <FilterPanel />
          </Col>
          <Col sm={8} className="results-data">
            <Providers
              providers={providers}
              supplierName={supplierName}
              currentPage={currentPage}
              numberOfProviders={numberOfProviders}
              onPaginationChange={onPaginationChange}
            />
          </Col>
        </Row>
      </Container>
    </ScreensLayoutMain>
  );
};

function Providers({
  providers,
  supplierName,
  numberOfProviders,
  currentPage,
  onPaginationChange,
}) {
  const [gridView, changeView] = useState(true);

  function ProviderGrid({ provider }) {
    const { _id: providerId } = provider;
    return (
      <Col sm={6}>
        <Link to={`/suppliers/details/${providerId}`}>
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src={provider.profileImageURL}
              alt="Wevedo Venues"
            />
            <Card.Body>
              <Card.Title className="mb-1">{provider.fullName}</Card.Title>
              <span className="results-data-location">
                <i className="fas fa-map-marker-alt" />
                {provider.regionName}
              </span>
              <Card.Text className="mt-3">{provider.bio}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col className="pl-md-3 text-center">
                  <b>
                    ${provider.minPrice} - ${provider.maxPrice}
                  </b>
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
      <Link to={`/suppliers/details/${providerId}`}>
        <Row>
          <Col sm={5}>
            <img src={provider.profileImageURL} alt="" />
          </Col>
          <Col sm={7}>
            <h5>{provider.firstName}</h5>
            <span className="results-data-location">
              <i className="fas fa-map-marker-alt" /> {provider.regionName}
            </span>
            <p className="mt-2 mb-2">{provider.bio}</p>
            <b>
              ${provider.minPrice} - ${provider.maxPrice} | Up to 220 Capacity
            </b>
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
          <h4 className="pt-2">{`${numberOfProviders} ${supplierName}`}</h4>
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

export default ScreensSupplierFilteredList;
