import React, { useState, useContext, useEffect, Fragment } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { withTranslation } from 'react-i18next';

import { Form, Row, Col, FormGroup, Image, Button } from 'react-bootstrap';
import { WevedoServiceContext } from '../../../../../../contexts';

import './ImageUpload.scss';

import imageUpload from '../../../../../../assets/images/uploadImg.png';

import config from '../../../../../../config';
import { limitArray, arrayToObject } from '../../../../../../helpers';

const DashboardBusinessProfileFormsImageUpload = ({ user, updateUser, t }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoadingPhotos, setIsLoadingPhotos] = useState(false);

  useEffect(() => {
    if (user.providerImages) {
      setPhotos(Object.values(user.providerImages));
    }
  }, [user]);

  const wevedoService = useContext(WevedoServiceContext);

  const loadPhotosToServer = async photosToServer => {
    const formData = new FormData();
    photosToServer.forEach((photo, index) => formData.append(index, photo));

    try {
      const { data: cloudinaryPhotos } = await wevedoService.loadImagesToServer(
        formData,
      );

      return cloudinaryPhotos;
    } catch (err) {
      return console.error(err);
    }
  };

  const onDrop = async acceptedFiles => {
    const newPhotos = acceptedFiles.map(photo => URL.createObjectURL(photo));
    const updatedPhotos = [...photos, ...newPhotos];

    setIsLoadingPhotos(true);

    const photosOnServer = await loadPhotosToServer(acceptedFiles);
    updateUser()({
      providerImages: arrayToObject(
        limitArray(
          [
            ...photos,
            ...photosOnServer.map(({ secure_url: secureURL }) => secureURL),
          ],
          config.maximumNumberOfProviderPhotos,
        ),
      ),
    });

    setPhotos(limitArray(updatedPhotos, config.maximumNumberOfProviderPhotos));
    setIsLoadingPhotos(false);
  };

  const onDeletePhoto = async photoIndex => {
    const leftPhotos = photos.filter((photo, index) => index !== photoIndex);
    updateUser()({ providerImages: [...leftPhotos] });
    setPhotos(leftPhotos);
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

  const PreviewZone = () => (
    <Fragment>
      {photos.map((photo, index) => (
        <Col md={4} xs={12} key={uniqid()}>
          <div className="position-relative">
            <Image className="preview-zone__photo my-2" src={photo} rounded />
            <Button
              className="modal-close-btn  modal-close-btn_red"
              onClick={() => onDeletePhoto(index)}
              variant="link"
            >
              <i className="fas fa-times fa-2x" />
            </Button>
          </div>
        </Col>
      ))}
      {isLoadingPhotos && (
        <Col md={4} xs={12} key={uniqid()}>
          <div className="position-relative">
            <div className="preview-zone__photo preview-zone__photo_loading d-flex my-2 rounded">
              <p className="m-auto">{t('imgUpload.loading')}</p>
            </div>
          </div>
        </Col>
      )}
    </Fragment>
  );

  return (
    <Form>
      <FormGroup className="image-upload__form">
        {photos.length < config.maximumNumberOfProviderPhotos && (
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
        )}
        <Row className="mt-4">
          <PreviewZone />
        </Row>
      </FormGroup>
    </Form>
  );
};

export default withTranslation('common')(
  DashboardBusinessProfileFormsImageUpload,
);
