import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Enter.scss';

import logo from '../../../assets/images/symbol.png';

import { withScrollToTop } from '../../../components/HOC';

const ScreensLayoutEnter = ({
  sideBackground,
  welcomeTitle,
  welcomeSubtitle,
  welcomeText,
  children,
}) => {
  return (
    <Container className="enter-business-screen p-0" fluid>
      <Row className="w-100 m-0">
        <Col className="position-relative side-background p-0" lg={6} sm={12}>
          <img
            className="side-background-image"
            src={sideBackground}
            alt="background"
          />
          <div className="welcome-block p-3 p-sm-5">
            <h2 className="welcome-block__title">{welcomeTitle}</h2>
            <p className="welcome-block__subtitle">{welcomeSubtitle}</p>
            <div className="welcome-block__divider" />
            {welcomeText ? (
              <p className="welcome-block__text">{welcomeText}</p>
            ) : null}
          </div>
        </Col>
        <Col className="enter-business-screen_right" lg={6} sm={12}>
          <LinkContainer className="mb-5 d-none d-lg-block" to="/">
            <img src={logo} alt="logo" />
          </LinkContainer>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default withScrollToTop()(ScreensLayoutEnter);
