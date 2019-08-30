import React, { useState, useEffect, useContext, useRef } from 'react';
import queryString from 'query-string';

import { Row, Container, Col } from 'react-bootstrap';
import Scroll from 'react-scroll';

import './FilteredList.scss';
import 'rc-slider/assets/index.css';

import backgroundImage from '../../../assets/images/venues-bg.png';

import { WevedoServiceContext } from '../../../contexts';
import config from '../../../config';

import ScreensLayoutMain from '../../Layouts/Main';
import SearchPanel from '../../../components/Search/Panel';
import SearchPanelMobile from '../../../components/Search/Panel/Mobile';
import FilterPanel from '../../../components/Filter/Panel';
import SupplierList from '../../../components/Supplier/List';

const ScreensSupplierFilteredList = ({ history, location, match }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [numberOfSuppliers, setNumberOfSuppliers] = useState(0);
  const [filterOptions, setFilterOptions] = useState({});
  const supplierListContainer = useRef(null);

  // It's an object: {city/regionName/county: 'London'} or ''
  const supplierLocationQuery = queryString.parse(location.search) || '';

  const supplierLocationQueryString = JSON.stringify(
    queryString.parse(location.search) || '',
  );

  const wevedoService = useContext(WevedoServiceContext);
  const supplierCategory = match.params.category;
  const currentPage = +match.params.pageNumber || 1;

  // use useEffect to overcome the influence of
  // WithScrollToTop HOC, which scrolls to top each time
  // the pathname changes. Now with each search the page
  // moves to the search resuls area
  useEffect(() => {
    if (location.pathname !== '/suppliers/Venue' || location.search !== '') {
      Scroll.animateScroll.scrollTo(supplierListContainer.current.offsetTop);
    }
  });

  console.log(location);

  useEffect(() => {
    const fetchSuppliers = async () => {
      const {
        data: {
          providers: newSuppliers,
          numberOfProviders: newNumberOfSuppliers,
        },
      } = await wevedoService.getSuppliersByFilters(
        supplierCategory,
        currentPage,
        filterOptions,
        supplierLocationQueryString,
        config.suppliersPerPage,
      );

      setSuppliers(newSuppliers);
      setNumberOfSuppliers(newNumberOfSuppliers);
    };
    fetchSuppliers();
  }, [
    wevedoService,
    currentPage,
    supplierCategory,
    filterOptions,
    supplierLocationQueryString,
  ]);

  const scrollToSupplierList = () => {
    // there is timer to cancel scrolling in withScrollingToTop HOC
    setTimeout(() => {
      // keydown event cancels scrolling in withScrollingToTop HOC
      document.dispatchEvent(
        new Event('keydown', {
          keyCode: 13,
          which: 13,
          key: 'Enter',
        }),
      );
      Scroll.animateScroll.scrollTo(supplierListContainer.current.offsetTop);
    }, 0);
  };

  const onSearch = () => scrollToSupplierList();

  const onPaginationChange = pageNumber => {
    history.push(`/suppliers/${supplierCategory}/${pageNumber}`);
    scrollToSupplierList();
  };

  return (
    <ScreensLayoutMain
      title={supplierCategory}
      backgroundImage={backgroundImage}
    >
      <Container ref={supplierListContainer}>
        <Row className="venues-filters d-flex d-sm-none pt-4 pb-4 mb-4">
          <Col className="d-inline">
            <SearchPanelMobile
              onSearch={onSearch}
              setFilterOptions={setFilterOptions}
            />
          </Col>
        </Row>
      </Container>

      <SearchPanel
        onSearch={onSearch}
        supplierLocationQuery={supplierLocationQuery}
      />

      <Container className="venues-results">
        <Row>
          <Col sm={8} className="results-data">
            <SupplierList
              suppliers={suppliers}
              supplierCategory={supplierCategory}
              currentPage={currentPage}
              numberOfSuppliers={numberOfSuppliers}
              onPaginationChange={onPaginationChange}
            />
          </Col>
          <Col sm={4} className="results-filters d-none d-sm-inline">
            <FilterPanel setFilterOptions={setFilterOptions} />
          </Col>
        </Row>
      </Container>
    </ScreensLayoutMain>
  );
};

export default ScreensSupplierFilteredList;
