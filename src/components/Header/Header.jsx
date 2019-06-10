import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, ButtonToolbar, Button } from 'react-bootstrap';
import logo from '../../images/symbol.png';

class Header extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="light" variant="light" expand="lg">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="text-uppercase mr-auto">
            <Nav.Link href="#weddingtools"><b>Wedding Tools</b></Nav.Link>
            <Nav.Link href="/venues"><b>Venues</b></Nav.Link>
            <NavDropdown title="Suppliers">
              <NavDropdown.Item href="#action/3.1">Will</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">check</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">later</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ButtonToolbar>
            <Button variant="primary" className="mr-2">Login</Button>
            <Button variant="dark">Bussiness Login</Button>
          </ButtonToolbar>
        </Navbar.Collapse>
        <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
