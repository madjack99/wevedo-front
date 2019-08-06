import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import DashboardMessagesInboxView from './Inbox/View';
import DashboardMessagesInboxViewMobile from './Inbox/View/Mobile';
import DashboardMessagesChatView from './Chat/View';
import DashboardMessagesChatViewMobile from './Chat/View/Mobile';

const DashboardMessages = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="dashboard">
      <div className="dashboard-background" />
      <Container className="dashboard-business__messages">
        <Row>
          <Col xs sm={3}>
            <h6 className="text-proxima-bold"> All Messages </h6>
          </Col>
          <Col xs sm={1} className="text-right">
            <i className="fa fa-search" />
          </Col>
        </Row>
        <Row>
          <Col xs sm={4}>
            <DashboardMessagesInboxView />
            <DashboardMessagesInboxViewMobile
              onOpenChat={() => setModalShow(true)}
            />
          </Col>
          <Col sm={8} className="d-none d-sm-block">
            <DashboardMessagesChatView />
          </Col>
          <DashboardMessagesChatViewMobile
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Row>
      </Container>
    </div>
  );
};

export default DashboardMessages;
