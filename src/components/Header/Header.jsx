import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import {
  Nav,
  Navbar,
  NavDropdown,
  ButtonToolbar,
  Button,
  Row,
  Col,
  Modal,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/symbol.png';
import defaultAvatar from '../../assets/images/default-avatar.png';

const Header = ({ isLoggedIn, categories, user, t }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
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
        </Nav>
        {isLoggedIn ? <ProfileArea user={user} /> : <EnterButtons t={t} />}
      </Navbar.Collapse>
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </Navbar.Brand>
    </Navbar>
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

function EnterButtons({ t }) {
  return (
    <ButtonToolbar className="d-flex d-lg-block flex-column-reverse">
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
  return (
    <div className="dashboard-header__user ml-auto">
      <Link
        to={
          user.isProvider
            ? '/dashboard/business/account'
            : '/dashboard/user/account'
        }
        className="d-flex justify-content-between align-items-center"
      >
        <img
          src={user.profileImageURL || defaultAvatar}
          width="40"
          height="40"
          alt="Wevedo Login"
          className="mr-2"
        />
        <b className="ml-3 mr-4">{user.fullName || 'User'}</b>
        <i className="fa fa-chevron-down ml-2" />
      </Link>
    </div>
  );
}

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
