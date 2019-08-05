import React, { useState } from 'react';

import {
  Container,
  Row,
  Col,
  Badge,
  Form,
  Button,
  Modal,
} from 'react-bootstrap';

const DashboardMessages = () => {
  const [modalShow, setModalShow] = useState(false);

  const MessageToCustomer = ({ show, onHide, ...rest }) => (
    <Modal
      show={show}
      onHide={onHide}
      {...rest}
      size="lg"
      aria-labelledby="send-a-message-to-customer"
      centered
      className="send-a-message-to-customer m-0"
    >
      <Modal.Header>
        <Row className="w-100 align-items-center">
          <Col xs={2} className="d-flex" onClick={onHide}>
            <i className="fas fa-arrow-left fa-2x" />
          </Col>
          <Col xs={2} className="align-self-center">
            <span className="username-circle">RB</span>
          </Col>
          <Col xs={8}>
            <p className="m-0">Ryan Bradley</p>
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-end">
        <Row className="w-100 m-0">
          <Col>
            <div className="dashboard-business__messageBox-message p-4">
              <p className="d-flex">
                Hi, <br />
                we are interested
              </p>
              <p className="text-right m-0">
                <small>2:15pm</small>
              </p>
            </div>
            <div className="dashboard-business__messageBox-message dashboard-business__messageBox-message-reciever p-4">
              <p className="d-flex">Ok</p>
              <p className="text-right m-0">
                <small>2:16pm</small>
              </p>
            </div>
            <div className="dashboard-business__messageBox-message p-4">
              <p className="d-flex">Ok</p>
              <p className="text-right m-0">
                <small>2:15pm</small>
              </p>
            </div>
            <div className="dashboard-business__messageBox-message dashboard-business__messageBox-message-reciever p-4">
              <p className="d-flex">Ok</p>
              <p className="text-right m-0">
                <small>2:16pm</small>
              </p>
            </div>
            <div className="dashboard-business__messageBox-message p-4">
              <p className="d-flex">Got it</p>
              <p className="text-right m-0">
                <small>2:15pm</small>
              </p>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-block">
        <div className="d-flex">
          <Form.Control
            type="text"
            placeholder="Type something..."
            className="mr-2"
          />
          <Button className="pl-4 pr-4">
            <i className="fas fa-paper-plane" />
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div className="dashboard">
      <div className="dashboard-background" />
      <Container className="dashboard-business__messages">
        <Row>
          <Col xs sm={3}>
            <h6 className="text-proxima-bold"> All Messages </h6>
          </Col>
          <Col xs sm={1} className="text-right">
            <i className="fa fa-search" />
          </Col>
        </Row>
        <Row>
          <Col xs sm={4}>
            <Row>
              {/*  // Msg Box for mobile   */}
              <span
                onClick={() => setModalShow(true)}
                className="d-flex d-sm-none"
              >
                <Col sm={12}>
                  <div className="dashboard-business__messageBox">
                    <Row>
                      <Col xs={2}>
                        <div className="dashboard-business__messageBox-img">
                          <span className="circle" />
                          <p>RB</p>
                        </div>
                      </Col>
                      <Col xs={10}>
                        <p className="d-flex">
                          <b className="mr-auto">Ryan Bradley</b>
                          <small className="text-muted">3 days ago</small>
                        </p>
                        <p className="m-0 d-flex align-items-start">
                          <span className="text-muted">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit...
                          </span>
                          <Badge pill variant="success">
                            1
                          </Badge>
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </span>
              {/*  // Msg Box for Desktop   */}
              <span className="d-none d-sm-flex">
                <Col sm={12}>
                  <div className="dashboard-business__messageBox">
                    <Row>
                      <Col xs={2}>
                        <div className="dashboard-business__messageBox-img">
                          <span className="circle" />
                          <p>RB</p>
                        </div>
                      </Col>
                      <Col xs={10}>
                        <p className="d-flex">
                          <b className="mr-auto">Ryan Bradley</b>
                          <small className="text-muted">3 days ago</small>
                        </p>
                        <p className="m-0 d-flex align-items-start">
                          <span className="text-muted">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit...
                          </span>
                          <Badge pill variant="success">
                            1
                          </Badge>
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </span>
            </Row>
          </Col>
          <Col sm={8} className="d-none d-sm-block">
            <div className="dashboard-business__messageBox pt-2 pl-0 pr-0">
              <div className="d-flex align-items-center dashboard-business__messageBox-header pl-4 pb-0">
                <div className="dashboard-business__messageBox-img dashboard-business__messageBox-img-sm">
                  <p>RB</p>
                </div>
                <p className="pl-3 pt-3">
                  <b>Ryan Bradley</b>
                </p>
              </div>
              <div className="divider m-0 mb-4" />
              <div className="dashboard-business__messageBox-message p-4">
                <p className="d-flex">
                  Hi, <br />
                  we are interested
                </p>
                <p className="text-right m-0">
                  <small>2:15pm</small>
                </p>
              </div>
              <div className="dashboard-business__messageBox-message dashboard-business__messageBox-message-reciever p-4">
                <p className="d-flex">Ok</p>
                <p className="text-right m-0">
                  <small>2:16pm</small>
                </p>
              </div>
              <div className="d-flex dashboard-business__messageBox-submit">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Type something..."
                  className="mr-2"
                />
                <Button>
                  <i className="fas fa-paper-plane" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <MessageToCustomer show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default DashboardMessages;
