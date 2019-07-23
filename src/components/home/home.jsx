import React from 'react';
import { Image, Row, Container, Col, Form, Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import PopularSearches from '../pages/popularSearches';
import './home.scss';

import searchicon from '../../assets/images/search-icon.png';
import calendar from '../../assets/images/calendar.png';
import chat from '../../assets/images/chat-icon.png';
import weddingdress from '../../assets/images/wedding dress.png';
import musicphoto from '../../assets/images/music.png';
import florist from '../../assets/images/florist.png';
import photography from '../../assets/images/photography.png';
import decoration from '../../assets/images/decoration.png';

const Home = ({ t }) => (
  <React.Fragment>
    <div className="section section-header-full mainpagebg">
      <Container className="h-100 w-100 align-items-center">
        <Row className="h-100 align-items-center">
          <Col sm={12} className="text-center text-uppercase">
            <h4>{t('home.jumbotron.smallTitle')}</h4>
            <h1>
              {t('home.jumbotron.largeTitleOne')}
              <br />
              {t('home.jumbotron.largeTitleTwo')}
            </h1>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="howitworks">
      <Row>
        <Col>
          <h2 className="text-uppercase">{t('home.mainSectionTitle')}</h2>
          <hr />
        </Col>
      </Row>
      <Row className="howitworks-boxes">
        <Col className="p-3">
          <div>
            <Image src={searchicon} alt="search-icon" />
            <p className="mt-4">{t('home.howItWorks.boxOne')}</p>
          </div>
        </Col>
        <Col className="p-3">
          <div>
            <Image src={calendar} alt="calendar-icon" />
            <p className="mt-4">{t('home.howItWorks.boxTwo')}</p>
          </div>
        </Col>
        <Col className="p-3">
          <div>
            <Image src={chat} alt="chat-icon" />
            <p className="mt-4">{t('home.howItWorks.boxThree')}</p>
          </div>
        </Col>
      </Row>
      <Row className="howitworks-img">
        <Col md={5}>
          <Image src={weddingdress} alt="wedding-dress" />
        </Col>
        <Col md={4}>
          <Row>
            <Col sm={12} className="mb-4">
              <Image src={musicphoto} alt="music-photo" />
            </Col>
            <Col sm={12}>
              <Image src={florist} alt="florist-photo" />
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <Row>
            <Col sm={12} className="mb-4">
              <Image src={photography} alt="photo-icon" />
            </Col>
            <Col sm={12}>
              <Image src={decoration} alt="decoration-photo" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

    <Row className="findseparator d-flex align-items-center text-center">
      <Col sm={12}>
        <h1>{t('home.findForm.title')}</h1>
        <Form>
          <Form.Row>
            <Col className="boxed-form">
              <Row>
                <Col>
                  <Form.Control as="select">
                    <option>{t('home.findForm.category')}</option>
                    <option>{t('home.findForm.options')}</option>
                  </Form.Control>
                </Col>
                <div className="divider" />
                <Col>
                  <Form.Control
                    placeholder={t('home.findForm.locationPlaceholder')}
                  />
                </Col>
              </Row>
            </Col>
            <Col sm={3}>
              <Button variant="light" size="lg">
                {t('home.findForm.searchBtn')}
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>

    {/* <Container className="weddingtools">
      <Row>
        <Col><h2 className="text-center text-uppercase">Wedding Tools</h2><hr /></Col>
      </Row>
      <Row className="mt-5">
        <Col className="pb-3">
          <div className="weddingtools-boxes p-5">
            <Row>
              <Col xs={2}><img src={guestlist} alt=""/></Col>
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
              <Col xs={2}><img src={budget} alt=""/></Col>
              <Col>
                <h3 className="text-uppercase">Budget</h3>
                <p>Manage your wedding budget and track your
                spending to ensure you stay on budget.</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container> */}

    <PopularSearches />
  </React.Fragment>
);

export default withTranslation('common')(Home);
