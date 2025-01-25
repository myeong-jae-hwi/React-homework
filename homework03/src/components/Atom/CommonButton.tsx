import './CommonButtonCSS.css';

interface CommonButtonProps {
  children: string;
  type: 'submit' | 'button' | 'reset' | undefined;
  func?: () => void;
}

function CommonButton({ children, type, func }: CommonButtonProps) {
  return (
    <button type={type} onClick={func}>
      {children}
    </button>
  );
}

export default CommonButton;
