import Message from './Message';

interface ChatRoomProps {
  name: string | string[] | null;
  room: string | string[] | null;
  messages: string[];
}

const ChatRoom: React.FC<ChatRoomProps> = ({ name, room, messages }) => {
  console.log(messages);

  return (
    <div>
      <h3>{room}</h3>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} />
        </div>
      ))}
    </div>
  );
};

export default ChatRoom;
