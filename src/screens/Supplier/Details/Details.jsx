import React, { useState, useEffect, useContext } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import getVideoId from 'get-video-id';
import uniqid from 'uniqid';

import { Row, Container, Col, Button, Carousel } from 'react-bootstrap';
import YouTube from 'react-youtube';

import './Details.scss';

import map from '../../../assets/images/map.png';

import { WevedoServiceContext } from '../../../contexts';

import SupplierMessageDialog from '../../../components/Supplier/MessageDialog';
import Header from '../../../components/Header';
import PopularSearches from '../../../components/PopularSearches';
import PromotedProviders from '../../../components/PromotedSuppliers';
import Footer from '../../../components/Footer';
import MyCalendar from '../../../components/Calendar';

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

  const bookedDates = supplier.bookedDates ? supplier.bookedDates : [];

  function isUrl(str) {
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
      if (!str.includes('http')) {
        str = `http://${supplier.website}`;
      }
      return (
        <a href={str}>
          <b>{` ${supplier.website}`}</b>
        </a>
      );
    }
    return <b>{` ${supplier.website}`}</b>;
  }

  return (
    <React.Fragment>
      <Header />
      <Container className="supplier-results">
        <Row className="mt-5 mb-5">
          <Col sm={12} lg={8}>
            <h4 className="text-uppercase mt-5">{`${supplier.fullName}`}</h4>
            {
              <b>
                {`${supplier.address || ''} ${supplier.city ||
                  ''} ${supplier.county || ''} ${supplier.regionName ||
                  ''} ${supplier.country || ''} ${supplier.postcode || ''}
                `}
              </b>
            }
            {supplier.providerImages ? (
              <Carousel interval={5000} className="mb-4 mt-4">
                {providerImagesList.map(image => (
                  <Carousel.Item className="carousel-image" key={uniqid()}>
                    <img
                      className="d-block mx-auto"
                      src={image}
                      alt="supplier-slide"
                    />
                  </Carousel.Item>
                ))}
                {supplier.profileVideoURL && (
                  <Carousel.Item className="carousel-video">
                    <YouTube
                      videoId={getVideoId(supplier.profileVideoURL).id}
                    />
                  </Carousel.Item>
                )}
              </Carousel>
            ) : null}

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
                {isUrl(supplier.website)}
              </div>
            ) : null}
            {supplier.email ? (
              <div className="d-block mb-4">
                <b className="text-uppercase text-muted mb-4">Email:</b>
                <a href={`mailto:${supplier.email}`}>
                  <b>{` ${supplier.email}`}</b>
                </a>
              </div>
            ) : null}
            {supplier.phoneNumber ? (
              <div className="d-block mb-4">
                <b className="text-uppercase text-muted mb-4">Number:</b>
                <b>{` ${supplier.phoneNumber}`}</b>
              </div>
            ) : null}
            {/* Hidden map */}
            <div className="d-none">
              <div className="divider" />
              <b className="text-uppercase">
                {t('supplier.contactSection.findUs')}
              </b>
              <hr className="hr-xs" />
              <Col className="p-0">
                <img src={map} alt="map" width="100%" />
              </Col>
              <div className="divider d-sm-none" />
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <Row style={{ position: 'sticky', top: 80 }}>
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
                    {`Send a message to ${supplier.fullName}`}
                  </Button>
                  <SupplierMessageDialog
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    supplier={supplier}
                  />
                </Col>
              )}
              <Col sm={6} lg={12} className="d-flex justify-content-center">
                <MyCalendar bookedDates={bookedDates} onCalendarClick="null" />
              </Col>
              <Col sm={6} lg={12}>
                {(supplier.minPrice && supplier.maxPrice) ||
                supplier.facilities ? (
                  <div className="supplier-results-side-box">
                    {supplier.minPrice && supplier.maxPrice ? (
                      <div className="mb-4">
                        <b className="text-uppercase text-muted">Budget</b>
                        <hr className="hr-xs" />
                        <b>{`£${supplier.minPrice} - £${supplier.maxPrice}`}</b>
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

          {/* Hidden next result */}
          <Col sm={12} lg={8} className="text-right d-none">
            <div className="divider" />
            <b className="supplier-results-next-btn">
              {t('supplier.nextResult')}
              <i className="fa fa-arrow-right" />
            </b>
          </Col>
        </Row>
      </Container>
      <PopularSearches />
      <PromotedProviders />
      <Footer />
    </React.Fragment>
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
