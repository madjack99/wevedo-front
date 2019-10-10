import React from 'react';
import Dropzone from 'react-dropzone';
import { Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import addImage from '../../../../../assets/images/addimg.png';

const DashboardAccountFormsImageChange = ({
  profileImageURL,
  updateProfile,
  updateUser,
  loadImagesToServer,
  t,
}) => {
  const onDrop = async acceptedFiles => {
    const firstPhoto = acceptedFiles[0];

    const formData = new FormData();
    formData.append(1, firstPhoto);

    try {
      const { data: cloudinaryPhotos } = await loadImagesToServer(formData);
      const newProfileImageURL = cloudinaryPhotos[0].secure_url;
      updateUser(updateProfile)({ profileImageURL: newProfileImageURL });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Col sm={3}>
      <Dropzone accept="image/*" onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => {
          return (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="text-center">
                <img
                  style={{
                    width: 150,
                    height: 150,
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                  src={profileImageURL || addImage}
                  alt="profile"
                />
                <p className="mt-2">{t('dashboard.account.uploadPhoto')}</p>
              </div>
            </div>
          );
        }}
      </Dropzone>
    </Col>
  );
};

export default withTranslation('common')(DashboardAccountFormsImageChange);
