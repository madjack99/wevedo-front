import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Row, Col, Badge } from 'react-bootstrap';
import ReactTimeAgo from 'react-time-ago';
import ClampLines from 'react-clamp-lines';

const DashboardMessagesInboxItem = ({ room, user: authUser }) => {
  const { user, provider: supplier } = room;
  const sender = authUser.isProvider ? user : supplier;

  const lastMessage = room.messages[room.messages.length - 1];
  const numberOfUnreadMessages = authUser.isProvider
    ? room.unreadByProvider.length
    : room.unreadByUser.length;

  return (
    <div className="dashboard-business__messageBox">
      <Row>
        <Col xs={2}>
          <img
            className="dashboard-business__messageBox-img"
            src={sender.profileImageURL}
            alt="Sender avatar"
          />
        </Col>
        <Col xs={10}>
          <Row className="d-flex mb-2">
            <Col xs={8}>
              <b className="mr-auto">{sender.fullName}</b>
            </Col>
            <Col xs={4} className="text-right">
              <small className="text-muted">
                <ReactTimeAgo date={new Date(lastMessage.createdAt)} />
              </small>
            </Col>
          </Row>
          <Row className="d-flex align-items-start">
            <Col xs={10}>
              <ClampLines
                className="text-muted"
                text={lastMessage.body}
                id="supplier-grid-text"
                ellipsis="..."
                lines={2}
                buttons={false}
                innerElement="span"
              />
            </Col>
            <Col xs={2}>
              <Badge pill variant="success">
                {numberOfUnreadMessages}
              </Badge>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ userData }) => userData;

export default compose(connect(mapStateToProps))(DashboardMessagesInboxItem);
