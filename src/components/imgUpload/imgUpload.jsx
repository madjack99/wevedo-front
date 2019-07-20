import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Button, Form, Image,
} from 'react-bootstrap';
import Logo from '../../assets/images/symbol.png';
import './imgUpload.scss';

class ImgUpload extends React.Component {
  state = {
    files: [],
  };

  handleChange = e => {
    const newImg = e.target.files[0];
    this.setState({ files: [...this.state.files, URL.createObjectURL(newImg)] });
  };

  render() {
    const { files } = this.state;
    const customClassName = files.length ? 'customHeightWithPhotos' : 'customHightWithoutPhotos';
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
              className={`d-flex mt-2 bg-info rounded text-center customBorder ${customClassName}`}
            >
              <Form className="m-auto">
                <label htmlFor="fileUpload">
                  <div>
                    <span className="font-weight-bold">Upload photos </span>
                    or just drag and drop box
                    <br />
                    <span className="text-muted">+ Add at least 3 Photos</span>
                  </div>
                </label>
                <br />
                <input
                  type="file"
                  id="fileUpload"
                  className="d-none"
                  onChange={this.handleChange}
                />
              </Form>
            </Col>

            {files
              ? files.map((src, i) => (
                <Col sm={4} key={i}>
                  <Image src={src} alt="new img" fluid />
                </Col>
              ))
              : null}

            <Col sm={12} className="text-right text-uppercase mt-2 mb-4">
              <Button href="/businesssignup-step2" size="lg">
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

export default ImgUpload;
