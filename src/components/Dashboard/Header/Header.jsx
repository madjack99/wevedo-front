import React from 'react';
import { connect } from 'react-redux';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../../../assets/images/symbol.png';
import defaultAvatar from '../../../assets/images/default-avatar.png';

const DashboardHeader = ({ user }) => {
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
            {user.isProvider ? (
              <React.Fragment>
                <LinkContainer to="/dashboard/business/profile">
                  <Nav.Link>
                    <b>Business profile</b>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/dashboard/messages">
                  <Nav.Link>
                    <b>Messages</b>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/dashboard/account">
                  <Nav.Link>
                    <b>Account settings</b>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                  <Nav.Link>
                    <b>Log Out</b>
                  </Nav.Link>
                </LinkContainer>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <LinkContainer to="/dashboard/user">
                  <Nav.Link>
                    <b>Home</b>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/dashboard/messages">
                  <Nav.Link>
                    <b>Messages</b>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/dashboard/account">
                  <Nav.Link>
                    <b>Account settings</b>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                  <Nav.Link>
                    <b>Log Out</b>
                  </Nav.Link>
                </LinkContainer>
              </React.Fragment>
            )}
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
        to="/dashboard/account"
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

export default connect(mapStateToProps)(DashboardHeader);
