import React from 'react';
import { withTranslation } from 'react-i18next';
import { compose } from 'redux';

import { Container, Row, Col, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Footer.scss';

import googlePlayImage from '../../assets/images/app-google-play.png';
import appStoreImage from '../../assets/images/app-app-store.png';

const Footer = ({ t }) => (
  <React.Fragment className="footer">
    <div className="footer-border" />
    <Container className="footer">
      <Row className="h-100 align-items-center">
        <Col sm={10} className="links">
          <Nav className="text-uppercase">
            <LinkContainer to="/">
              <Nav.Link>{t('footer.wevedo')}</Nav.Link>
            </LinkContainer>
            <span className="footer-dot" />
            <LinkContainer to="/contact">
              <Nav.Link>{t('footer.contact')}</Nav.Link>
            </LinkContainer>
            <span className="footer-dot" />
            <LinkContainer to="/terms-and-conditions">
              <Nav.Link>{t('footer.terms')}</Nav.Link>
            </LinkContainer>
            <span className="footer-dot" />
            <LinkContainer to="/privacy-policy">
              <Nav.Link>{t('footer.privacy')}</Nav.Link>
            </LinkContainer>
            <span className="footer-dot" />
            <a
              className="footer__app-link mx-3"
              href="https://goo.gl/Vnw14E"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googlePlayImage} alt="Google Play" />
            </a>
            <a
              className="footer__app-link"
              href="https://goo.gl/ZRgmSZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appStoreImage} alt="App Store" />
            </a>
          </Nav>
        </Col>
        <Col sm={2} xs className="text-center social-links">
          <Row className="d-flex justify-content-center">
            <Col className="p-0" xs={2} sm={4}>
              <a
                href="https://www.instagram.com/wevedoofficial"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-instagram" />
              </a>
            </Col>
            <Col className="p-0" xs={2} sm={4}>
              <a
                href="https://www.facebook.com/wevedoofficial"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-facebook" />
              </a>
            </Col>
            <Col className="p-0" xs={2} sm={4}>
              <a
                href="https://twitter.com/wevedoofficial"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-twitter" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default compose(withTranslation('common'))(Footer);
