import React from 'react';

const DashboardMessagesChatItemRecipient = ({ text }) => {
  return (
    <div className="dashboard-business__messageBox-message dashboard-business__messageBox-message-reciever my-3 p-4">
      <p className="d-flex">{text}</p>
      <p className="text-right m-0">
        <small>2:16pm</small>
      </p>
    </div>
  );
};

export default DashboardMessagesChatItemRecipient;
