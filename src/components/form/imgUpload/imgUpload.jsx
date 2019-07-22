import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Container, Row, Col, Button, Form, Image, Alert,
} from 'react-bootstrap';

import { updateUser } from '../../../actions/user-actions';
import Logo from '../../../assets/images/symbol.png';
import './imgUpload.scss';

class ImgUpload extends React.Component {
  state = {
    files: [],
    errorMsg: null,
  };

  handleUpload = e => {
    const newImg = e.target.files[0];
    if (newImg) {
      this.setState({ files: [...this.state.files, URL.createObjectURL(newImg)] });
    }
  };

  handleDrop = files => {
    const droppedImgs = files.map(img => URL.createObjectURL(img));
    this.setState({ files: [...this.state.files, ...droppedImgs] });
  };

  handleDelete = index => {
    const { files } = this.state;
    const filteredImgs = files.filter(img => files.indexOf(img) !== index);
    this.setState({ files: filteredImgs });
  };

  handleNextStep = () => {
    const { updateUser } = this.props;
    const { files } = this.state;
    if (files.length < 3) {
      this.setState({ errorMsg: 'Please, provide at least 3 photos.' });
    } else {
      const photoObject = files.reduce((acc, photo, index) => {
        acc[index] = photo;
        return acc;
      }, {});
      updateUser(photoObject);
      this.props.history.push('/service-info');
    }
  };

  render() {
    const { errorMsg } = this.state;
    const { files } = this.state;
    const customClassName = files.length
      ? 'custom-height-with-photos'
      : 'custom-hight-without-photos';
    return (
      <React.Fragment>
        <Container className="business-signup-config">
          <Row className="mt-5 mb-5">
            <Col>
              <Link to="/">
                <img src={Logo} width="130px" alt="wevedo" />
              </Link>
            </Col>
          </Row>
          <Row className="pt-4 pb-4">
            <Col sm={12}>
              <h6 className="text-uppercase text-proxima-bold">Upload Photos</h6>
              <hr className="hr-md" />
            </Col>
            <Col
              sm={12}
              className={`d-flex mt-2 mb-2 custom-bg rounded text-center custom-border ${customClassName}`}
            >
              <Form className="m-auto">
                <DragAndDrop handleDrop={this.handleDrop}>
                  <label htmlFor="fileUpload">
                    <div className="p-5">
                      <span className="font-weight-bold">Upload photos </span>
                      or just drag and drop
                      <br />
                      <span className="text-muted">+ Add at least 3 Photos</span>
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

            {files
              ? files.map((src, i) => (
                <Col
                  sm={4}
                  key={i}
                  className="position-relative"
                  onClick={() => this.handleDelete(i)}
                >
                  <h3 className="delete-icon">&times;</h3>
                  <Image src={src} alt="new img" fluid />
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
                Next step
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

export default connect(
  null,
  mapDispatchToProps,
)(ImgUpload);
