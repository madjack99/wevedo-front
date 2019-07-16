import React, { useState, useEffect, useContext } from 'react';
import {
  Row, Container, Col, Button, Carousel, Modal, Form,
} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import PopularSearches from '../popularSearches';
import './supplier.scss';

import { WevedoServiceContext } from '../../contexts';

import slide from '../../../assets/images/supplier-slide.png';
import map from '../../../assets/images/map.png';
import modalimg from '../../../assets/images/wedding dress.png';

const Supplier = ({ match, t }) => {
  const [supplier, setSupplier] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const wevedoService = useContext(WevedoServiceContext);
  const supplierId = match.params.id;

  useEffect(() => {
    const fetchSupplier = async () => {
      const {
        data: newSupplier,
      } = await wevedoService.getSupplierById(supplierId);
      setSupplier(newSupplier);
      console.log(newSupplier);
    };
    fetchSupplier();
  }, [wevedoService, supplierId]);

  return (
    <React.Fragment>
      <div className="section section-header-half supplier">
        <Container className="h-100 w-100 align-items-center">
          <Row className="h-100 align-items-center">
            <Col sm={12} className="text-center text-uppercase">
              <h1>{t('supplier.jumbotron')}</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="supplier-results">
        <Row className="mt-5 mb-5">
          <Col>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={slide} alt="supplier-slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide} alt="supplier-slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide} alt="supplier-slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col sm={7}>
            <h4 className="text-uppercase">{t('supplier.section.primaryTitle')}</h4>
            <b>{t('supplier.section.subTitle')}</b>
            <hr className="hr-sm m-0 mt-4 mb-4" />
            <p>
            {t('supplier.section.pOne')}
            </p>
            <p>
            {t('supplier.section.pTwo')}
            </p>
            <div className="divider" />
            <b className="text-uppercase">{t('supplier.contactSection.title')}</b>
            <hr className="hr-xs" />
            <div className="d-block mb-4">
              {
                supplier.website
                  ? (
                    <b className="text-uppercase text-muted mb-4">
                      {`Website: ${supplier.website}`}
                    </b>
                  )
                  : null
              }
              {
                supplier.email
                  ? (
                    <b className="text-uppercase text-muted mb-4">
                      {`Email: ${supplier.email}`}
                    </b>
                  )
                  : null
              }
              {
                supplier.phoneNumber
                  ? (
                    <b className="text-uppercase text-muted mb-4">
                      {`Number: ${supplier.phoneNumber}`}
                    </b>
                  )
                  : null
              }
            </div>
            <div className="divider" />
            <b className="text-uppercase">{t('supplier.contactSection.findUs')}</b>
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
                <MsgToSupplier show={modalShow} onHide={() => setModalShow(false)} />
              </Col>
              <Col sm={12}>
                <div className="supplier-results-side-box">
                  <div className="mb-4">
                    <b className="text-uppercase text-muted">{t('supplier.results.budget')}</b>
                    <hr className="hr-xs" />
                    <b>{t('supplier.results.amount')}</b>
                  </div>
                  <div>
                    <b className="text-uppercase text-muted">{t('supplier.results.services')}</b>
                    <hr className="hr-xs" />
                    <b>
                    {t('supplier.results.servicesList')}
                    </b>
                  </div>
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
      <PopularSearches />
    </React.Fragment>
  );
};

const MsgToSupplier = ({ show, onHide }) => (
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
        <Button
          className="modal-close-btn"
          onClick={onHide}
          variant="link"
        >
          <i className="fas fa-times fa-2x" />
        </Button>
        <Col sm={4} className="p-0">
          <img src={modalimg} alt="" />
        </Col>
        <Col sm={8}>
          <Form>
            <h5>{props.t('supplier.sendAMessage.modalTitle')}</h5>
            <hr className="hr-sm m-0 mt-3 mb-4" />
            <Row>
              <Col sm={12} className="mb-4">
                <Form.Group controlId="">
                  <Form.Control
                    type="text"
                    placeholder={props.t('supplier.sendAMessage.namePlaceholder')}
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="">
                  <Form.Control
                    type="email"
                    placeholder={props.t('supplier.sendAMessage.emailPlaceholder')}
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="">
                  <Form.Control
                    type="number"
                    placeholder={props.t('supplier.sendAMessage.mobilePlaceholder')}
                  />
                </Form.Group>
              </Col>
              <Col sm={12} className="mt-4 mb-4">
                <Form.Group controlId="">
                  <Form.Control
                    as="textarea"
                    placeholder={props.t('supplier.sendAMessage.messagePlaceholder')}
                    rows="3"
                  />
                </Form.Group>
              </Col>
              <Col className="text-center text-uppercase">
                <Button size="lg">{props.t('supplier.sendAMessage.sendBtn')}</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
);

export default withTranslation('common')(Supplier);
