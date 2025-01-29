import './CommonButtonCSS.css';

interface CommonButtonProps {
  children: string;
  type: 'submit' | 'button' | 'reset' | undefined;
  func?: () => void;
  mode: 'primary' | 'secondary';
  disabled?: boolean;
}

function CommonButton({
  children,
  type,
  func,
  disabled,
  mode,
}: CommonButtonProps) {
  return mode === 'primary' ? (
    <button
      type={type}
      onClick={func}
      className="common__button"
      disabled={disabled}
    >
      {children}
    </button>
  ) : (
    <button
      type={type}
      onClick={func}
      className="common__button__secondary"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default CommonButton;
