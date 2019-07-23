import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { LinkContainer } from 'react-router-bootstrap';
import {
  Row, Col, Nav, Navbar, NavDropdown, ButtonToolbar, Button,
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import './header.scss';

import { fetchSignOut, fetchCategories } from '../../actions';
import { WevedoServiceContext } from '../contexts';
import logo from '../../assets/images/symbol.png';

function Header({
  isLoggedIn, token, categories, signOut, t,
}) {
  return (
    <Navbar fixed="top" bg="light" variant="light" expand="lg">
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="text-uppercase mr-auto">
          {/* <Nav.Link><Link to="/weddingtools"><b>Wedding Tools</b></Link></Nav.Link> */}
          <NavLink className="nav-link" to="/suppliers/Venue">
            <b>{t('header.venues')}</b>
          </NavLink>
          <CategoriesDropdown categories={categories} t={t} />
        </Nav>
        {isLoggedIn ? <ProfileArea token={token} signOut={signOut} t={t} /> : <Buttons t={t} />}
      </Navbar.Collapse>

      <NavLink className="navbar-brand" to="/">
        <img src={logo} alt="logo " />
      </NavLink>
    </Navbar>
  );
}

function CategoriesDropdown({ categories, t }) {
  const leftCategoryColumns = categories.slice(0, categories.length / 2);
  const rightCategoryColumns = categories.slice(categories.length / 2);

  return (
    <NavDropdown title="Suppliers">
      <Row>
        <Col sm={8}>
          <Row className="pt-3">
            <Col sm={6}>
              {leftCategoryColumns.map(({ _id, name }) => (
                <CategoryDropDownItem key={_id} name={name} />
              ))}
            </Col>
            <Col sm={6}>
              {rightCategoryColumns.map(({ _id, name }) => (
                <CategoryDropDownItem key={_id} name={name} />
              ))}
            </Col>
            <Col sm={12}>
              <Link to="/weddingsuppliers" className="dropdown-view-all-btn">
                {t('header.viewAllSuppliers')}
                {' '}
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
}

function CategoryDropDownItem({ name }) {
  return (
    <LinkContainer to={`/suppliers/${name}`}>
      <NavDropdown.Item>{name}</NavDropdown.Item>
    </LinkContainer>
  );
}

function Buttons({ t }) {
  return (
    <ButtonToolbar>
      <Link to="/login">
        <Button variant="primary" className="mr-2">
          {t('header.login')}
        </Button>
      </Link>
      <Link to="/business-login">
        <Button variant="dark">{t('header.businessLogin')}</Button>
      </Link>
    </ButtonToolbar>
  );
}

function ProfileArea({ signOut, t }) {
  const wevedoService = useContext(WevedoServiceContext);

  return (
    <ButtonToolbar>
      <Button variant="dark" onClick={() => signOut(wevedoService)}>
        {t('header.signOut')}
      </Button>
    </ButtonToolbar>
  );
}

const mapStateToProps = ({ sessionData, categoryList }) => ({
  ...sessionData,
  ...categoryList,
});

const mapDispatchToProps = dispatch => ({
  signOut: fetchSignOut(dispatch),
  getCategories: fetchCategories(dispatch),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(Header);
