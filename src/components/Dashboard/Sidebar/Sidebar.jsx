import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { fetchSignOut } from '../../../actions';
import { WevedoServiceContext } from '../../../contexts';

const DashboardSidebar = ({ user, signOut }) => {
  const wevedoService = useContext(WevedoServiceContext);

  return (
    <div className="sidebar d-none d-sm-block">
      {user.isProvider ? (
        <React.Fragment>
          <div className="active">
            <Link to="/dashboard/messages">
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
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="active">
            <Link to="/dashboard/user">
              <i className="fas fa-home" />
            </Link>
          </div>
          <div>
            <Link to="/dashboard/messages">
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
            <Link to="/" onClick={() => signOut(wevedoService.signOut)}>
              <i className="fas fa-power-off" />
            </Link>
          </div>
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
