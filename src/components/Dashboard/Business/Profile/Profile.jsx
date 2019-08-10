import React, { useContext } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import { WevedoServiceContext } from '../../../../contexts';
import { updateUser } from '../../../../actions/user-actions';
import BasicInfoFrom from './forms/basicInfoForm';
import ContactDetailsForm from './forms/contactDetailsForm';
import ImgUploadForm from './forms/imgUploadForm';
import Icon from '../../../../assets/images/uploadImg.png';
import sample1 from '../../../../assets/images/dnd-1.png';
import sample3 from '../../../../assets/images/dnd-3.png';

const DashboardBusinessProfile = ({ user, updateUser }) => {
  const wevedoService = useContext(WevedoServiceContext);
  return (
    <div className="dashboard">
      <div className="dashboard-background" />
      <Container className="dashboard-business__profile">
        <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          Basic Info{' '}
        </h6>
        <BasicInfoFrom
          user={user}
          updateUser={updateUser}
          updateProfile={wevedoService.updateProfile}
        />
        <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          Contact Details{' '}
        </h6>
        <ContactDetailsForm
          user={user}
          updateUser={updateUser}
          updateProfile={wevedoService.updateProfile}
        />
        <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          Upload Photos{' '}
        </h6>
        <ImgUploadForm />
        <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          Upload Video{' '}
        </h6>
        <Row className="mb-5">
          <Col>
            <div className="dashboard-business__profile__whitebox">
              <Col sm={12} className="mb-4">
                <p className="text-muted">Add a Video</p>
                <Form.Control placeholder="Enter video URL" />
              </Col>
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
)(DashboardBusinessProfile);
