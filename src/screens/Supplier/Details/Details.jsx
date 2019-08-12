import React, { useState, useEffect, useContext } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import { Row, Container, Col, Button, Carousel } from 'react-bootstrap';

import './Details.scss';

import backgroundImage from '../../../assets/images/supplier-bg.png';
import map from '../../../assets/images/map.png';

import { WevedoServiceContext } from '../../../contexts';

import ScreensLayoutMain from '../../Layouts/Main';
import SupplierMessageDialog from '../../../components/Supplier/MessageDialog';

const SupplierDetails = ({ isLoggedIn, user, match, t, history }) => {
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

  const providerImagesList = supplier.providerImages
    ? Object.values(supplier.providerImages)
    : [];

  return (
    <ScreensLayoutMain
      title={`${supplier.fullName}`}
      backgroundImage={backgroundImage}
    >
      <Container className="supplier-results">
        <Row className="mt-5 mb-5">
          <Col>
            {supplier.profileImageURL || supplier.providerImages ? (
              <Carousel>
                {[supplier.profileImageURL, ...providerImagesList].map(
                  image => (
                    <Carousel.Item className="carousel-image" key={uniqid()}>
                      <img
                        className="d-block mx-auto"
                        src={image}
                        alt="supplier-slide"
                      />
                    </Carousel.Item>
                  ),
                )}
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
            <div className="divider d-sm-none" />
          </Col>
          <Col>
            <Row>
              {!user.isProvider && (
                <Col sm={12}>
                  <Button
                    className="text-uppercase mb-4"
                    block
                    size="lg"
                    onClick={() =>
                      isLoggedIn ? setModalShow(true) : history.push('/login')
                    }
                  >
                    {t('supplier.sendAMessage.button')}
                  </Button>
                  <SupplierMessageDialog
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    supplier={supplier}
                  />
                </Col>
              )}
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

const mapStateToProps = ({ sessionData, userData }) => ({
  ...sessionData,
  ...userData,
});

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
  withRouter,
)(SupplierDetails);
