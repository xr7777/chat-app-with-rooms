interface MessageProps {
  message: any; //to fix
  name: string | string[] | null;
}
const Message: React.FC<MessageProps> = ({ message, name }) => {
  let isCurrentUser = false;

  if (message.user === name) {
    isCurrentUser = true;
  }

  return isCurrentUser ? (
    <>
      <div className="message__box message__box--active">
        <p className="message__text">{message.text}</p>
      </div>
    </>
  ) : (
    <>
      <div className={`message__box ${message.user === 'admin' && 'admin'}`}>
        <p className="message__text">{message.text}</p>
      </div>
      <p className="message__user">{message.user}</p>
    </>
  );
};

export default Message;
