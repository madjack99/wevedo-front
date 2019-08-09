import React from 'react';
import date from 'date-and-time';

const DashboardMessagesChatItemRecipient = ({ message }) => {
  console.log(message);
  return (
    <div className="dashboard-business__messageBox-message dashboard-business__messageBox-message-reciever my-3 p-4">
      <p className="d-flex">{message.body}</p>
      <p className="text-right m-0">
        <small>{date.format(new Date(message.createdAt), 'hh:mm A')}</small>
      </p>
    </div>
  );
};

export default DashboardMessagesChatItemRecipient;
