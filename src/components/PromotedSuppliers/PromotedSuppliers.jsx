import React, { useState, useEffect, useContext } from 'react';

import { Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './PromotedSuppliers.scss';

import config from '../../config';
import { WevedoServiceContext } from '../../contexts';

const PromotedSupplier = ({ supplierId }) => {
  const [supplier, setSupplier] = useState({});
  const wevedoService = useContext(WevedoServiceContext);

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
    <LinkContainer to={`/suppliers/details/${supplierId}`}>
      <div className="promoted-supplier__box overlayed">
        {supplier.profileImageURL && (
          <React.Fragment>
            <img
              className="promoted-supplier__avatar"
              src={supplier.profileImageURL}
              alt="Supplier"
            />
            <div className="overlay" />
          </React.Fragment>
        )}
      </div>
    </LinkContainer>
  );
};

const PromotedSuppliers = () => {
  return (
    <div>
      <Row className="m-0">
        {config.promotedSuppliers.map(supplierId => (
          <Col className="p-0" xs={3} key={supplierId}>
            <PromotedSupplier supplierId={supplierId} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PromotedSuppliers;
