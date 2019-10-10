import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import { Container, Row, Col } from 'react-bootstrap';

import DashboardMessagesInboxView from './Inbox/View';
import DashboardMessagesRoomView from './Room/View';

const DashboardMessages = ({ t }) => {
  const [currentRoom, setCurrentRoom] = useState(null);
  const [showRoom, setShowRoom] = useState(false);

  return (
    <div className="dashboard">
      <div className="dashboard-background" />
      <Container className="dashboard-business__messages">
        <Row>
          <Col xs sm={3}>
            <h6 className="text-proxima-bold">
              {' '}
              {t('dashboard.messages.allMessages')}{' '}
            </h6>
          </Col>
          <Col xs sm={1} className="text-right">
            <i className="fa fa-search" />
          </Col>
        </Row>
        <Row style={{ height: 600 }}>
          <Col className="d-flex" sm={4} xs>
            <DashboardMessagesInboxView
              onOpenRoom={room => setCurrentRoom(room)}
              onOpenModalRoom={room => {
                setCurrentRoom(room);
                setShowRoom(true);
              }}
            />
          </Col>
          {currentRoom && (
            <Col className="d-flex" sm={8}>
              <DashboardMessagesRoomView
                room={currentRoom}
                showRoom={showRoom}
                onCloseRoom={() => setShowRoom(false)}
              />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ userData }) => userData;

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
)(DashboardMessages);
