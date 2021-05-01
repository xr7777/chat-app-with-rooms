import { useEffect, useState } from 'react';
import ChatRoom from './ChatRoom';
import InputBox from './InputBox';
import Users from './Users';

import queryString from 'query-string';
import io from 'socket.io-client';
import { RouteComponentProps } from 'react-router';

let socket: any; // to fix

const Chat = ({ location }: RouteComponentProps) => {
  const [name, setName] = useState<string | string[] | null>('');
  const [room, setRoom] = useState<string | string[] | null>('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [users, setUsers] = useState<string>(); // to fix

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error: string) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message: string) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on(
      'roomData',
      // (users: { id: string; name: string; room: string }[]) => {
      (users: any) => {
        console.log(users.users[0].name);
        setUsers(users.users[0].name);
      }
    );
  }, []);

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  const handleSetMessage = (message: string) => {
    setMessage(message);
  };

  return (
    <div className="container">
      <ChatRoom name={name} room={room} messages={messages} />
      <InputBox
        message={message}
        sendMessage={sendMessage}
        setMessage={handleSetMessage}
      />
      <Users users={users} />
    </div>
  );
};

export default Chat;
