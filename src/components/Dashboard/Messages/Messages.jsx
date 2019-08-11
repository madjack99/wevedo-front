import React, { useState, useEffect, useContext } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';

import config from '../../../config';
import { WevedoServiceContext } from '../../../contexts';

import DashboardMessagesInboxView from './Inbox/View';
import DashboardMessagesChatView from './Chat/View';
import DashboardMessagesChatViewMobile from './Chat/View/Mobile';

const DashboardMessages = ({ user: authUser }) => {
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  const startPooling = (handler, time) => setInterval(() => handler(), time);

  useEffect(() => {
    if (!chat) {
      return undefined; // returns 'undefined'. not 'null', as the documentation requires it
    }

    const { _id: chatId } = chat;

    setUnreadMessages(
      authUser.isProvider ? chat.unreadByProvider : chat.unreadByUser,
    );

    const fetchMessages = async () => {
      const {
        data: { messages: newMessages },
      } = await wevedoService.getRoom(chatId);
      setMessages(newMessages);
    };

    fetchMessages();

    const intervalId = startPooling(fetchMessages, config.timeForServerRequest);

    return () => {
      clearInterval(intervalId);
    };
  }, [chat, authUser, wevedoService]);

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
        <Row style={{ height: 600 }}>
          <Col className="d-flex" sm={4} xs>
            <DashboardMessagesInboxView onOpenRoom={room => setChat(room)} />
          </Col>
          {chat && (
            <React.Fragment>
              <Col className="d-none d-sm-flex" sm={8}>
                <DashboardMessagesChatView
                  chat={chat}
                  messages={messages}
                  unreadMessages={unreadMessages}
                />
              </Col>
              <Col className="d-flex d-sm-none" sm={12}>
                <DashboardMessagesChatViewMobile
                  chat={chat}
                  messages={messages}
                  unreadMessages={unreadMessages}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Col>
            </React.Fragment>
          )}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ userData }) => userData;

export default compose(connect(mapStateToProps))(DashboardMessages);
