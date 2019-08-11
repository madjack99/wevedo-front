import React, { useState, useEffect, useContext } from 'react';

import { WevedoServiceContext } from '../../../../../contexts';

import config from '../../../../../config';

import DashboardMessagesRoomViewDesktop from './Desktop';
import DashboardMessagesRoomViewMobile from './Mobile';

const DashboardMessagesRoomView = ({ room, showRoom, onCloseRoom }) => {
  const [messages, setMessages] = useState([]);
  const wevedoService = useContext(WevedoServiceContext);

  useEffect(() => {
    const { _id: roomId } = room;

    const fetchMessages = async () => {
      const {
        data: { messages: newMessages },
      } = await wevedoService.getRoom(roomId);
      setMessages(newMessages);
    };

    fetchMessages();

    const intervalId = setInterval(
      () => fetchMessages(),
      config.timeForServerRequest,
    );
    return () => clearInterval(intervalId);
  }, [wevedoService, room]);

  return (
    <React.Fragment>
      <DashboardMessagesRoomViewDesktop room={room} messages={messages} />
      <DashboardMessagesRoomViewMobile
        room={room}
        messages={messages}
        show={showRoom}
        onHide={onCloseRoom}
      />
    </React.Fragment>
  );
};

export default DashboardMessagesRoomView;
