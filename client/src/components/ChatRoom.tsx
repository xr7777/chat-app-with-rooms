import Message from './Message';

interface ChatRoomProps {
  name: string | string[] | null;
  room: string | string[] | null;
  messages: string[];
}

const ChatRoom: React.FC<ChatRoomProps> = ({ name, room, messages }) => {
  return (
    <div className="chatRoom">
      <div className="chatRoom__heading">
        <img className="icon--online" src="./onlineIcon.png" alt="" />
        <p>{room}</p>
        <a href="/">
          <img className="icon--close" src="./closeIcon.png" alt="" />
        </a>
      </div>
      <div className="chatRoom__messages">
        {messages.map((message, i) => (
          <div className="message" key={i}>
            <Message message={message} name={name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
