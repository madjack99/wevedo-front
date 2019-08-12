import React, { useState, useEffect, useContext, useCallback } from 'react';

import { WevedoServiceContext } from '../../../../../contexts';

import config from '../../../../../config';

import DashboardMessagesRoomViewDesktop from './Desktop';
import DashboardMessagesRoomViewMobile from './Mobile';

const DashboardMessagesRoomView = ({ room, showRoom, onCloseRoom }) => {
  const [messages, setMessages] = useState([]);
  const wevedoService = useContext(WevedoServiceContext);

  const fetchMessages = useCallback(async () => {
    const { _id: roomId } = room;

    const {
      data: { messages: newMessages },
    } = await wevedoService.getRoom(roomId);
    setMessages(newMessages);
  }, [room, wevedoService]);

  const onSend = () => fetchMessages();

  useEffect(() => {
    fetchMessages();

    const intervalId = setInterval(
      () => fetchMessages(),
      config.timeForServerRequest,
    );
    return () => clearInterval(intervalId);
  }, [fetchMessages]);

  return (
    <React.Fragment>
      <DashboardMessagesRoomViewDesktop
        room={room}
        messages={messages}
        onSend={onSend}
      />
      <DashboardMessagesRoomViewMobile
        room={room}
        messages={messages}
        show={showRoom}
        onHide={onCloseRoom}
        onSend={onSend}
      />
    </React.Fragment>
  );
};

export default DashboardMessagesRoomView;
