import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Image,
  Alert,
} from 'react-bootstrap';

import './ImageUpload.scss';

import config from '../../config';

import { updateUser } from '../../actions/user-actions';

class ImageUpload extends React.Component {
  state = {
    files: [],
    errorMsg: null,
    uploading: false,
    images: [],
  };

  handleUpload = e => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch(`${config.backendUrl}/api/img-upload`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          uploading: false,
          images: [...this.state.images, ...images],
        });
      });
  };

  handleDrop = files => {
    const droppedFiles = Array.from(files);

    this.setState({ uploading: true });

    const formData = new FormData();

    droppedFiles.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch(`${config.backendUrl}/api/img-upload`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          uploading: false,
          images: [...this.state.images, ...images],
        });
      });
  };

  handleDelete = index => {
    const { images } = this.state;
    const filteredImgs = images.filter(image => image.public_id !== index);
    this.setState({ images: filteredImgs });
  };

  handleNextStep = () => {
    const { updateUser } = this.props;
    const { files } = this.state;
    if (files.length < 1) {
      this.setState({ errorMsg: 'Please, provide at least 1 photos.' });
    } else {
      const photoObject = files.reduce((acc, photo, index) => {
        acc[index] = photo;
        return acc;
      }, {});
      updateUser()({ providerImages: photoObject });
      this.props.history.push('/business/signup/service-info');
    }
  };

  render() {
    const { t } = this.props;
    const { errorMsg } = this.state;
    const { files } = this.state;
    const { images } = this.state;
    const customClassName = files.length
      ? 'custom-height-with-photos'
      : 'custom-hight-without-photos';
    return (
      <React.Fragment>
        <Container className="business-signup-config">
          <Row>
            <Col
              sm={12}
              className={`d-flex mb-2 custom-bg rounded text-center custom-border ${customClassName}`}
            >
              <Form className="m-auto">
                <DragAndDrop handleDrop={this.handleDrop}>
                  <label htmlFor="fileUpload">
                    <div className="p-5">
                      <span className="font-weight-bold">
                        {t('imgUpload.uploadPhotos')}{' '}
                      </span>
                      {t('imgUpload.dragAndDrop')}
                      <br />
                      <span className="text-muted">
                        {t('imgUpload.addAtLeast')}
                      </span>
                    </div>
                  </label>
                </DragAndDrop>
                <br />
                <input
                  type="file"
                  id="fileUpload"
                  className="d-none"
                  onChange={this.handleUpload}
                />
              </Form>
            </Col>

            {images
              ? images.map((image, i) => (
                  <Col
                    sm={4}
                    key={image.public_id}
                    className="position-relative"
                    onClick={() => this.handleDelete(image.public_id)}
                  >
                    <h3 className="delete-icon">&times;</h3>
                    <Image src={image.secure_url} alt="new img" fluid />
                  </Col>
                ))
              : null}

            <Col sm={12} className="text-right text-uppercase mt-2 mb-4">
              {errorMsg && (
                <Alert className="text-center" variant="danger">
                  {errorMsg}
                </Alert>
              )}
              <Button size="lg" onClick={this.handleNextStep}>
                {t('business-signup.form.nextStepBtn')}
                <i className="fa fa-arrow-right" />
              </Button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

class DragAndDrop extends Component {
  state = {
    dragging: false,
  };

  dropRef = React.createRef();

  handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ dragging: true });
    }
  };

  handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter > 0) return;
    this.setState({ dragging: false });
  };

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ dragging: false });
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      console.log(typeof e.dataTransfer.files);
      this.props.handleDrop(Array.from(e.dataTransfer.files));
      e.dataTransfer.clearData();
      this.dragCounter = 0;
    }
  };

  componentDidMount() {
    this.dragCounter = 0;
    const div = this.dropRef.current;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);
  }

  componentWillUnmount() {
    const div = this.dropRef.current;
    div.removeEventListener('dragenter', this.handleDragIn);
    div.removeEventListener('dragleave', this.handleDragOut);
    div.removeEventListener('dragover', this.handleDrag);
    div.removeEventListener('drop', this.handleDrop);
  }

  render() {
    return (
      <div className="position-relative" ref={this.dropRef}>
        {this.state.dragging && (
          <div className="custom-border position-absolute custom-bg-upload w-100 h-100 d-flex">
            <span className="m-auto">Drop here</span>
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
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
)(ImageUpload);
