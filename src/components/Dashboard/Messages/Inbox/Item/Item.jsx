import React from 'react';

import { Row, Col, Badge } from 'react-bootstrap';

const DashboardMessagesInboxItem = () => {
  return (
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
            </span>
            <Badge pill variant="success">
              1
            </Badge>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardMessagesInboxItem;
