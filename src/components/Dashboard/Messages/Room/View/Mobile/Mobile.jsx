import React, { useEffect, useRef } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Row, Col, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import DashboardMessagesRoomItemRecipient from '../../Item/Recipient';
import DashboardMessagesRoomItemSender from '../../Item/Sender';
import DashboardMessagesInput from '../../Input';

const DashboardMessagesRoomViewMobile = ({
  room,
  messages,
  show,
  onHide,
  onSend,
  user: authUser,
}) => {
  const scrollbars = useRef(null);

  const { user, provider: supplier } = room;
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
      className="d-block d-sm-none send-a-message-to-customer m-0"
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
            {messages.map(message => {
              const { _id: messageId } = message;
              return message.sender === userId ? (
                <DashboardMessagesRoomItemSender
                  message={message}
                  key={messageId}
                />
              ) : (
                <DashboardMessagesRoomItemRecipient
                  message={message}
                  key={messageId}
                />
              );
            })}
          </Col>
        </Row>
        <div style={{ float: 'left', clear: 'both' }} ref={scrollbars} />
      </Modal.Body>
      <Modal.Footer className="d-block">
        <DashboardMessagesInput room={room} onSend={onSend} />
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = ({ userData }) => userData;

export default compose(connect(mapStateToProps))(
  DashboardMessagesRoomViewMobile,
);
