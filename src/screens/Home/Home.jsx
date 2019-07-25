import React from 'react';
import { withTranslation } from 'react-i18next';

import {
  Image,
  Row,
  Container,
  Col,
  Form,
  Button,
  Carousel,
} from 'react-bootstrap';
import searchicon from '../../assets/images/search-icon.png';
import calendar from '../../assets/images/calendar.png';
import chat from '../../assets/images/chat-icon.png';
import weddingdress from '../../assets/images/wedding dress.png';
import musicphoto from '../../assets/images/music.png';
import florist from '../../assets/images/florist.png';
import photography from '../../assets/images/photography.png';
import decoration from '../../assets/images/decoration.png';
import serches1 from '../../assets/images/serches1.png';
import serches2 from '../../assets/images/serches2.png';
import serches3 from '../../assets/images/serches3.png';
import serches4 from '../../assets/images/serches4.png';

import ScreensLayoutsMain from '../Layouts/Main';

const ScreensHome = ({ t }) => {
  return (
    <ScreensLayoutsMain>
      <div className="section section-header-half mainpagebg">
        <Container className="h-100 w-100 align-items-center">
          <Row className="h-100 align-items-center">
            <Col sm={12} className="text-center text-uppercase">
              <h4>Special moment</h4>
              <h1>
                We can make <br /> it happen
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
          <Col sm={4} xs={12} className="p-3">
            <div>
              <Image src={searchicon} alt="search-icon" />
              <p className="mt-4">{t('home.howItWorks.boxOne')}</p>
            </div>
          </Col>
          <Col sm={4} xs={12} className="p-3">
            <div>
              <Image src={calendar} alt="calendar-icon" />
              <p className="mt-4">{t('home.howItWorks.boxTwo')}</p>
            </div>
          </Col>
          <Col sm={4} xs={12} className="p-3">
            <div>
              <Image src={chat} alt="chat-icon" />
              <p className="mt-4">{t('home.howItWorks.boxThree')}</p>
            </div>
          </Col>
        </Row>
        <div className="d-none d-sm-none d-md-inline">
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
        </div>
        <div className="d-block d-sm-block d-md-none">
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={weddingdress} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={weddingdress} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={weddingdress} alt="" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </div>
      </Container>

      <SearchForm t={t} />

      <div className="popularserches">
        <Container className="pb-3 pb-sm-5">
          <Row>
            <Col sm={6}>
              <h3 className="text-uppercase">Popular venue serches</h3>
              <p className="d-none d-sm-block">
                At some stage in all our lives we want clearer, fresher, younger
                looking skin. Well it can be achieved without spending a lot of
                money.
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
          <Col xs={4} sm={3} className="p-0 overlayed">
            <img src={serches1} alt="" />
            <div className="overlay">
              <i className="fa fa-search fa-2x" />
            </div>
          </Col>
          <Col xs={4} sm={3} className="p-0 overlayed">
            <img src={serches2} alt="" />
            <div className="overlay">
              <i className="fa fa-search fa-2x" />
            </div>
          </Col>
          <Col xs={4} sm={3} className="p-0 overlayed">
            <img src={serches3} alt="" />
            <div className="overlay">
              <i className="fa fa-search fa-2x" />
            </div>
          </Col>
          <Col sm={3} className="p-0 overlayed d-none d-sm-flex">
            <img src={serches4} alt="" />
            <div className="overlay">
              <i className="fa fa-search fa-2x" />
            </div>
          </Col>
        </Row>
      </div>
    </ScreensLayoutsMain>
  );
};

const SearchForm = ({ t }) => (
  <Row className="findseparator d-flex align-items-center text-center">
    <Col sm={12}>
      <h1>{t('home.findForm.title')}</h1>
      <Form>
        <Form.Row>
          <Col className="boxed-form">
            <Row>
              <Col sm={6} md>
                <Form.Control as="select">
                  <option>{t('home.findForm.category')}</option>
                  <option>{t('home.findForm.options')}</option>
                </Form.Control>
              </Col>
              <div className="divider d-none d-sm-none d-md-inline" />
              <Col sm={6} md>
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
);

export default withTranslation('common')(ScreensHome);
