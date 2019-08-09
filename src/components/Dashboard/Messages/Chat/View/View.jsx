import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { Scrollbars } from 'react-custom-scrollbars';
import { LinkContainer } from 'react-router-bootstrap';

import DashboardMessagesChatItemRecipient from '../Item/Recipient';
import DashboardMessagesChatItemSender from '../Item/Sender';
import DashboardMessagesInput from '../Input';

const DashboardMessagesChatView = ({
  chat,
  user: authUser,
  messages,
  unreadMessages,
}) => {
  const { user, provider: supplier } = chat;
  const sender = authUser.isProvider ? user : supplier;
  const { _id: senderId } = sender;
  const { _id: userId } = authUser;

  return (
    <div className="dashboard-business__messageBox d-none d-sm-flex flex-column w-100 pt-2 px-0 mb-0">
      <div className="d-flex align-items-center dashboard-business__messageBox-header pl-4 pb-0">
        <img
          className="dashboard-business__messageBox-img dashboard-business__messageBox-img-sm"
          src={sender.profileImageURL}
          alt="Sender avatar"
        />
        {sender.isProvider ? (
          <LinkContainer
            to={`/suppliers/details/${senderId}`}
            style={{ cursor: 'pointer' }}
          >
            <p className="pl-3 pt-3">
              <b>{sender.fullName}</b>
            </p>
          </LinkContainer>
        ) : (
          <p className="pl-3 pt-3">
            <b>{sender.fullName}</b>
          </p>
        )}
      </div>
      <div className="divider m-0 mb-4" />
      <Scrollbars className="align-self-stretch">
        {messages.map(message =>
          message.sender === userId ? (
            <DashboardMessagesChatItemSender
              text={message.body}
              key={uniqid()}
            />
          ) : (
            <DashboardMessagesChatItemRecipient
              text={message.body}
              key={uniqid()}
            />
          ),
        )}
      </Scrollbars>
      <DashboardMessagesInput chat={chat} />
    </div>
  );
};

const mapStateToProps = ({ userData }) => userData;

export default compose(connect(mapStateToProps))(DashboardMessagesChatView);
