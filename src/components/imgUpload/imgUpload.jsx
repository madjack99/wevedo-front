import React from 'react';
import {
  Container, Row, Col, Button, Form, Image,
} from 'react-bootstrap';
import Logo from '../../assets/images/symbol.png';

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
    return (
      <React.Fragment>
        <Container className="business-signup-config">
          <Row className="mt-5 mb-5">
            <Col>
              <a href="/">
                <img src={Logo} width="130px" alt="wevedo" />
              </a>
            </Col>
          </Row>
          <Row className="pt-4 pb-4">
            <Col sm={12}>
              <h6 className="text-uppercase text-proxima-bold">Upload Photos</h6>
              <hr className="hr-md" />
            </Col>
            <Col
              sm={12}
              className="mt-2 bg-info rounded text-center "
              style={{ border: 'dashed', height: 200 }}
            >
              <Form className="mt-5">
                <label htmlFor="fileUpload">drag and drop box</label>
                <br />
                <input type="file" id="fileUpload" onChange={this.handleChange} />
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
