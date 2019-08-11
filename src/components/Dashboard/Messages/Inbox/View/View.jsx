import React, { useState, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';

import { WevedoServiceContext } from '../../../../../contexts';

import config from '../../../../../config';

import DashboardMessagesInboxViewDesktop from './Desktop';
import DashboardMessagesInboxViewMobile from './Mobile';

const DashboardMessagesInboxView = ({ onOpenRoom, onOpenModalRoom }) => {
  const [rooms, setRooms] = useState([]);
  const wevedoService = useContext(WevedoServiceContext);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data: newRooms } = await wevedoService.getRooms();
      setRooms(newRooms);
    };

    fetchRooms();

    const intervalId = setInterval(
      () => fetchRooms(),
      config.timeForServerRequest,
    );
    return () => clearInterval(intervalId);
  }, [wevedoService]);

  return (
    <React.Fragment>
      {!rooms.length ? (
        <p className="text-center mx-auto mt-3">
          You have no message.
          <br />
          To start a message, write to the{' '}
          <Link to="/suppliers/categories">
            <b>providers</b>
          </Link>
        </p>
      ) : (
        <React.Fragment>
          <DashboardMessagesInboxViewDesktop
            rooms={rooms}
            onOpenRoom={onOpenRoom}
          />
          <DashboardMessagesInboxViewMobile
            rooms={rooms}
            onOpenModalRoom={onOpenModalRoom}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default DashboardMessagesInboxView;
