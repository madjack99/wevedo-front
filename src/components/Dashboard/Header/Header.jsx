import React from 'react';
import { connect } from 'react-redux';

import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/symbol.png';
import defaultAvatar from '../../../assets/images/default-avatar.png';

const Header = ({ user }) => {
  return (
    <Navbar fixed="top" bg="light" variant="light" expand="lg">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <ProfileArea user={user} />
      </Navbar.Collapse>
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

function ProfileArea({ user }) {
  return (
    <div className="dashboard-header__user ml-auto">
      <Link
        to="/dashboard/businessaccount"
        className="d-flex justify-content-between align-items-center"
      >
        <img
          src={user.profileImageURL || defaultAvatar}
          width="40"
          height="40"
          alt="Wevedo Login"
          className="mr-2"
        />
        <b className="ml-3 mr-4">{user.fullName || 'User'}</b>
        <i className="fa fa-chevron-down ml-2" />
      </Link>
    </div>
  );
}

const mapStateToProps = ({ userData }) => userData;

export default connect(mapStateToProps)(Header);
