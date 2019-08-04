import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import styled from 'styled-components';
import { Row, Col, Button, Image, Form, FormGroup } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

import './ImageUpload.scss';

import imageUpload from '../../../../../assets/images/uploadImg.png';

import { updateUser } from '../../../../../actions/user-actions';

const BusinessFormsSignupImageUpload = ({ updateUser, t, nextStep }) => {
  const [photos, setPhotos] = useState([]);

  const onDrop = acceptedFiles =>
    setPhotos([
      ...photos,
      ...acceptedFiles.map(acceptedFile => URL.createObjectURL(acceptedFile)),
    ]);

  const onDeletePhoto = photoIndex =>
    setPhotos(photos.filter((photo, index) => index !== photoIndex));

  const onSubmit = event => {
    event.preventDefault();

    const photoObject = photos.reduce(
      (acc, photo, index) => ({ ...acc, [index]: photo }),
      {},
    );

    updateUser()({ providerImages: photoObject });
    nextStep();
  };

  const getBackgroundColor = ({ isDragAccept, isDragReject }) => {
    if (isDragAccept || isDragReject) {
      return '#ecf1f9';
    }
    return '#f4f7fc';
  };

  const getBorderColor = ({ isDragAccept, isDragReject }) => {
    if (isDragAccept) {
      return '#4ea745';
    }
    if (isDragReject) {
      return '#dd868d';
    }
    return '#ced4da';
  };

  const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: ${photos.length === 0 ? 'column' : 'row'};
    align-items: center;
    justify-content: ${photos.length === 0 ? 'center' : 'start'};
    height: ${photos.length === 0 ? '400px' : '100px'};
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getBorderColor(props)};
    border-style: dashed;
    background-color: ${props => getBackgroundColor(props)};
    color: #bdbdbd;
    outline: none;
    transition: border 0.24s ease-in-out;
  `;

  const PreviewZone = props => (
    <Row {...props}>
      {photos.map((photo, index) => (
        <Col md={4} xs={12} key={uniqid()}>
          <div className="position-relative">
            <Image className="preview-zone__photo my-2" src={photo} rounded />
            <Button
              className="modal-close-btn"
              onClick={() => onDeletePhoto(index)}
              variant="link"
            >
              <i className="fas fa-times fa-2x" />
            </Button>
          </div>
        </Col>
      ))}
    </Row>
  );

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup className="image-upload__form">
        <Dropzone accept="image/*" onDrop={onDrop}>
          {({ getRootProps, getInputProps, isDragAccept, isDragReject }) => {
            return (
              <Container {...getRootProps({ isDragAccept, isDragReject })}>
                <input {...getInputProps()} />
                <img
                  className={
                    photos.length > 0 ? 'mr-5 image-upload__image_small' : ''
                  }
                  src={imageUpload}
                  alt="Upload icon"
                />
                <div
                  className={`d-flex flex-column ${
                    photos.length > 0 ? 'text-left' : 'text-center'
                  }`}
                >
                  <p
                    className={`image-upload__title mb-2 ${
                      photos.length === 0 ? 'mt-4' : 'mt-0'
                    }`}
                  >
                    <b>{t('imgUpload.uploadPhotos')}</b>{' '}
                    <span className="text-muted d-none d-md-inline">
                      {t('imgUpload.dragAndDrop')}
                    </span>
                  </p>
                  <span className="text-muted">
                    {t('imgUpload.addAtLeast')}
                  </span>
                </div>
              </Container>
            );
          }}
        </Dropzone>
        <PreviewZone className="mt-4" />
      </FormGroup>
      <FormGroup className="text-center text-md-right">
        <Button
          className="mt-4"
          type="submit"
          size="lg"
          disabled={!photos.length}
        >
          {t('business-signup.form.nextStepBtn')}
        </Button>
      </FormGroup>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  updateUser: updateUser(dispatch),
});

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(BusinessFormsSignupImageUpload);
