import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import {
  Nav,
  Navbar,
  NavDropdown,
  ButtonToolbar,
  Button,
  Row,
  Col,
  Modal,
  Badge,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import {
  getLargestRegions,
  getLargestCounties,
  getLargestCities,
  showIpDetectedOrUserSelectedCountry,
} from '../../helpers';

import './Header.scss';

import { detectCountryByIp, selectCountry } from '../../actions/user-actions';

import logo from '../../assets/images/symbol.png';
import defaultAvatar from '../../assets/images/default-avatar.png';

import StickyNotification from '../StickyNotification';

import { WevedoServiceContext } from '../../contexts';
import config from '../../config';

const Header = ({
  isLoggedIn,
  categories,
  user,
  t,
  ipDetectedCountry,
  detectCountryByIp,
  userSelectedCountry,
  selectCountry,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [locationModalShow, setLocationModalShow] = useState(false);

  const calculatedCountry = showIpDetectedOrUserSelectedCountry(
    ipDetectedCountry,
    userSelectedCountry,
  );

  useEffect(() => {
    detectCountryByIp();
  }, [detectCountryByIp]);

  return (
    <React.Fragment>
      <Navbar fixed="top" bg="light" variant="light" expand="lg">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="text-uppercase mr-auto">
            <LinkContainer to="/suppliers/Venue">
              <Nav.Link className="font-weight-bold">
                {t('header.venues')}
              </Nav.Link>
            </LinkContainer>

            <CategoryDropdown categories={categories} t={t} />
            <Nav.Link
              onClick={() => setModalShow(true)}
              className="d-block d-lg-none"
            >
              <span className="font-weight-bold">
                {t('header.suppliers')}{' '}
                <i className="fa fa-chevron-right ml-2" />
              </span>
            </Nav.Link>
            <SubMenu
              show={modalShow}
              onHide={() => setModalShow(false)}
              categories={categories}
              t={t}
            />

            <LocationDropdown
              user={user}
              t={t}
              calculatedCountry={calculatedCountry}
              selectCountry={selectCountry}
            />
            <Nav.Link
              onClick={() => setLocationModalShow(true)}
              className="d-block d-lg-none"
            >
              <span className="font-weight-bold">
                {calculatedCountry} <i className="fa fa-chevron-right ml-2" />
              </span>
            </Nav.Link>
            <LocationSubMenu
              show={locationModalShow}
              onHide={() => setLocationModalShow(false)}
              calculatedCountry={calculatedCountry}
              selectCountry={selectCountry}
              user={user}
              t={t}
            />
          </Nav>

          {isLoggedIn ? <ProfileArea user={user} /> : <EnterButtons t={t} />}
        </Navbar.Collapse>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
      </Navbar>
      <StickyNotification user={user} />
    </React.Fragment>
  );
};

const ChangeCountryModal = ({ selectCountry, t }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleSelect = e => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = e => {
    if (selectedCountry) {
      selectCountry(selectedCountry);
    }
    handleClose();
  };

  const { allowedInCountries } = config;
  return (
    <React.Fragment>
      <div
        className="view-all-btn mr-5 text-danger country-modal"
        onClick={handleShow}
      >
        {t('header.changeRegion')} <i className="fa fa-arrow-right" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t('header.chooseCountry')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allowedInCountries.map(country => {
            return (
              <div key={country} className="selected-country">
                <label htmlFor={`${country}`}>
                  <input
                    type="radio"
                    value={country}
                    name="selectCountry"
                    onClick={handleSelect}
                    id={country}
                  />
                  {country}
                </label>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            {t('header.close')}
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            {t('header.chooseCountry')}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

const LocationDropdown = ({ user, t, calculatedCountry, selectCountry }) => {
  const [currentlyOver, setCurrentlyOver] = useState('region');
  return (
    <NavDropdown title={calculatedCountry} className="d-none d-lg-block">
      <Row>
        <div className="active-menu d-none d-lg-block" />
        <Col sm="auto" className="text-left">
          <NavDropdown.Item
            className="search-label mb-3"
            onMouseOver={e => setCurrentlyOver('region')}
          >
            {t('header.searchRegion')}
          </NavDropdown.Item>
          <NavDropdown.Item
            className="search-label mb-3"
            onMouseOver={e => setCurrentlyOver('county')}
          >
            {t('header.searchCounty')}
          </NavDropdown.Item>
          <NavDropdown.Item
            className="search-label mb-3"
            onMouseOver={e => setCurrentlyOver('town')}
          >
            {t('header.searchTown')}
          </NavDropdown.Item>
        </Col>
        <Col
          className={`search-result region-areas ${
            currentlyOver === 'region' ? 'search-result-active' : ''
          }`}
        >
          <Row>
            <Col className="border-right">
              {/* Show different regions depending on the country detected
              by browser IP and set to store,
              by default show regions in the UK */}
              {getLargestRegions(calculatedCountry)
                .slice(0, 4)
                .map(region => (
                  <LocationDropdownItem
                    key={uniqid()}
                    name={region}
                    searchArea="regionName"
                  />
                ))}
            </Col>
            <Col>
              {getLargestRegions(calculatedCountry)
                .slice(4)
                .map(region => (
                  <LocationDropdownItem
                    key={uniqid()}
                    name={region}
                    searchArea="regionName"
                  />
                ))}
            </Col>
          </Row>
          <div className="mt-3 region-search-basement">
            <Link to="/locations/regionName" className="view-all-btn">
              {t('header.viewMoreRegions')}
              <i className="fa fa-arrow-right" />
            </Link>
            <ChangeCountryModal selectCountry={selectCountry} t={t} />
          </div>
        </Col>
        <Col
          className={`search-result county-areas ${
            currentlyOver === 'county' ? 'search-result-active' : ''
          }`}
        >
          <Row>
            <Col className="border-right">
              {getLargestCounties(calculatedCountry)
                .slice(0, 4)
                .map(region => (
                  <LocationDropdownItem
                    key={uniqid()}
                    name={region}
                    searchArea="county"
                  />
                ))}
            </Col>
            <Col>
              {getLargestCounties(calculatedCountry)
                .slice(4)
                .map(region => (
                  <LocationDropdownItem
                    key={uniqid()}
                    name={region}
                    searchArea="county"
                  />
                ))}
            </Col>
          </Row>
          <div className="mt-3">
            <Link to="/locations/county" className="view-all-btn">
              {t('header.viewMoreCounties')}
              <i className="fa fa-arrow-right" />
            </Link>
          </div>
        </Col>
        <Col
          className={`search-result town-areas ${
            currentlyOver === 'town' ? 'search-result-active' : ''
          }`}
        >
          <Row>
            <Col className="border-right">
              {getLargestCities(calculatedCountry)
                .slice(0, 4)
                .map(region => (
                  <LocationDropdownItem
                    key={uniqid()}
                    name={region}
                    searchArea="city"
                  />
                ))}
            </Col>
            <Col>
              {getLargestCities(calculatedCountry)
                .slice(4)
                .map(region => (
                  <LocationDropdownItem
                    key={uniqid()}
                    name={region}
                    searchArea="city"
                  />
                ))}
            </Col>
          </Row>
          <div className="mt-3">
            <Link to="/locations/city" className="view-all-btn">
              {t('header.viewMoreCities')}
              <i className="fa fa-arrow-right" />
            </Link>
          </div>
        </Col>
      </Row>
    </NavDropdown>
  );
};

const CategoryDropdown = ({ categories, t }) => {
  const leftCategoryColumns = categories.slice(
    0,
    Math.ceil(categories.length / 2),
  );
  const rightCategoryColumns = categories.slice(
    Math.ceil(categories.length / 2),
  );

  return (
    <NavDropdown title={t('header.suppliers')} className="d-none d-lg-block">
      <Row>
        <div className="active-menu d-none d-lg-block" />
        <Col sm={8}>
          <Row className="pt-3 pl-4">
            <Col sm={6}>
              {leftCategoryColumns.map(({ _id, name }) => (
                <CategoryDropdownItem key={_id} name={name} />
              ))}
            </Col>
            <Col sm={6}>
              {rightCategoryColumns.map(({ _id, name }) => (
                <CategoryDropdownItem key={_id} name={name} />
              ))}
            </Col>
            <Col sm={12}>
              <Link to="/suppliers/categories" className="view-all-btn">
                {t('header.viewAllSuppliers')}{' '}
                <i className="fa fa-arrow-right" />
              </Link>
            </Col>
          </Row>
        </Col>
        <Col>
          <div className="dropdown-img" />
        </Col>
      </Row>
    </NavDropdown>
  );
};

function CategoryDropdownItem({ name }) {
  return (
    <LinkContainer to={`/suppliers/${name}`}>
      <NavDropdown.Item>{name}</NavDropdown.Item>
    </LinkContainer>
  );
}

function LocationDropdownItem({ name, searchArea }) {
  return (
    <LinkContainer to={`/suppliers/Venue?${searchArea}=${name}`}>
      <NavDropdown.Item>{name}</NavDropdown.Item>
    </LinkContainer>
  );
}

function EnterButtons({ t }) {
  return (
    <ButtonToolbar className="d-flex d-lg-block flex-column-reverse">
      <LinkContainer to="/signup">
        <Button variant="primary" className="mr-2">
          {t('header.signup')}
        </Button>
      </LinkContainer>
      <LinkContainer to="/login">
        <Button variant="primary" className="mr-2">
          {t('header.login')}
        </Button>
      </LinkContainer>
      <LinkContainer to="/business/login">
        <Button variant="dark">{t('header.businessLogin')}</Button>
      </LinkContainer>
    </ButtonToolbar>
  );
}

function ProfileArea({ user }) {
  const [numberOfUnreadMessages, setNumberOfUnreadMessages] = useState(0);
  const wevedoService = useContext(WevedoServiceContext);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data: newRooms } = await wevedoService.getRooms();
      setNumberOfUnreadMessages(
        newRooms
          .filter(room =>
            user.isProvider
              ? room.unreadByProvider.length !== 0
              : room.unreadByUser.length !== 0,
          )
          .reduce(
            (acc, room) =>
              acc +
              (user.isProvider
                ? room.unreadByProvider.length
                : room.unreadByUser.length),
            0,
          ),
      );
    };

    fetchRooms();

    const intervalId = setInterval(
      () => fetchRooms(),
      config.timeForServerRequest,
    );
    return () => clearInterval(intervalId);
  }, [wevedoService, user]);

  return (
    <div className="dashboard-header__user ml-auto">
      <Link
        to="/dashboard/account"
        className="d-flex justify-content-between align-items-center"
      >
        <div className="position-relative">
          <img
            src={user.profileImageURL || defaultAvatar}
            width="40"
            height="40"
            alt="Wevedo Login"
            className="mr-2"
          />
          <Badge
            className="header__unread-message-badge"
            variant="success"
            pill
          >
            {numberOfUnreadMessages}
          </Badge>
        </div>
        <b className="ml-3 mr-4">{user.fullName || 'User'}</b>
        <i className="fa fa-chevron-down ml-2" />
      </Link>
    </div>
  );
}

const LocationSubMenu = ({
  onHide,
  user,
  t,
  calculatedCountry,
  selectCountry,
  ...rest
}) => (
  <Modal
    {...rest}
    size="lg"
    aria-labelledby="location-submenu"
    centered
    className="location-submenu"
  >
    <Modal.Body>
      <Row className="pt-2">
        <Col xs={2} className="ml-4" onClick={onHide}>
          <i className="fas fa-arrow-left fa-2x" />
        </Col>
        <Col>
          <h4 className="text-uppercase text-proxima-bold mb-5">
            {t('header.locations')}
          </h4>
          <h5 className="text-uppercase text-proxima-bold mb-3">
            {t('header.regions')}
          </h5>
          {getLargestRegions(calculatedCountry).map(name => (
            <LinkContainer
              key={uniqid()}
              to={`/suppliers/Venue?regionName=${name}`}
              onClick={onHide}
            >
              <p>{name}</p>
            </LinkContainer>
          ))}
          <Link to="/locations/regionName" className="view-all-btn">
            {t('header.viewMoreRegions')}
            <i className="fa fa-arrow-right ml-3" />
          </Link>
          <div className="sub-country-modal">
            <ChangeCountryModal selectCountry={selectCountry} t={t} />
          </div>
          <h5 className="text-uppercase text-proxima-bold mb-3">
            {t('header.counties')}
          </h5>
          {getLargestCounties(calculatedCountry).map(name => (
            <LinkContainer
              key={uniqid()}
              to={`/suppliers/Venue?county=${name}`}
              onClick={onHide}
            >
              <p>{name}</p>
            </LinkContainer>
          ))}
          <Link to="/locations/county" className="view-all-btn">
            {t('header.viewMoreCounties')}
            <i className="fa fa-arrow-right ml-3" />
          </Link>
          <h5 className="text-uppercase text-proxima-bold mb-3">
            {t('header.cities')}
          </h5>
          {getLargestCities(calculatedCountry).map(name => (
            <LinkContainer
              key={uniqid()}
              to={`/suppliers/Venue?city=${name}`}
              onClick={onHide}
            >
              <p>{name}</p>
            </LinkContainer>
          ))}
          <Link to="/locations/city" className="view-all-btn">
            {t('header.viewMoreCities')}
            <i className="fa fa-arrow-right ml-3" />
          </Link>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
);

const SubMenu = ({ categories, onHide, t, ...rest }) => (
  <Modal
    {...rest}
    size="lg"
    aria-labelledby="supplier-submenu"
    centered
    className="supplier-submenu"
  >
    <Modal.Body>
      <Row className="pt-2">
        <Col xs={2} className="ml-4" onClick={onHide}>
          <i className="fas fa-arrow-left fa-2x" />
        </Col>
        <Col>
          <h4 className="text-uppercase text-proxima-bold mb-5">
            {t('header.suppliers')}
          </h4>
          {categories.map(({ _id, name }) => (
            <LinkContainer to={`/suppliers/${name}`} onClick={onHide} key={_id}>
              <p>{name}</p>
            </LinkContainer>
          ))}
          <Link to="/suppliers/categories" className="view-all-btn">
            {t('header.viewAllSuppliers')}{' '}
            <i className="fa fa-arrow-right ml-3" />
          </Link>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
);

const mapStateToProps = ({ sessionData, categoryList, userData }) => ({
  ...sessionData,
  ...categoryList,
  ...userData,
});

const mapDispatchToProps = dispatch => ({
  detectCountryByIp: () => dispatch(detectCountryByIp()),
  selectCountry: country => dispatch(selectCountry(country)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(Header);
