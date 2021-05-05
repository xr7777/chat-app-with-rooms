import Message from './Message';
import AutoScroll from '@brianmcallister/react-auto-scroll';

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
      <AutoScroll
        showOption={false}
        height={350}
        className="chatRoom__messages"
      >
        {messages.map((message, i) => (
          <div className="message" key={i}>
            <Message message={message} name={name} />
          </div>
        ))}
      </AutoScroll>
    </div>
  );
};

export default ChatRoom;
