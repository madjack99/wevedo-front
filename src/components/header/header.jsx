import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';

import {
  Nav, Navbar, NavDropdown, ButtonToolbar, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './header.scss';

import { fetchSignOut } from '../../actions';
import { WevedoServiceContext } from '../contexts';
import logo from '../../assets/images/symbol.png';

function Header({ isLoggedIn, token, signOut }) {
  const [categories, setCategories] = useState([]);
  const wevedoService = useContext(WevedoServiceContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data: newCategories } = await wevedoService.getCategories();
      setCategories(newCategories);
    };
    fetchCategories();
  }, [categories.length]); // TO-DO: change dependency condition on array check with hash function

  return (
    <Navbar fixed="top" bg="light" variant="light" expand="lg">
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="text-uppercase mr-auto">
          {/* <Nav.Link><Link to="/weddingtools"><b>Wedding Tools</b></Link></Nav.Link> */}
          <Nav.Link>
            <Link to="/venues">
              <b>Venues</b>
            </Link>
          </Nav.Link>
          <CategoriesDropdown categories={categories} />
        </Nav>
        {
          isLoggedIn
            ? <ProfileArea token={token} signOut={signOut} />
            : <Buttons />
        }
      </Navbar.Collapse>

      <Navbar.Brand href="#home">
        <Link to="/">
          <img src={logo} alt="logo " />
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
}

function CategoriesDropdown({ categories }) {
  return (
    <NavDropdown title="Suppliers">
      {
        categories.map(({ name }) => <CategoryDropDownItem name={name} />)
      }
    </NavDropdown>
  );
}

function CategoryDropDownItem({ name }) {
  return <NavDropdown.Item href={name.toLowerCase()}>{name}</NavDropdown.Item>;
}

function Buttons() {
  return (
    <ButtonToolbar>
      <Link to="/login">
        <Button variant="primary" className="mr-2">
          Login
        </Button>
      </Link>
      <Link to="/business-login">
        <Button variant="dark">Bussiness Login</Button>
      </Link>
    </ButtonToolbar>
  );
}

function ProfileArea({ signOut }) {
  const wevedoService = useContext(WevedoServiceContext);

  return (
    <ButtonToolbar>
      <Button
        variant="dark"
        onClick={() => signOut(wevedoService)}
      >
        Sign Out
      </Button>
    </ButtonToolbar>
  );
}

const mapStateToProps = ({ sessionData }) => sessionData;

const mapDispatchToProps = dispatch => ({
  signOut: fetchSignOut(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
