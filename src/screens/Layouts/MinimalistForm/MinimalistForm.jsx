import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../../../assets/images/symbol.png';

import { withScrollToTop } from '../../../components/HOC';

const ScreensLayoutsMinimalistForm = ({ title, children }) => (
  <Container className="minimalist-form">
    <Row>
      <Col>
        <LinkContainer className="my-5" to="/">
          <img src={logo} alt="logo" />
        </LinkContainer>
      </Col>
    </Row>
    <Row className="mb-4">
      <Col>
        <p className="minimalist-form__title">{title}</p>
        <hr className="hr-md" />
      </Col>
    </Row>
    <Row>
      <Col>{children}</Col>
    </Row>
  </Container>
);

export default withScrollToTop()(ScreensLayoutsMinimalistForm);
