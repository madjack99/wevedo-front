import React, { Component } from 'react';
import { Row, Container, Col, Button, Carousel, Modal, Form } from 'react-bootstrap';
import '../../sass/wevedo.scss';

import slide from '../../images/supplier-slide.png';
import map from '../../images/map.png';
import modalimg from '../../images/wedding dress.png';
import serches1 from '../../images/serches1.png';
import serches2 from '../../images/serches2.png';
import serches3 from '../../images/serches3.png';
import serches4 from '../../images/serches4.png';

class Venues extends Component {
  constructor(...args) {
    super(...args);
    this.state = { modalShow: false };
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <React.Fragment>
        <div className="supplier">
	        <Container className="h-100 w-100 align-items-center">
            <Row className="h-100 align-items-center">
        	    <Col sm={12} className="text-center text-uppercase">
              	<h1>Fulham Palace</h1>
            	</Col>
            </Row>
          </Container>
        </div>
        <Container className="supplier-results">
          <Row className="mt-5 mb-5">
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide}
                    alt="supplier-slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide}
                    alt="supplier-slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide}
                    alt="supplier-slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col sm={7}>
              <h4 className="text-uppercase">Fulham Palace</h4>
              <b>Church Road, Clearwell, Forest of Dean Gloucestershire, GL16 8LG</b>
              <hr className="hr-sm m-0 mt-4 mb-4"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                voluptatem quia voluptas sit aspernatur.
              </p>
              <div className="divider"></div>
              <b className="text-uppercase">Contact</b>
              <hr className="hr-xs"/>
              <div className="d-block mb-4">
                <b className="text-uppercase text-muted">Website : </b> <b>www.fulhampalace.com</b>
              </div>
              <div className="d-block mb-4">
                <b className="text-uppercase text-muted">Email : </b> <b>fulhampalace@gmail.com</b>
              </div>
              <div className="d-block mb-4">
                <b className="text-uppercase text-muted">Number : </b> <b>+1 852 9520 696</b>
              </div>
              <div className="divider"></div>
              <b className="text-uppercase">Find us</b>
              <hr className="hr-xs"/>
              <Col className="p-0">
                <img src={map} alt="map" width="100%"/>
              </Col>
            </Col>
            <Col>
              <Row>
                <Col sm={12}>
                  <Button block size="lg" className="text-uppercase"
                  onClick={() => this.setState({ modalShow: true })}>
                  Send a message to supplier</Button>
                  <MsgToSupplier
                    show={this.state.modalShow}
                    onHide={modalClose}
                  />
                </Col>
                <Col sm={12}>
                  <div className="supplier-results-side-box">
                    <div className="mb-4">
                      <b className="text-uppercase text-muted">Budget</b>
                      <hr className="hr-xs"/>
                      <b>$8.500 - $50.000</b>
                    </div>
                    <div>
                      <b className="text-uppercase text-muted">Services</b>
                      <hr className="hr-xs"/>
                      <b>Photography, pre wedding, post wedding, albums, mini albums, digital album, high resolution photos.</b>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} className="text-right">
              <div className="divider"></div>
              <b className="supplier-results-next-btn">Next result <i className="fa fa-arrow-right"></i></b>
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

class MsgToSupplier extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="send-a-message-to-supplier"
        centered
        className="supplier-modal-msg"
      >
        <Modal.Body className="p-0">
          <Row>
            <a className="modal-close-btn" onClick={this.props.onHide}><i class="fas fa-times fa-2x"></i></a>
            <Col sm={4} className="p-0">
              <img src={modalimg} alt=""/>
            </Col>
            <Col sm={8}>
              <Form>
                <h5>Send a message to Supplier Name</h5>
                <hr className="hr-sm m-0 mt-3 mb-4"/>
                <Row>
                  <Col sm={12} className="mb-4">
                    <Form.Group controlId="">
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="">
                      <Form.Control type="number" placeholder="Mobile Number" />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mt-4 mb-4">
                    <Form.Group controlId="">
                      <Form.Control as="textarea" placeholder="Message" rows="3" />
                    </Form.Group>
                  </Col>
                  <Col className="text-center text-uppercase">
                    <Button size="lg">Send</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}
