import React, { useState, useEffect, useContext } from 'react';
import { Row, Container, Col } from 'react-bootstrap';

import './FilteredList.scss';
import 'rc-slider/assets/index.css';

import backgroundImage from '../../../assets/images/venues-bg.png';

import { WevedoServiceContext } from '../../../contexts';

import ScreensLayoutMain from '../../Layouts/Main';
import SearchPanel from '../../../components/Search/Panel';
import SearchPanelMobile from '../../../components/Search/Panel/Mobile';
import FilterPanel from '../../../components/Filter/Panel';
import SupplierList from '../../../components/Supplier/List';

const ScreensSupplierFilteredList = ({ history, match }) => {
  const [providers, setProviders] = useState([]);
  const [numberOfProviders, setNumberOfProviders] = useState(0);

  const [filterOptions, setFilterOptions] = useState({});

  const wevedoService = useContext(WevedoServiceContext);
  const supplierCategory = match.params.name;
  const currentPage = +match.params.pageNumber || 1;

  useEffect(() => {
    const fetchProviders = async () => {
      const {
        data: {
          providers: newProviders,
          numberOfProviders: newNumberOfProviders,
        },
      } = await wevedoService.getProvidersByFilters(
        supplierCategory,
        currentPage,
        filterOptions,
      );

      setProviders(newProviders);
      setNumberOfProviders(newNumberOfProviders);
    };
    fetchProviders();
  }, [wevedoService, currentPage, supplierCategory, filterOptions]);

  const onPaginationChange = pageNumber => {
    history.push(`/suppliers/${supplierCategory}/${pageNumber}`);
  };

  return (
    <ScreensLayoutMain
      title={supplierCategory}
      backgroundImage={backgroundImage}
    >
      <Container>
        <Row className="venues-filters d-flex d-sm-none pt-4 pb-4 mb-4">
          <Col className="d-inline">
            <SearchPanelMobile setFilterOptions={setFilterOptions} />
          </Col>
        </Row>
      </Container>

      <SearchPanel />
      <Container className="venues-results">
        <Row>
          <Col sm={4} className="results-filters d-none d-sm-inline">
            <FilterPanel setFilterOptions={setFilterOptions} />
          </Col>
          <Col sm={8} className="results-data">
            <SupplierList
              providers={providers}
              supplierCategory={supplierCategory}
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

export default ScreensSupplierFilteredList;
