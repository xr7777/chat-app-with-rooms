interface MessageProps {
  message: any; //to fix
}
const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div>
      <h4>{message.text}</h4>
      <h4>{message.user}</h4>
    </div>
  );
};

export default Message;
