import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/symbol.png';

class Header extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="light" variant="light" expand="lg">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="text-uppercase mr-auto">
            {/*<Nav.Link><Link to="/weddingtools"><b>Wedding Tools</b></Link></Nav.Link>*/}
            <Nav.Link><Link to="/venues"><b>Venues</b></Link></Nav.Link>
            <NavDropdown title="Suppliers">
              <NavDropdown.Item href="#action/3.1">Will</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">check</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">later</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ButtonToolbar>
            <Link to="/login"><Button variant="primary" className="mr-2">Login</Button></Link>
            <Button variant="dark">Bussiness Login</Button>
          </ButtonToolbar>
        </Navbar.Collapse>
        <Navbar.Brand href="#home"><Link to="/"><img src={logo} alt="logo"/></Link></Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
