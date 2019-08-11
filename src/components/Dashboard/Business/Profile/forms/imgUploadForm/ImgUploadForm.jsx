import React, { useState, useContext, useEffect, Fragment } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { withTranslation } from 'react-i18next';

import { Form, Row, Col, FormGroup, Image, Button } from 'react-bootstrap';
import { WevedoServiceContext } from '../../../../../../contexts';
import { updateUser } from '../../../../../../actions';

import './ImageUpload.scss';

import imageUpload from '../../../../../../assets/images/uploadImg.png';

function ImgUploadForm({ user, updateUser, t, updateProfile }) {
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

  const onDeleteServerPhoto = photoIndex => {
    setServerPhotos(
      serverPhotos.filter((servePhoto, index) => index !== photoIndex),
    );
  };

  const onSubmit = async event => {
    event.preventDefault();

    const formData = new FormData();
    photos.forEach((photo, index) => formData.append(index, photo));

    setIsLoading(true);

    try {
      const { data: cloudinaryPhotos } = await wevedoService.loadImagesToServer(
        formData,
      );

      setIsLoading(false);

      const serverPhotosObject = serverPhotos.reduce(
        (acc, photo, index) => ({
          ...acc,
          [uniqid()]: photo,
        }),
        {},
      );

      const cloudinaryPhotosObject = cloudinaryPhotos.reduce(
        (acc, photo, index) => ({
          ...acc,
          [uniqid()]: photo.secure_url,
        }),
        {},
      );

      const oldAndNewlyUploadedPhotos = Object.assign(
        {},
        serverPhotosObject,
        cloudinaryPhotosObject,
      );

      console.log('old and new photos at submit', oldAndNewlyUploadedPhotos);

      updateUser(updateProfile)({ providerImages: oldAndNewlyUploadedPhotos });

      setPhotosURL([]);
      setPhotos([]);
    } catch (err) {
      setIsLoading(false);
    }
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
    flex-direction: ${serverPhotos.length === 0 ? 'column' : 'row'};
    align-items: center;
    justify-content: ${serverPhotos.length === 0 ? 'center' : 'start'};
    height: ${serverPhotos.length === 0 ? '400px' : '100px'};
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
    <Fragment>
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
    </Fragment>
  );

  const PreviewZoneForServerPhotos = props => {
    return (
      <Fragment>
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
                    onClick={() => onDeleteServerPhoto(index)}
                    variant="link"
                  >
                    <i className="fas fa-times fa-2x" />
                  </Button>
                </div>
              </Col>
            ))}
      </Fragment>
    );
  };

  console.log('serverPhotos', serverPhotos);

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
                    serverPhotos.length > 0
                      ? 'mr-5 image-upload__image_small'
                      : ''
                  }
                  src={imageUpload}
                  alt="Upload icon"
                />
                <div
                  className={`d-flex flex-column ${
                    serverPhotos.length > 0 ? 'text-left' : 'text-center'
                  }`}
                >
                  <p
                    className={`image-upload__title mb-2 ${
                      serverPhotos.length === 0 ? 'mt-4' : 'mt-0'
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
        <Row className="mt-4">
          <PreviewZoneForServerPhotos />
          <PreviewZoneForNewPhotos />
        </Row>
      </FormGroup>
      <FormGroup>
        <Button
          className="mt-4"
          type="submit"
          size="lg"
          disabled={(!photos.length && !serverPhotos.length) || isLoading}
        >
          {isLoading ? 'Saving...' : t('serviceInfo.save')}
        </Button>
      </FormGroup>
    </Form>
  );
}

export default withTranslation('common')(ImgUploadForm);
