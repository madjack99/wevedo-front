import React, { useContext } from 'react';
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
          <NavDropdown title="Suppliers">
            <NavDropdown.Item href="#action/3.1">Will</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">check</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">later</NavDropdown.Item>
          </NavDropdown>
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

function Buttons() {
  return (
    <ButtonToolbar>
      <Link to="/login">
        <Button variant="primary" className="mr-2">
          Login
        </Button>
      </Link>
      <Button variant="dark">Bussiness Login</Button>
    </ButtonToolbar>
  );
}

function ProfileArea({ token, signOut }) {
  const wevedoService = useContext(WevedoServiceContext);

  return (
    <ButtonToolbar>
      <Button
        variant="dark"
        onClick={() => signOut(wevedoService, token)}
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
