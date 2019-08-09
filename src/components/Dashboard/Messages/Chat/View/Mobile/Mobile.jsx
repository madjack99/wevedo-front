import React, { useEffect, useRef } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { Row, Col, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import DashboardMessagesChatItemRecipient from '../../Item/Recipient';
import DashboardMessagesChatItemSender from '../../Item/Sender';
import DashboardMessagesInput from '../../Input';

const DashboardMessagesChatViewMobile = ({
  chat,
  user: authUser,
  messages,
  unreadMessages,
  show,
  onHide,
}) => {
  const scrollbars = useRef(null);

  const { user, provider: supplier } = chat;
  const sender = authUser.isProvider ? user : supplier;
  const { _id: senderId } = sender;
  const { _id: userId } = authUser;

  useEffect(() => {
    if (!scrollbars.current) {
      return undefined;
    }

    return scrollbars.current.scrollIntoView();
  }, [messages.length]);

  return (
    <Modal
      className="send-a-message-to-customer m-0"
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="send-a-message-to-customer"
      centered
    >
      <Modal.Header>
        <Row className="w-100 align-items-center">
          <Col xs={2} className="d-flex" onClick={onHide}>
            <i className="fas fa-arrow-left fa-2x" />
          </Col>
          <Col xs={2} className="align-self-center">
            <img
              className="username-circle"
              src={sender.profileImageURL}
              alt="Sender avatar"
            />
          </Col>
          {sender.isProvider ? (
            <LinkContainer
              to={`/suppliers/details/${senderId}`}
              style={{ cursor: 'pointer' }}
            >
              <Col xs={8}>
                <p className="m-0">{authUser.fullName}</p>
              </Col>
            </LinkContainer>
          ) : (
            <Col xs={8}>
              <p className="m-0">{authUser.fullName}</p>
            </Col>
          )}
        </Row>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-end">
        <Row className="w-100 m-0">
          <Col>
            {messages.map(message =>
              message.sender === userId ? (
                <DashboardMessagesChatItemSender
                  message={message}
                  key={uniqid()}
                />
              ) : (
                <DashboardMessagesChatItemRecipient
                  message={message}
                  key={uniqid()}
                />
              ),
            )}
          </Col>
        </Row>
        <div style={{ float: 'left', clear: 'both' }} ref={scrollbars} />
      </Modal.Body>
      <Modal.Footer className="d-block">
        <DashboardMessagesInput chat={chat} />
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = ({ userData }) => userData;

export default compose(connect(mapStateToProps))(
  DashboardMessagesChatViewMobile,
);
