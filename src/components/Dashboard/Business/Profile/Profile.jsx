import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { WevedoServiceContext } from '../../../../contexts';
import { updateUser } from '../../../../actions/user-actions';
import DashboardBusinessProfileFormsBasicInfo from './forms/BasicInfo';
import DashboardBusinessProfileFormsContactDetails from './forms/ContactDetails';
import DashboardBusinessProfileFormsImageUpload from './forms/ImageUpload';

const DashboardBusinessProfile = ({ user, updateUser }) => {
  const [isSaving, setIsSaving] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  const handleSave = async () => {
    setIsSaving(true);

    await updateUser(wevedoService.updateProfile)({
      bio: user.bio,
      minPrice: user.minPrice,
      maxPrice: user.maxPrice,
      facilities: user.facilities,
      fullName: user.fullName,
      website: user.websiteo,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
      regionName: user.regionName,
      country: user.country,
      postcode: user.postcode,
      providerImages: user.providerImages,
    });

    setIsSaving(false);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-background" />
      <Container className="dashboard-business__profile">
        <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          Basic Info{' '}
        </h6>
        <DashboardBusinessProfileFormsBasicInfo
          user={user}
          updateUser={updateUser}
          updateProfile={wevedoService.updateProfile}
        />
        <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          Contact Details{' '}
        </h6>
        <DashboardBusinessProfileFormsContactDetails
          user={user}
          updateUser={updateUser}
          updateProfile={wevedoService.updateProfile}
        />
        <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          Upload Photos{' '}
        </h6>
        <DashboardBusinessProfileFormsImageUpload
          user={user}
          updateUser={updateUser}
          updateProfile={wevedoService.updateProfile}
        />
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
        <Row>
          <Col className="text-uppercase mt-2 mb-4">
            <Button size="lg" onClick={handleSave} disabled={isSaving}>
              Save
            </Button>
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
