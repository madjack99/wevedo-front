import React, { Component } from 'react';
import { Image, Row, Container, Col, Form, Button } from 'react-bootstrap';
import '../sass/wevedo.scss';
import searchicon from '../images/search-icon.png';
import calendar from '../images/calendar.png';
import chat from '../images/chat-icon.png';
import weddingdress from '../images/wedding dress.png';
import musicphoto from '../images/music.png';
import florist from '../images/florist.png';
import photography from '../images/photography.png';
import decoration from '../images/decoration.png';
import guestlist from '../images/guestlist-icon.png';
import budget from '../images/budget-icon.png';
import serches1 from '../images/serches1.png';
import serches2 from '../images/serches2.png';
import serches3 from '../images/serches3.png';
import serches4 from '../images/serches4.png';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mainpagebg">
          <Container className="h-100 w-100 align-items-center">
            <Row className="h-100 w-100 align-items-center">
              <Col sm={12} className="text-center text-uppercase">
                <h1>Wedding<br/> Venues</h1>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="howitworks">
          <Row>
            <Col><h2 className="text-uppercase">How it works</h2><hr /></Col>
          </Row>
          <Row className="howitworks-boxes">
            <Col className="p-3">
              <div>
                <Image src={searchicon} alt="search-icon"/>
                <p className="mt-4">Search for your perfect venue or supplier by category, location and budget.</p>
              </div>
            </Col>
            <Col className="p-3">
              <div>
                <Image src={calendar} alt="calendar-icon"/>
                <p className="mt-4">See real time availability for your venue or supplier booking.</p>
              </div>
            </Col>
            <Col className="p-3">
              <div>
                <Image src={chat} alt="chat-icon"/>
                <p className="mt-4">Message suppliers directly through the app to make enquiries or bookings.</p>
              </div>
            </Col>
          </Row>
          <Row className="howitworks-img">
            <Col md={5}>
              <Image src={weddingdress} alt="wedding-dress" />
            </Col>
            <Col md={4}>
              <Row>
                <Col sm={12} className="mb-4"><Image src={musicphoto} alt="music-photo" /></Col>
                <Col sm={12}><Image src={florist} alt="florist-photo" /></Col>
              </Row>
            </Col>
            <Col md={3}>
              <Row>
                <Col sm={12} className="mb-4"><Image src={photography} alt="photo-icon" /></Col>
                <Col sm={12}><Image src={decoration} alt="decoration-photo" /></Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Row className="findseparator d-flex align-items-center text-center">
          <Col sm={12}>
            <h1>Find your best wedding supplier by Location</h1>
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

        <Container className="weddingtools">
          <Row>
            <Col><h2 className="text-center text-uppercase">Wedding Tools</h2><hr /></Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div className="weddingtools-boxes p-5">
                <Row>
                  <Col sm={2}><img src={guestlist} alt=""/></Col>
                  <Col>
                    <h3 className="text-uppercase">Guestlist</h3>
                    <p>Seamlessly create and manage lists and RSVPs for all your events.</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="weddingtools-boxes p-5">
                <Row>
                  <Col sm={2}><img src={budget} alt=""/></Col>
                  <Col>
                    <h3 className="text-uppercase">Budget</h3>
                    <p>Manage your wedding budget and track your spending to ensure you stay on budget.</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <Row className="popularserches">
          <Container className="pb-5">
            <Row>
              <Col sm={6}>
                <h3 className="text-uppercase">Popular venue serches</h3>
                <p>
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
                  <Col>
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
          <Col sm={3} className="p-0 overlayed">
            <img src={serches1} alt=""/>
            <div class="overlay">
              <i className="fa fa-search fa-2x"></i>
            </div>
          </Col>
          <Col sm={3} className="p-0 overlayed">
            <img src={serches2} alt=""/>
            <div class="overlay">
              <i className="fa fa-search fa-2x"></i>
            </div>
          </Col>
          <Col sm={3} className="p-0 overlayed">
            <img src={serches3} alt=""/>
            <div class="overlay">
              <i className="fa fa-search fa-2x"></i>
            </div>
          </Col>
          <Col sm={3} className="p-0 overlayed">
            <img src={serches4} alt=""/>
            <div class="overlay">
              <i className="fa fa-search fa-2x"></i>
            </div>
          </Col>
        </Row>
          
      </React.Fragment>
    );
  }
}

export default Home;
