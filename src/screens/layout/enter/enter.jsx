import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './enter.scss';

import logo from '../../../assets/images/symbol.png';

const ScreensLayoutEnter = ({
  sideBackground, welcomeTitle, welcomeSubtitle, welcomeText, children,
}) => {
  return (
    <Container className="enter-business-screen p-0" fluid>
      <Row className="w-100 m-0">
        <Col className="position-relative side-background p-0" md={6}>
          <img className="side-background-image" src={sideBackground} alt="background" />
          <div className="welcome-block">
            <h2 className="welcome-block__title">{welcomeTitle}</h2>
            <p className="welcome-block__subtitle">{welcomeSubtitle}</p>
            {
              welcomeText
                ? <p className="welcome-block__text">{welcomeText}</p>
                : null
            }
          </div>
        </Col>
        <Col className="enter-business-screen_right" md={6}>
          <LinkContainer className="mb-5" to="/">
            <img src={logo} alt="logo" />
          </LinkContainer>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default ScreensLayoutEnter;
