import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { compose } from 'redux';

import { WevedoServiceContext } from '../../../../contexts';
import { updateUser } from '../../../../actions/user-actions';
import DashboardBusinessProfileFormsBasicInfo from './forms/BasicInfo';
import DashboardBusinessProfileFormsContactDetails from './forms/ContactDetails';
import DashboardBusinessProfileFormsImageUpload from './forms/ImageUpload';
import DashboardBusinessProfileFormsVideoUpload from './forms/VideoUpload';

const DashboardBusinessProfile = ({ user, updateUser, t }) => {
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
      website: user.website,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
      country: user.country,
      regionName: user.regionName,
      county: user.county,
      city: user.city,
      postcode: user.postcode,
      providerImages: user.providerImages,
      profileVideoURL: user.profileVideoURL,
      bookedDates: user.bookedDates,
    });

    setIsSaving(false);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-background" />
      <Container className="dashboard-business__profile">
        <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          {t('dashboard.profile.basicInfo')}
        </h6>
        <DashboardBusinessProfileFormsBasicInfo
          user={user}
          updateUser={updateUser}
          updateProfile={wevedoService.updateProfile}
        />
        <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          {t('dashboard.profile.contactDetails')}{' '}
        </h6>
        <DashboardBusinessProfileFormsContactDetails
          user={user}
          updateUser={updateUser}
          updateProfile={wevedoService.updateProfile}
        />
        <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          {t('dashboard.profile.uploadPhotos')}{' '}
        </h6>
        <DashboardBusinessProfileFormsImageUpload
          user={user}
          updateUser={updateUser}
          updateProfile={wevedoService.updateProfile}
        />
        <h6 className="mb-3 mb-sm-4 pl-3 pl-sm-0 text-proxima-bold">
          {' '}
          {t('dashboard.profile.uploadVideo')}{' '}
        </h6>
        <DashboardBusinessProfileFormsVideoUpload
          user={user}
          updateUser={updateUser}
        />
        <Row>
          <Col className="text-uppercase mt-2 mb-4">
            <Button size="lg" onClick={handleSave} disabled={isSaving}>
              {t('dashboard.profile.save')}
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(DashboardBusinessProfile);
