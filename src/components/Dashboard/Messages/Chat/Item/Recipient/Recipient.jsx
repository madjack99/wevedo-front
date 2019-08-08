import React from 'react';

const DashboardMessagesChatItemRecipient = ({ text }) => {
  return (
    <div className="dashboard-business__messageBox-message my-3 p-4">
      <p className="d-flex">{text}</p>
      <p className="text-right m-0">
        <small>2:15pm</small>
      </p>
    </div>
  );
};

export default DashboardMessagesChatItemRecipient;
