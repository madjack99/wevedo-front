import React, { useState, useEffect, useContext } from 'react';
import { withTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import { WevedoServiceContext } from '../../../../../contexts';

import config from '../../../../../config';

import DashboardMessagesInboxViewDesktop from './Desktop';
import DashboardMessagesInboxViewMobile from './Mobile';

const DashboardMessagesInboxView = ({ t, onOpenRoom, onOpenModalRoom }) => {
  const [rooms, setRooms] = useState([]);
  const wevedoService = useContext(WevedoServiceContext);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data: newRooms } = await wevedoService.getRooms();
      setRooms(
        newRooms.sort(
          (a, b) =>
            new Date(b.messages[b.messages.length - 1].createdAt) -
            new Date(a.messages[a.messages.length - 1].createdAt),
        ),
      );
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
          {t('dashboard.messages.youHaveNoMessages')}
          <br />
          {t('dashboard.messages.toStartAMessage')}{' '}
          <Link to="/suppliers/categories">
            <b>{t('dashboard.messages.providers')}</b>
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

export default withTranslation('common')(DashboardMessagesInboxView);
