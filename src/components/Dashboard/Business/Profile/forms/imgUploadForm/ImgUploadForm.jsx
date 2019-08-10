import React, { useState, useContext, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { withTranslation } from 'react-i18next';

import { Form, Row, Col, FormGroup, Image, Button } from 'react-bootstrap';
import { WevedoServiceContext } from '../../../../../../contexts';
import { updateUser } from '../../../../../../actions';

import './ImageUpload.scss';

import imageUpload from '../../../../../../assets/images/uploadImg.png';

function ImgUploadForm({ user, updateUser, t }) {
  console.log('user', user);
  console.log('user provider img', user.providerImages);
  const [serverPhotos, setServerPhotos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [photosURL, setPhotosURL] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    user.providerImages && setServerPhotos(Object.values(user.providerImages));
  }, [user]);

  const wevedoService = useContext(WevedoServiceContext);

  const onDrop = acceptedFiles => {
    setPhotos([...photos, ...acceptedFiles]);
    setPhotosURL([
      ...photosURL,
      ...acceptedFiles.map(acceptedFile => URL.createObjectURL(acceptedFile)),
    ]);
  };

  const onDeleteNewPhoto = photoIndex => {
    setPhotos(photos.filter((photo, index) => index !== photoIndex));
    setPhotosURL(photosURL.filter((photoURL, index) => index !== photoIndex));
  };

  const onSubmit = async event => {
    console.log('submitting');
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

  const PreviewZoneForNewPhotos = props => (
    <Row {...props}>
      {photosURL.map((photoURL, index) => (
        <Col md={4} xs={12} key={uniqid()}>
          <div className="position-relative">
            <Image
              className="preview-zone__photo my-2"
              src={photoURL}
              rounded
            />
            <Button
              className="modal-close-btn"
              onClick={() => onDeleteNewPhoto(index)}
              variant="link"
            >
              <i className="fas fa-times fa-2x" />
            </Button>
          </div>
        </Col>
      ))}
    </Row>
  );

  const PreviewZoneForServerPhotos = props => {
    console.log('serverPhotos', serverPhotos);
    return (
      <Row {...props}>
        {serverPhotos.length === 0
          ? null
          : serverPhotos.map((serverPhotoUrl, index) => (
              <Col md={4} xs={12} key={uniqid()}>
                <div className="position-relative">
                  <Image
                    className="preview-zone__photo my-2"
                    src={serverPhotoUrl}
                    rounded
                  />
                  <Button
                    className="modal-close-btn"
                    onClick={() => onDeleteNewPhoto(index)}
                    variant="link"
                  >
                    <i className="fas fa-times fa-2x" />
                  </Button>
                </div>
              </Col>
            ))}
      </Row>
    );
  };

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
        <PreviewZoneForNewPhotos className="mt-4" />
        <PreviewZoneForServerPhotos className="mt-4" />
      </FormGroup>
      <FormGroup className="text-center text-md-right">
        <Button
          className="mt-4"
          type="submit"
          size="lg"
          disabled={!photos.length || isLoading}
        >
          {isLoading ? 'Loading...' : t('business-signup.form.nextStepBtn')}
        </Button>
      </FormGroup>
    </Form>
  );
}

const mapDispatchToProps = dispatch => ({
  updateUser: updateUser(dispatch),
});

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withTranslation('common'),
)(ImgUploadForm);

{
  /* <Row className="mb-3">
          <Col>
            <div className="busines-signup-config__uploadImg-inverse">
              <Row className="d-flex align-items-center">
                <div className="ml-sm-5 p-4 pr-sm-5">
                  <img src={Icon} width="40px" alt="" />
                </div>
                <div className="d-block align-self-center">
                  <p className="mb-2">
                    <b>Upload Photos</b>{' '}
                    <span className="text-muted">or just drag and drop</span>
                  </p>
                  <span className="text-muted">+ Add at least 3 photos</span>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="mb-3 busines-signup-config__uploadImg-loaded">
          <Col sm={4} className="mb-3">
            <div className="overlayed">
              <img src={sample1} alt="" />
              <div className="overlay">
                <i className="fas fa-pencil-alt fa-2x" />
              </div>
            </div>
          </Col>
          <Col sm={4} className="mb-3">
            <div className="overlayed">
              <img src={sample1} alt="" />
              <div className="overlay">
                <i className="fas fa-pencil-alt fa-2x" />
              </div>
            </div>
          </Col>
          <Col sm={4} className="mb-3">
            <div className="overlayed">
              <img src={sample3} alt="" />
              <div className="overlay">
                <i className="fas fa-pencil-alt fa-2x" />
              </div>
            </div>
          </Col>
        </Row> */
}
