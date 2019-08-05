import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { fetchSignOut } from '../../../../actions';
import { WevedoServiceContext } from '../../../../contexts';

const DashboardBusinessSidebar = ({ signOut }) => {
  const wevedoService = useContext(WevedoServiceContext);

  return (
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
        <Link to="/" onClick={() => signOut(wevedoService.signOut)}>
          <i className="fas fa-power-off" />
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: fetchSignOut(dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(DashboardBusinessSidebar);
