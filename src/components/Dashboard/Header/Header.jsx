import React from 'react';
import { connect } from 'react-redux';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/symbol.png';
import defaultAvatar from '../../../assets/images/default-avatar.png';

const Header = ({ user }) => {
  return (
    <React.Fragment>
      <Navbar
        className="dashboard-header d-none d-sm-flex"
        fixed="top"
        bg="light"
        variant="light"
        expand="lg"
      >
        <ProfileArea user={user} />
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
      </Navbar>

      {/* Mobile header */}
      <Navbar
        fixed="top"
        bg="light"
        variant="light"
        expand="lg"
        className="d-flex d-sm-none"
      >
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="text-uppercase mr-auto">
            <Nav.Link href="/dashboard/userhome">
              <b>Home</b>
            </Nav.Link>
            <Nav.Link href="/dashboard/messages">
              <b>Messages</b>
            </Nav.Link>
            <Nav.Link href="/dashboard/businessaccount">
              <b>Account Settings</b>
            </Nav.Link>
            <Nav.Link href="/">
              <b>Log Out</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
      </Navbar>
    </React.Fragment>
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
