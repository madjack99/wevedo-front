import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import DashboardMessagesChatItemRecipient from '../Item/Recipient';
import DashboardMessagesChatItemSender from '../Item/Sender';
import DashboardMessagesInput from '../Input';

const DashboardMessagesChatView = ({
  chat,
  user: authUser,
  messages,
  unreadMessages,
}) => {
  const { _id: userId } = authUser;

  console.log(messages);
  console.log(userId);

  return (
    <div className="dashboard-business__messageBox pt-2 pl-0 pr-0">
      <div className="d-flex align-items-center dashboard-business__messageBox-header pl-4 pb-0">
        <div className="dashboard-business__messageBox-img dashboard-business__messageBox-img-sm">
          <p>RB</p>
        </div>
        <p className="pl-3 pt-3">
          <b>Ryan Bradley</b>
        </p>
      </div>
      <div className="divider m-0 mb-4" />
      {messages.map(message =>
        message.sender === userId ? (
          <DashboardMessagesChatItemSender text={message.body} key={uniqid()} />
        ) : (
          <DashboardMessagesChatItemRecipient
            text={message.body}
            key={uniqid()}
          />
        ),
      )}
      <DashboardMessagesInput chat={chat} />
    </div>
  );
};

const mapStateToProps = ({ userData }) => userData;

export default compose(connect(mapStateToProps))(DashboardMessagesChatView);
