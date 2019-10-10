import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { compose } from 'redux';

import { Container, Row, Col } from 'react-bootstrap';

import DashboardAccountFormsNameChange from './Form/NameChange';
import DashboardAccountFormsEmailChange from './Form/EmailChange';
import DashboardAccountFormsImageChange from './Form/ImageChange';
import DashboardAccountFormPasswordChange from './Form/PasswordChange';
import DashboardAccountFormsPhoneNumberChange from './Form/PhoneNumberChange';

import { WevedoServiceContext } from '../../../contexts';

import { updateUser } from '../../../actions/user-actions';

const DashboardAccount = ({ user, updateUser, t }) => {
  const wevedoService = useContext(WevedoServiceContext);
  return (
    <div className="dashboard">
      <div className="dashboard-background" />
      <Container className="dashboard-business__profile">
        <h6 className="mb-3 mb-sm-5 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          {t('dashboard.account.yourAccount')}{' '}
        </h6>
        <Row>
          <Col>
            <div className="dashboard-business__profile__whitebox">
              <Row>
                <DashboardAccountFormsImageChange
                  profileImageURL={user.profileImageURL}
                  updateProfile={wevedoService.updateProfile}
                  loadImagesToServer={wevedoService.loadImagesToServer}
                  updateUser={updateUser}
                />
                <Col sm={9}>
                  <Col sm={12} className="mb-4">
                    <DashboardAccountFormsNameChange
                      fullName={user.fullName}
                      updateProfile={wevedoService.updateProfile}
                      updateUser={updateUser}
                    />
                  </Col>

                  <Col sm={12} className="mb-4">
                    <DashboardAccountFormsPhoneNumberChange
                      phoneNumber={user.phoneNumber}
                      updateProfile={wevedoService.updateProfile}
                      updateUser={updateUser}
                    />
                  </Col>

                  <Col sm={12} className="mb-4">
                    <DashboardAccountFormsEmailChange
                      email={user.email}
                      updateProfile={wevedoService.updateProfile}
                      updateUser={updateUser}
                    />
                  </Col>
                  <Col sm={12}>
                    <DashboardAccountFormPasswordChange email={user.email} />
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(DashboardAccount);
