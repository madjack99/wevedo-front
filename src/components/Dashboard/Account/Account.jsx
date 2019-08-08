import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

import NameChangeForm from './forms/nameChangeForm';
import EmailChangeForm from './forms/emailChangeForm';

import addImage from '../../../assets/images/addimg.png';

import { WevedoServiceContext } from '../../../contexts';

import { updateUser } from '../../../actions/user-actions';

const DashboardAccount = ({ user, updateUser }) => {
  const wevedoService = useContext(WevedoServiceContext);
  return (
    <div className="dashboard">
      <div className="dashboard-background" />
      <Container className="dashboard-business__profile">
        <h6 className="mb-3 mb-sm-5 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          Your Account{' '}
        </h6>
        <Row>
          <Col>
            <div className="dashboard-business__profile__whitebox">
              <Row>
                <Col sm={3}>
                  <div className="text-center">
                    <img src={addImage} alt="" />
                    <p className="mt-2">Upload Photo</p>
                  </div>
                </Col>
                <Col sm={9}>
                  <Col sm={12} className="mb-4">
                    <NameChangeForm
                      fullName={user.fullName}
                      updateProfile={wevedoService.updateProfile}
                      updateUser={updateUser}
                    />
                  </Col>

                  <Col sm={12} className="mb-4">
                    <EmailChangeForm
                      email={user.email}
                      updateProfile={wevedoService.updateProfile}
                      updateUser={updateUser}
                    />
                  </Col>
                  <Col sm={12}>
                    <div className="mb-3">
                      <p className="text-muted mb-0">
                        Want to change your password?
                      </p>
                      <b>You will recieve an email with instructions.</b>
                    </div>
                    <Button size="lg">Change password</Button>
                  </Col>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ userData }) => userData;

const mapDispatchToProps = dispatch => ({
  updateUser: updateUser(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardAccount);
