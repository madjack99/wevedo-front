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
                  <Carousel.Item className="carousel-image">
                    <img
                      className="d-block h-100 mx-auto"
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
            <div className="d-block mb-4">
              {supplier.website ? (
                <b className="text-uppercase d-block text-muted mb-4">
                  {`Website: ${supplier.website}`}
                </b>
              ) : null}
              {supplier.email ? (
                <b className="text-uppercase d-block text-muted mb-4">
                  {`Email: ${supplier.email}`}
                </b>
              ) : null}
              {supplier.phoneNumber ? (
                <b className="text-uppercase d-block text-muted mb-4">
                  {`Number: ${supplier.phoneNumber}`}
                </b>
              ) : null}
            </div>
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
                <MsgToSupplier
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  t={t}
                />
              </Col>
              <Col sm={12}>
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

const MsgToSupplier = ({ show, onHide, t }) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="send-a-message-to-supplier"
    centered
    className="global-modal"
  >
    <Modal.Body className="p-0">
      <Row>
        <Button className="modal-close-btn" onClick={onHide} variant="link">
          <i className="fas fa-times fa-2x" />
        </Button>
        <Col sm={4} className="p-0">
          <img src={modalimg} alt="" />
        </Col>
        <Col sm={8}>
          <Form>
            <h5>{t('supplier.sendAMessage.modalTitle')}</h5>
            <hr className="hr-sm m-0 mt-3 mb-4" />
            <Row>
              <Col sm={12} className="mb-4">
                <Form.Group controlId="">
                  <Form.Control
                    type="text"
                    placeholder={t('supplier.sendAMessage.namePlaceholder')}
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="">
                  <Form.Control
                    type="email"
                    placeholder={t('supplier.sendAMessage.emailPlaceholder')}
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="">
                  <Form.Control
                    type="number"
                    placeholder={t('supplier.sendAMessage.mobilePlaceholder')}
                  />
                </Form.Group>
              </Col>
              <Col sm={12} className="mt-4 mb-4">
                <Form.Group controlId="">
                  <Form.Control
                    as="textarea"
                    placeholder={t('supplier.sendAMessage.messagePlaceholder')}
                    rows="3"
                  />
                </Form.Group>
              </Col>
              <Col className="text-center text-uppercase">
                <Button size="lg">{t('supplier.sendAMessage.sendBtn')}</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
);

export default withTranslation('common')(Supplier);
