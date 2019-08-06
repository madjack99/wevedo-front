import React, { useState, useEffect, useContext } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { WevedoServiceContext } from '../../../contexts';

import DashboardMessagesInboxView from './Inbox/View';
import DashboardMessagesChatView from './Chat/View';
import DashboardMessagesChatViewMobile from './Chat/View/Mobile';

const DashboardMessages = () => {
  const [rooms, setRooms] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const wevedoService = useContext(WevedoServiceContext);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data: newRooms } = await wevedoService.getRooms();
      setRooms(newRooms);
    };

    fetchRooms();

    // const intervalId = setInterval(() => fetchRooms(), 2500);

    // return () => {
    //   clearInterval(intervalId);
    // };
  }, [wevedoService]);

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
            {/* Desktop Inbox */}
            <DashboardMessagesInboxView
              className="d-sm-block d-none"
              rooms={rooms}
              onOpenChat={room => {
                console.log(room);
              }}
            />
            {/* Mobile Inbox */}
            <DashboardMessagesInboxView
              className="d-block d-sm-none"
              rooms={rooms}
              onOpenChat={room => {
                setModalShow(true);
                console.log(room);
              }}
            />
          </Col>
          <Col sm={8} className="d-none d-sm-block">
            <DashboardMessagesChatView />
          </Col>
          <DashboardMessagesChatViewMobile
            // room={room}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Row>
      </Container>
    </div>
  );
};

export default DashboardMessages;
