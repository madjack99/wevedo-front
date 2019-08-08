import React, { useState, useEffect, useContext } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';

import { WevedoServiceContext } from '../../../contexts';

import DashboardMessagesInboxView from './Inbox/View';
import DashboardMessagesChatView from './Chat/View';
import DashboardMessagesChatViewMobile from './Chat/View/Mobile';

const DashboardMessages = ({ user: authUser }) => {
  const [rooms, setRooms] = useState([]);
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  const timeOfUpdate = 1000;
  const startPooling = (handler, time) => setInterval(() => handler(), time);

  useEffect(() => {
    const fetchRooms = async () => {
      // console.log('GET ROOMS BEGIN');
      const { data: newRooms } = await wevedoService.getRooms();
      setRooms(newRooms);
    };

    fetchRooms();

    const intervalId = startPooling(fetchRooms, timeOfUpdate);

    return () => {
      // console.log('GET ROOMS END');
      clearInterval(intervalId);
    };
  }, [wevedoService]);

  useEffect(() => {
    if (!chat) {
      return undefined; // returns 'undefined'. not 'null', as the documentation requires it
    }

    const { _id: chatId } = chat;

    setUnreadMessages(
      authUser.isProvider ? chat.unreadByProvider : chat.unreadByUser,
    );

    const fetchMessages = async () => {
      // console.log('GET CHAT BEGIN');
      const { data: newMessages } = await wevedoService.getRoomMessages(chatId);
      setMessages(newMessages);
    };

    fetchMessages();

    // mark messages as read after 2 seconds after opening the chat
    setTimeout(() => {
      // console.log('READ MESSAGES');
      wevedoService.getRoom(chatId);
      setUnreadMessages(0);
    }, 5000);

    const intervalId = startPooling(fetchMessages, timeOfUpdate);

    return () => {
      // console.log('GET CHAT END');
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
        <Row>
          <Col xs sm={4}>
            {/* Desktop Inbox */}
            <DashboardMessagesInboxView
              className="d-sm-block d-none"
              rooms={rooms}
              onOpenChat={room => setChat(room)}
            />
            {/* Mobile Inbox */}
            <DashboardMessagesInboxView
              className="d-block d-sm-none"
              rooms={rooms}
              onOpenChat={room => {
                setModalShow(true);
                setChat(room);
              }}
            />
          </Col>
          {chat && (
            <Col sm={8} className="d-none d-sm-block">
              <DashboardMessagesChatView
                chat={chat}
                messages={messages}
                unreadMessages={unreadMessages}
              />
              <DashboardMessagesChatViewMobile
                chat={chat}
                messages={messages}
                unreadMessages={unreadMessages}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ userData }) => userData;

export default compose(connect(mapStateToProps))(DashboardMessages);
