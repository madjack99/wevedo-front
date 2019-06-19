import React, { Component } from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import '../../sass/wevedo.scss';

import Beauty from '../../images/w-beauty.png';
import Cakes from '../../images/w-cakes.png';
import Decoration from '../../images/w-decoration.png';
import Florist from '../../images/w-florist.png';
import Music from '../../images/w-music.png';
import Rings from '../../images/w-rings.png';
import serches1 from '../../images/serches1.png';
import serches2 from '../../images/serches2.png';
import serches3 from '../../images/serches3.png';
import serches4 from '../../images/serches4.png';

class Venues extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section section-header-full wedding-suppliers">
	        <Container className="h-100 w-100 align-items-center">
            <Row className="h-100 align-items-center">
        	    <Col sm={12} className="text-center text-uppercase">
              	<h1>Wedding<br/> Suppliers</h1>
            	</Col>
            </Row>
          </Container>
        </div>
        <Row className="findseparator findseparator-sm d-flex align-items-center text-center">
          <Col sm={12}>
            <Form>
              <Form.Row>
                <Col className="boxed-form">
                  <Row>
                    <Col>
                      <Form.Control as="select">
                        <option>Category</option>
                        <option>...</option>
                      </Form.Control>
                    </Col>
                    <div className="divider"></div>
                    <Col>
                      <Form.Control placeholder="Location"/>
                    </Col>
                  </Row>
                </Col>
                <Col sm={3}>
                  <Button variant="light" size="lg">Search</Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
        <Container className="mt-5 mb-5 pt-5 pb-5 wedding-suppliers-grid">
          <Row className="mb-5">
            <Col><h2 className="text-uppercase text-center">Supplier by category</h2><hr /></Col>
          </Row>
          <Row>
            <Col sm={4} className="wedding-suppliers-grid__child">
              <img src={Beauty} alt="Beauty"/>
              <p>Beauty</p>
            </Col>
            <Col sm={4} className="wedding-suppliers-grid__child">
              <img src={Cakes} alt="Cakes"/>
              <p>Cakes</p>
            </Col>
            <Col sm={4} className="wedding-suppliers-grid__child">
              <img src={Decoration} alt="Decoration"/>
              <p>Decoration</p>
            </Col>
            <Col sm={4} className="wedding-suppliers-grid__child">
              <img src={Florist} alt="Florist"/>
              <p>Florist</p>
            </Col>
            <Col sm={4} className="wedding-suppliers-grid__child">
              <img src={Music} alt="Music"/>
              <p>Music</p>
            </Col>
            <Col sm={4} className="wedding-suppliers-grid__child">
              <img src={Rings} alt="Rings"/>
              <p>Rings</p>
            </Col>
          </Row>
          
        </Container>
        <div className="popularserches">
          <Container className="pb-5">
            <Row>
              <Col sm={6}>
                <h3 className="text-uppercase">Popular venue serches</h3>
                <p className="d-none d-sm-block">
                  At some stage in all our lives we want clearer, fresher, younger looking skin. Well it can be achieved without spending a lot of money.
                </p>
              </Col>
              <Col sm={6}>
                <Row>
                  <Col>
                    <ul>
                      <li>Essex</li>
                      <li>Hertforshire</li>
                      <li>West Midlands</li>
                      <li>Hampshire</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>Essex</li>
                      <li>Hertforshire</li>
                      <li>West Midlands</li>
                      <li>Hampshire</li>
                    </ul>
                  </Col>
                  <Col className="d-none d-sm-block">
                    <ul>
                      <li>Essex</li>
                      <li>Hertforshire</li>
                      <li>West Midlands</li>
                      <li>Hampshire</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Row className="m-0">
            <Col xs={3} className="p-0 overlayed">
              <img src={serches1} alt=""/>
              <div className="overlay">
                <i className="fa fa-search fa-2x"></i>
              </div>
            </Col>
            <Col xs={3} className="p-0 overlayed">
              <img src={serches2} alt=""/>
              <div className="overlay">
                <i className="fa fa-search fa-2x"></i>
              </div>
            </Col>
            <Col xs={3} className="p-0 overlayed">
              <img src={serches3} alt=""/>
              <div className="overlay">
                <i className="fa fa-search fa-2x"></i>
              </div>
            </Col>
            <Col xs={3} className="p-0 overlayed">
              <img src={serches4} alt=""/>
              <div className="overlay">
                <i className="fa fa-search fa-2x"></i>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Venues;
