import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import Cookies from 'js-cookie';

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
  getGeoInfo,
  getLargestRegions,
  getLargestCounties,
  getLargestCities,
} from '../../helpers';

import './Header.scss';

import logo from '../../assets/images/symbol.png';
import defaultAvatar from '../../assets/images/default-avatar.png';

import StickyNotification from '../StickyNotification';

import { WevedoServiceContext } from '../../contexts';
import config from '../../config';

const Header = ({ isLoggedIn, categories, user, t }) => {
  const [modalShow, setModalShow] = useState(false);
  const [locationModalShow, setLocationModalShow] = useState(false);
  const [countryByIP, setCountryByIP] = useState('');

  Cookies.set('currentIPCountry', countryByIP);

  // use getIPCountry to find out current country by IP,
  // put this country to state which will be later added
  // to cookies. Depending of current country show different
  // places in getLargestRegions and etc.
  useEffect(() => {
    const getIPCountry = async () => {
      const currentIPCountry = await getGeoInfo();
      setCountryByIP(currentIPCountry);
    };
    getIPCountry();
  }, []);

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
                Suppliers <i className="fa fa-chevron-right ml-2" />
              </span>
            </Nav.Link>
            <SubMenu
              show={modalShow}
              onHide={() => setModalShow(false)}
              categories={categories}
              t={t}
            />

            <LocationDropdown user={user} t={t} />
            <Nav.Link
              onClick={() => setLocationModalShow(true)}
              className="d-block d-lg-none"
            >
              <span className="font-weight-bold">
                Locations <i className="fa fa-chevron-right ml-2" />
              </span>
            </Nav.Link>
            <LocationSubMenu
              show={locationModalShow}
              onHide={() => setLocationModalShow(false)}
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

const LocationDropdown = ({ user, t }) => {
  const [currentlyOver, setCurrentlyOver] = useState('region');
  return (
    <NavDropdown title="Locations" className="d-none d-lg-block">
      <Row>
        <div className="active-menu d-none d-lg-block" />
        <Col sm="auto" className="text-left">
          <NavDropdown.Item
            className="search-label mb-3"
            onMouseOver={e => setCurrentlyOver('region')}
          >
            Search by Region
          </NavDropdown.Item>
          <NavDropdown.Item
            className="search-label mb-3"
            onMouseOver={e => setCurrentlyOver('county')}
          >
            Search by County
          </NavDropdown.Item>
          <NavDropdown.Item
            className="search-label mb-3"
            onMouseOver={e => setCurrentlyOver('town')}
          >
            Search by Town
          </NavDropdown.Item>
        </Col>
        <Col
          className={`search-result region-areas ${
            currentlyOver === 'region' ? 'search-result-active' : ''
          }`}
        >
          <Row>
            <Col className="border-right">
              {/* Show different regions depending on the country put into cookies,
              by default show regions in the UK */}
              {getLargestRegions(Cookies.get('currentIPCountry'))
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
              {getLargestRegions(Cookies.get('currentIPCountry'))
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
          <div className="mt-3">
            <Link to="/locations/regionName" className="view-all-btn">
              View more regions
              <i className="fa fa-arrow-right" />
            </Link>
          </div>
        </Col>
        <Col
          className={`search-result county-areas ${
            currentlyOver === 'county' ? 'search-result-active' : ''
          }`}
        >
          <Row>
            <Col className="border-right">
              {getLargestCounties(user && user.appearInCountries)
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
              {getLargestCounties(user && user.appearInCountries)
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
              View more counties
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
              {getLargestCities(user && user.appearInCountries)
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
              {getLargestCities(user && user.appearInCountries)
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
              View more cities
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
    <NavDropdown title="Suppliers" className="d-none d-lg-block">
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

const LocationSubMenu = ({ onHide, user, t, ...rest }) => (
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
          <h4 className="text-uppercase text-proxima-bold mb-5">Locations</h4>
          <h5 className="text-uppercase text-proxima-bold mb-3">Regions</h5>
          {getLargestRegions(user && user.appearInCountries).map(name => (
            <LinkContainer
              key={uniqid()}
              to={`/suppliers/Venue?regionName=${name}`}
              onClick={onHide}
            >
              <p>{name}</p>
            </LinkContainer>
          ))}
          <Link to="/locations/regionName" className="view-all-btn">
            View all regions
            <i className="fa fa-arrow-right ml-3" />
          </Link>
          <h5 className="text-uppercase text-proxima-bold mb-3">Counties</h5>
          {getLargestCounties(user && user.appearInCountries).map(name => (
            <LinkContainer
              key={uniqid()}
              to={`/suppliers/Venue?county=${name}`}
              onClick={onHide}
            >
              <p>{name}</p>
            </LinkContainer>
          ))}
          <Link to="/locations/county" className="view-all-btn">
            View all counties
            <i className="fa fa-arrow-right ml-3" />
          </Link>
          <h5 className="text-uppercase text-proxima-bold mb-3">Cities</h5>
          {getLargestCities(user && user.appearInCountries).map(name => (
            <LinkContainer
              key={uniqid()}
              to={`/suppliers/Venue?city=${name}`}
              onClick={onHide}
            >
              <p>{name}</p>
            </LinkContainer>
          ))}
          <Link to="/locations/city" className="view-all-btn">
            View all cities
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
          <h4 className="text-uppercase text-proxima-bold mb-5">Suppliers</h4>
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

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
)(Header);
