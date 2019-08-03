import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar d-none d-sm-block">
    <div className="active">
      <Link to="/dashboard/user">
        <i className="fas fa-home" />
      </Link>
    </div>
    <div>
      <Link to="/dashboard/user/messages">
        <i className="far fa-comment-alt" />
      </Link>
    </div>
    {/* <div>
      <Link to="/">
        <i className="fas fa-scroll" />
      </Link>
    </div>
    <div>
      <Link to="/">
        <i className="fas fa-calculator" />
      </Link>
    </div> */}
    <div>
      <Link to="/">
        <i className="fas fa-power-off" />
      </Link>
    </div>
  </div>
);

export default Sidebar;
