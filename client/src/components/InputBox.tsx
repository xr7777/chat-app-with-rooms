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
  return <div></div>;
};

export default InputBox;
