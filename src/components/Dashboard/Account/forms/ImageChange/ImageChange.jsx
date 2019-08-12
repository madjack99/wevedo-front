import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import addImage from '../../../../../assets/images/addimg.png';

const DashboardAccountFormsImageChange = () => {
  return (
    <Col sm={3}>
      <div className="text-center">
        <img src={addImage} alt="" />
        <p className="mt-2">Upload Photo</p>
      </div>
    </Col>
  );
};

export default DashboardAccountFormsImageChange;
