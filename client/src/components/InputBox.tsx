interface InputBoxProps {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const InputBox: React.FC<InputBoxProps> = ({
  message,
  sendMessage,
  setMessage,
}) => {
  return (
    <form className="inputBox">
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="button button--send" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default InputBox;
