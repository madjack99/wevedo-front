import React from 'react';
import { withTranslation } from 'react-i18next';

import { Image, Row, Container, Col, Carousel } from 'react-bootstrap';

import backgroundImage from '../../assets/images/main-page1.png';
import searchicon from '../../assets/images/search-icon.png';
import calendar from '../../assets/images/calendar.png';
import chat from '../../assets/images/chat-icon.png';
import weddingdress from '../../assets/images/wedding dress.png';
import musicphoto from '../../assets/images/music.png';
import florist from '../../assets/images/florist.png';
import photography from '../../assets/images/photography.png';
import decoration from '../../assets/images/decoration.png';

import ScreensLayoutsMain from '../Layouts/Main';
import SearchPanel from '../../components/Search/Panel';

const ScreensHome = ({ t }) => {
  return (
    <ScreensLayoutsMain
      title={`${t('home.jumbotron.largeTitleOne')} ${t(
        'home.jumbotron.largeTitleTwo',
      )}`}
      subtitle={t('home.jumbotron.smallTitle')}
      backgroundImage={backgroundImage}
    >
      <Container className="howitworks">
        <Row>
          <Col>
            <h2 className="text-uppercase">{t('home.mainSectionTitle')}</h2>
            <hr />
          </Col>
        </Row>
        <Row className="howitworks-boxes">
          <Col sm={4} xs={12} className="p-3">
            <div className="h-100">
              <Image src={searchicon} alt="search-icon" />
              <p className="mt-4">{t('home.howItWorks.boxOne')}</p>
            </div>
          </Col>
          <Col sm={4} xs={12} className="p-3">
            <div className="h-100">
              <Image src={calendar} alt="calendar-icon" />
              <p className="mt-4">{t('home.howItWorks.boxTwo')}</p>
            </div>
          </Col>
          <Col sm={4} xs={12} className="p-3">
            <div className="h-100">
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
      <SearchPanel title={t('home.findForm.title')} />
    </ScreensLayoutsMain>
  );
};

export default withTranslation('common')(ScreensHome);
