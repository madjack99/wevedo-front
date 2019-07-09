import React from 'react';
import { Row, Container, Col, Form, Button, Alert } from 'react-bootstrap';

import ApiBase from '../../../api/api-base';
import config from '../../../config';
import './contact.scss';

import serches1 from '../../../assets/images/serches1.png';
import serches2 from '../../../assets/images/serches2.png';
import serches3 from '../../../assets/images/serches3.png';
import serches4 from '../../../assets/images/serches4.png';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.contactPageApi = new ApiBase();

    this.state = {
      name: '',
      email: '',
      message: '',
      errorMsg: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    const { backendUrl } = config;
    e.preventDefault();
    const { name, email, message } = this.state;
    console.log(this.state);
    if (!name || !email || !message) {
      this.setState({
        errorMsg: 'Please, fill all the fields!',
        name: '',
        email: '',
        message: ''
      });
    } else {
      this.contactPageApi
        .create(`${backendUrl}/api/contact`, { name, email, message })
        .then(res => console.log(res))
        .catch(err => console.log(err));

      this.setState({
        name: '',
        email: '',
        message: '',
        errorMsg: ''
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className='section section-header-half contact'>
          <Container className='h-100 w-100 align-items-center'>
            <Row className='h-100 align-items-center'>
              <Col sm={12} className='text-center text-uppercase'>
                <h1>Contact Us</h1>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className='mt-5 mb-5'>
          <Row className='justify-content-center mt-5 mb-5'>
            <Col sm={8} className='text-center'>
              <h4 className='text-uppercase'>Contact to wevedo</h4>
              <hr />
              <p className='mr-5 pr-5 ml-5 pl-5 text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Form className='mt-5' onSubmit={this.handleSubmit}>
                <Row>
                  <Col sm={6}>
                    <Form.Group controlId='name'>
                      <Form.Control
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Name'
                        value={this.state.name}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId='email'>
                      <Form.Control
                        onChange={this.handleChange}
                        type='email'
                        placeholder='Email'
                        value={this.state.email}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className='mt-5'>
                    <Form.Group controlId='message'>
                      <Form.Control
                        onChange={this.handleChange}
                        as='textarea'
                        placeholder='Message'
                        rows='3'
                        value={this.state.message}
                      />
                    </Form.Group>
                  </Col>
                  <Col className='text-center text-uppercase mt-5 mb-5'>
                    {this.state.errorMsg ? (
                      <Alert variant='danger'>{this.state.errorMsg}</Alert>
                    ) : null}
                    <Button size='lg' type='submit'>
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>

        <div className='popularserches'>
          <Container className='pb-5'>
            <Row>
              <Col sm={6}>
                <h3 className='text-uppercase'>Popular venue serches</h3>
                <p className='d-none d-sm-block'>
                  At some stage in all our lives we want clearer, fresher,
                  younger looking skin. Well it can be achieved without spending
                  a lot of money.
                </p>
              </Col>
              <Col sm={6}>
                <Row>
                  <Col>
                    <ul>
                      <li>Essex</li>
                      <li>Hertforshire</li>
                      <li>West Midlands</li>
                      <li>Hampshire</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>Essex</li>
                      <li>Hertforshire</li>
                      <li>West Midlands</li>
                      <li>Hampshire</li>
                    </ul>
                  </Col>
                  <Col className='d-none d-sm-block'>
                    <ul>
                      <li>Essex</li>
                      <li>Hertforshire</li>
                      <li>West Midlands</li>
                      <li>Hampshire</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Row className='m-0'>
            <Col xs={3} className='p-0 overlayed'>
              <img src={serches1} alt='' />
              <div className='overlay'>
                <i className='fa fa-search fa-2x' />
              </div>
            </Col>
            <Col xs={3} className='p-0 overlayed'>
              <img src={serches2} alt='' />
              <div className='overlay'>
                <i className='fa fa-search fa-2x' />
              </div>
            </Col>
            <Col xs={3} className='p-0 overlayed'>
              <img src={serches3} alt='' />
              <div className='overlay'>
                <i className='fa fa-search fa-2x' />
              </div>
            </Col>
            <Col xs={3} className='p-0 overlayed'>
              <img src={serches4} alt='' />
              <div className='overlay'>
                <i className='fa fa-search fa-2x' />
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
