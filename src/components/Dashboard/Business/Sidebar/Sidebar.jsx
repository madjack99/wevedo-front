import React from 'react';
import { Link } from 'react-router-dom';

const DashboardBusinessSidebar = () => (
  <div className="sidebar d-none d-sm-block">
    <div className="active">
      <Link to="/dashboard/business/messages">
        <i className="far fa-comment-alt" />
      </Link>
    </div>
    <div>
      <Link to="/dashboard/business/profile">
        <i className="far fa-user" />
      </Link>
    </div>
    <div>
      <Link to="/">
        <i className="fas fa-power-off" />
      </Link>
    </div>
  </div>
);

export default DashboardBusinessSidebar;
