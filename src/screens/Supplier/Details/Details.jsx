import React, { useState, useEffect, useContext } from 'react';
import {
  Row,
  Container,
  Col,
  Button,
  Carousel,
  Modal,
  Form,
} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import './Details.scss';

import backgroundImage from '../../../assets/images/supplier-bg.png';
import map from '../../../assets/images/map.png';
import modalimg from '../../../assets/images/wedding dress.png';

import { WevedoServiceContext } from '../../../contexts';

import ScreensLayoutMain from '../../Layouts/Main';

const Supplier = ({ match, t }) => {
  const [supplier, setSupplier] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const wevedoService = useContext(WevedoServiceContext);
  const supplierId = match.params.id;

  useEffect(() => {
    const fetchSupplier = async () => {
      const { data: newSupplier } = await wevedoService.getSupplierById(
        supplierId,
      );
      setSupplier(newSupplier);
    };
    fetchSupplier();
  }, [wevedoService, supplierId]);

  const MessageToSupplier = ({ show, onHide }) => (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="send-a-message-to-supplier"
      centered
      className="global-modal"
    >
      <Modal.Body className="p-0 send-a-message-to-supplier">
        <Row>
          <Button className="modal-close-btn" onClick={onHide} variant="link">
            <i className="fas fa-times fa-2x" />
          </Button>
          <Col sm={4} className="p-0 d-none d-md-flex">
            <img src={modalimg} alt="" />
          </Col>
          <Col sm={8}>
            <Form>
              <h5>Send a message to Supplier Name</h5>
              <hr className="hr-sm m-0 mt-3 mb-4 d-none d-md-block" />
              <Row>
                <Col sm={12} className="mb-4">
                  <Form.Group controlId="">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="">
                    <Form.Control type="number" placeholder="Mobile Number" />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mt-4 mb-4">
                  <Form.Group controlId="">
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      rows="3"
                    />
                  </Form.Group>
                </Col>
                <Col className="text-center text-uppercase">
                  <Button size="lg">Send</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );

  return (
    <ScreensLayoutMain
      title={`${supplier.fullName}`}
      backgroundImage={backgroundImage}
    >
      <Container className="supplier-results">
        <Row className="mt-5 mb-5">
          <Col>
            {supplier.providerImages ? (
              <Carousel>
                {Object.values(supplier.providerImages).map(image => (
                  <Carousel.Item className="carousel-image" key={uniqid()}>
                    <img
                      className="d-block mx-auto"
                      src={image}
                      alt="supplier-slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : null}
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col sm={7}>
            <h4 className="text-uppercase">{`${supplier.fullName}`}</h4>
            {
              <b>
                {`${supplier.address || ''} ${supplier.regionName ||
                  ''} ${supplier.country || ''} ${supplier.postcode || ''}
                `}
              </b>
            }
            <hr className="hr-sm m-0 mt-4 mb-4" />
            <p>{supplier.bio}</p>
            <div className="divider" />
            <b className="text-uppercase">
              {t('supplier.contactSection.title')}
            </b>
            <hr className="hr-xs" />
            {supplier.website ? (
              <div className="d-block mb-4">
                <b className="text-uppercase text-muted">Website:</b>
                <b>{` ${supplier.website}`}</b>
              </div>
            ) : null}
            {supplier.email ? (
              <div className="d-block mb-4">
                <b className="text-uppercase text-muted mb-4">Email:</b>
                <b>{` ${supplier.email}`}</b>
              </div>
            ) : null}
            {supplier.phoneNumber ? (
              <div className="d-block mb-4">
                <b className="text-uppercase text-muted mb-4">Number:</b>
                <b>{` ${supplier.phoneNumber}`}</b>
              </div>
            ) : null}
            <div className="divider" />
            <b className="text-uppercase">
              {t('supplier.contactSection.findUs')}
            </b>
            <hr className="hr-xs" />
            <Col className="p-0">
              <img src={map} alt="map" width="100%" />
            </Col>
          </Col>
          <Col>
            <Row>
              <Col sm={12}>
                <Button
                  block
                  size="lg"
                  className="text-uppercase"
                  onClick={() => setModalShow(true)}
                >
                  {t('supplier.sendAMessage.button')}
                </Button>
                <MessageToSupplier
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  t={t}
                />
              </Col>
              <Col sm={12}>
                {(supplier.minPrice && supplier.maxPrice) ||
                supplier.facilities ? (
                  <div className="supplier-results-side-box">
                    {supplier.minPrice && supplier.maxPrice ? (
                      <div className="mb-4">
                        <b className="text-uppercase text-muted">Budget</b>
                        <hr className="hr-xs" />
                        <b>{`$${supplier.minPrice} - $${supplier.maxPrice}`}</b>
                      </div>
                    ) : null}
                    {supplier.facilities ? (
                      <div>
                        <b className="text-uppercase text-muted">Services</b>
                        <hr className="hr-xs" />
                        <b>{supplier.facilities}</b>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </Col>
            </Row>
          </Col>
          <Col sm={12} className="text-right">
            <div className="divider" />
            <b className="supplier-results-next-btn">
              {t('supplier.nextResult')}
              <i className="fa fa-arrow-right" />
            </b>
          </Col>
        </Row>
      </Container>
    </ScreensLayoutMain>
  );
};

export default withTranslation('common')(Supplier);
