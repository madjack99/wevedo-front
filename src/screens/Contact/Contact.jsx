import React from 'react';
import { Row, Container, Col, Form, Button, Alert } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import backgroundImage from '../../assets/images/common-header.png';

import ApiBase from '../../api/api-base';
import config from '../../config';

import ScreensLayoutsMain from '../Layouts/Main';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.contactPageApi = new ApiBase();

    this.state = {
      name: '',
      email: '',
      message: '',
      errorMsg: '',
      successfullySent: false,
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
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
      });
    } else {
      this.contactPageApi
        .create(`${backendUrl}/api/contact`, { name, email, message })
        .then(res => {
          console.log(res);
          this.setState({
            successfullySent: true,
          });
        })
        .catch(err => console.log(err));

      this.setState({
        name: '',
        email: '',
        message: '',
        errorMsg: '',
      });
    }
  };

  render() {
    const { t } = this.props;
    return (
      <ScreensLayoutsMain
        title={t('contact.jumbotron')}
        backgroundImage={backgroundImage}
      >
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center mt-5 mb-5">
            <Col sm={8} className="text-center">
              <h4 className="text-uppercase">{t('contact.title')}</h4>
              <hr />
              <p className="mr-5 pr-5 ml-5 pl-5 text-muted">
                {t('contact.text')}
              </p>
              <Form className="mt-5" onSubmit={this.handleSubmit}>
                <Row>
                  <Col sm={6}>
                    <Form.Group controlId="name">
                      <Form.Control
                        onChange={this.handleChange}
                        type="text"
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="email">
                      <Form.Control
                        onChange={this.handleChange}
                        type="email"
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mt-5">
                    <Form.Group controlId="message">
                      <Form.Control
                        onChange={this.handleChange}
                        as="textarea"
                        placeholder={t('contact.messagePlaceholder')}
                        rows="3"
                      />
                    </Form.Group>
                  </Col>
                  <Col className="text-center text-uppercase mt-5 mb-5">
                    {this.state.errorMsg ? (
                      <Alert variant="danger">{this.state.errorMsg}</Alert>
                    ) : null}
                    {this.state.successfullySent ? (
                      <Alert variant="success">Message sent successfully</Alert>
                    ) : null}
                    <Button
                      hidden={this.state.successfullySent}
                      size="lg"
                      type="submit"
                    >
                      {t('contact.sendBtn')}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </ScreensLayoutsMain>
    );
  }
}

export default withTranslation('common')(Contact);
