import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { WevedoServiceContext } from '../../../../../../contexts';
import { updateUser } from '../../../../../../actions';

function ImgUploadForm() {
  const [photos, setPhotos] = useState([]);
  const [photosURL, setPhotosURL] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const wevedoService = useContext(WevedoServiceContext);

  const onDrop = acceptedFiles => {
    setPhotos([...photos, ...acceptedFiles]);
    setPhotosURL([
      ...photosURL,
      ...acceptedFiles.map(acceptedFile => URL.createObjectURL(acceptedFile)),
    ]);
  };
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  updateUser(dispatch);
};

export default connect(
  null,
  mapDispatchToProps,
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
