import React from 'react';
import Dropzone from 'react-dropzone';
import { Col, Container } from 'react-bootstrap';
import addImage from '../../../../../assets/images/addimg.png';

const DashboardAccountFormsImageChange = ({
  profileImageURL,
  updateProfile,
  updateUser,
  loadImagesToServer,
}) => {
  const onDrop = async acceptedFiles => {
    const firstPhoto = acceptedFiles[0];

    const formData = new FormData();
    formData.append(1, firstPhoto);

    try {
      const { data: cloudinaryPhotos } = await loadImagesToServer(formData);
      console.log(cloudinaryPhotos);
      const newProfileImageURL = cloudinaryPhotos[0].secure_url;
      console.log(newProfileImageURL);
      updateUser(updateProfile)({ profileImageURL: newProfileImageURL });
    } catch (err) {
      console.log(err);
    }
  };
  console.log('profileImageURL:', profileImageURL);
  return (
    <Dropzone accept="image/*" onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => {
        return (
          <Col sm={3} {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="text-center">
              <img src={profileImageURL || addImage} alt="" />
              <p className="mt-2">Upload Photo</p>
            </div>
          </Col>
        );
      }}
    </Dropzone>
  );
};

export default DashboardAccountFormsImageChange;
