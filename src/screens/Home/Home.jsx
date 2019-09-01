import React from 'react';
import { withTranslation } from 'react-i18next';

import { Container, Row, Col, Image } from 'react-bootstrap';

import backgroundImage from '../../assets/images/main-page1.png';
import searchicon from '../../assets/images/search-icon.png';
import calendar from '../../assets/images/calendar.png';
import chat from '../../assets/images/chat-icon.png';

import ScreensLayoutsMain from '../Layouts/Main';
import CategoryGrid from '../../components/Category/Grid';
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
      <Container>
        <div className="howitworks">
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
        </div>
        <div className="mb-5">
          <CategoryGrid />
        </div>
      </Container>
      <SearchPanel title={t('home.findForm.title')} />
    </ScreensLayoutsMain>
  );
};

export default withTranslation('common')(ScreensHome);
