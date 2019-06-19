import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, ButtonToolbar, Button, Row, Col } from 'react-bootstrap';
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
              <Row>
                <Col sm={8}>
                  <Row className="pt-3">
                    <Col sm={6}>
                      <NavDropdown.Item href="#action">Photographers</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Videographers</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Florists</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Music</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Catering</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Entertainment</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Cakes</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Beauty Hair & Make-up</NavDropdown.Item>
                    </Col>
                    <Col sm={6}>
                      <NavDropdown.Item href="#action">Stationery</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Menswear</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Wedding Rings & Jewellery</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Entertainment</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Decoration & Hire</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Transport</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Planners</NavDropdown.Item>
                      <NavDropdown.Item href="#action">Marquee Hire</NavDropdown.Item>
                    </Col>
                    <Col sm={12}>
                      <a href="/weddingsuppliers" className="dropdown-view-all-btn">View all suppliers <i className="fa fa-arrow-right"></i></a>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <div className="dropdown-img"></div>
                </Col>
              </Row>
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
