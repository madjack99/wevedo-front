import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { fetchSignOut } from '../../../actions';
import { WevedoServiceContext } from '../../../contexts';

const DashboardSidebar = ({ user, signOut }) => {
  const wevedoService = useContext(WevedoServiceContext);

  return (
    <div className="sidebar d-none d-sm-block">
      {user.isProvider ? (
        <React.Fragment>
          <NavLink to="/dashboard/messages">
            <div>
              <i className="far fa-comment-alt" />
            </div>
          </NavLink>
          <NavLink to="/dashboard/business/profile">
            <div>
              <i className="far fa-user" />
            </div>
          </NavLink>
          <NavLink exact to="/" onClick={() => signOut(wevedoService.signOut)}>
            <div>
              <i className="fas fa-power-off" />
            </div>
          </NavLink>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NavLink to="/dashboard/user">
            <div>
              <i className="fas fa-home" />
            </div>
          </NavLink>
          <NavLink to="/dashboard/messages">
            <div>
              <i className="far fa-comment-alt" />
            </div>
          </NavLink>
          {/* <NavLink to="/">
            <div>
              <i className="fas fa-scroll" />
            </div>
          </NavLink>
          <NavLink to="/">
            <div>
              <i className="fas fa-calculator" />
            </div>
          </NavLink> */}
          <NavLink exact to="/" onClick={() => signOut(wevedoService.signOut)}>
            <div>
              <i className="fas fa-power-off" />
            </div>
          </NavLink>
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({ userData }) => userData;

const mapDispatchToProps = dispatch => ({
  signOut: fetchSignOut(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardSidebar);
