import React, { Component } from 'react';
import styled from 'styled-components'; // to be taken out

import { Image, Row, Container, Col } from 'react-bootstrap';
import '../sass/wevedo.scss';

import searchicon from '../images/search-icon.png';
import calendar from '../images/calendar.png';
import chat from '../images/chat-icon.png';
import weddingdress from '../images/wedding dress.png';
import musicphoto from '../images/music.png';
import florist from '../images/florist.png';
import photography from '../images/photography.png';
import decoration from '../images/decoration.png';

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mainpage-bg">
          <Container className="h-100 w-100 align-items-center">
            <Row className="h-100 w-100 align-items-center">
              <Col sm={12} className="text-center text-uppercase">
                <h4>Special moment</h4>
                <h1>We can make <br/> it happen</h1>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="howitworks">
          <Container>
            <Row>
              <Col><h2 className="text-uppercase">How it works</h2><hr /></Col>
            </Row>
          
            <Row className="howitworks-boxes">
              <Col>
                <div>
                  <Image src={searchicon} alt="search-icon"/>
                  <p>Search for your perfect venue or supplier by category, location and budget.</p>
                </div>
              </Col>
              <Col>
                <div>
                  <Image src={calendar} alt="calendar-icon"/>
                  <p>See real time availability for your venue or supplier booking.</p>
                </div>
              </Col>
              <Col>
                <div>
                  <Image src={chat} alt="chat-icon"/>
                  <p>Message suppliers directly through the app to make enquiries or bookings.</p>
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
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;
