import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Image, Row, Container, Col,
} from 'react-bootstrap';
import photoMain from '../images/main-page1.png';
import searchicon from '../images/search-icon.png';
import calendar from '../images/calendar.png';
import chat from '../images/chat-icon.png';
import weddingdress from '../images/wedding dress.png';
import musicphoto from '../images/music.png';
import florist from '../images/florist.png';
import photography from '../images/photography.png';
import decoration from '../images/decoration.png';


class MainPage extends Component {
    state = {}

    render() {
      return (
        <div>
          <Mainpage>
            <div className="text-on-photo">
              <h4 className="Butler-bold">Special moment</h4>
              <h1 className="Butler">
We can make
                <br />
                {' '}
it happen
              </h1>
            </div>
          </Mainpage>
          <HowItWorks>
            <h1>how it works</h1>
            <hr />
            <Container>
              <Row>
                <Col className="col-first">
                  <Image src={searchicon} alt="search-icon" className="center" />
                  <p>Search for your perfect venue or supplier by category, location and budget.</p>
                </Col>
                <Col className="col-first">
                  <Image src={calendar} alt="calendar-icon" className="center" />
                  <p>See real time availability for your venue or supplier booking.</p>
                </Col>
                <Col className="col-first">
                  <Image src={chat} alt="chat-icon" className="center" />
                  <p>Message suppliers directly through the app to make enquiries or bookings.</p>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{ marginTop: '100px' }}>
                <Col xs lg="5" className="col-second">
                  <Image src={weddingdress} alt="wedding-dress" />
                </Col>
                <Col xs lg="4" className="col-second">
                  <Image src={musicphoto} alt="music-photo" />
                  <Image src={florist} alt="florist-photo" />
                </Col>
                <Col xs lg="3" className="col-second">
                  <Image src={photography} alt="photo-icon" />
                  <Image src={decoration} alt="decoration-photo" />
                </Col>
              </Row>
            </Container>
          </HowItWorks>
        </div>
      );
    }
}

const HowItWorks = styled.div`

margin-top: 200px;
margin-bottom:100px;
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-top:30px;
  }



.col-second img {

}

 p{
      margin-top:30px;
      font-size: 16px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.75;
      letter-spacing: normal;
      text-align: center;
      color: var(--black);
  }
.col-first {
    height:310px;
    width: 320px;
    margin: 40px;
    border-radius: 5px;
    border: solid 1px #9b9b9b;
}

h1{
    text-align: center;
    font-size:35px;
    text-transform : uppercase;
}
hr{
    width: 71px;
  height: 3px;
  background-image: linear-gradient(60deg, #ffafbd, #ffc3a0);
}
`;

const Mainpage = styled.div`
background: url(${photoMain});
background-size: cover;
height:860px;
width:100%;

.text-on-photo {
    padding-top: 240px;
}

h1, h4 {
    text-align: center;
    color: white;
}
h4{
    font-size: 18px;
    letter-spacing: 6.3px;
}

h1 {
    text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.35);
  font-family: Butler-Black;
  font-size: 55px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.45;
  letter-spacing: 4.1px;
  text-align: center;
  color: #ffffff;
}
`;

export default MainPage;
