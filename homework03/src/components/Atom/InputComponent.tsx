import { useId } from 'react';
import './InputCSS.css';

interface InputComponentProps {
  title: string;
  placeholder: string;
  type: string;
  icon: string;
}

function InputComponent({
  title,
  placeholder,
  type,
  icon,
}: InputComponentProps) {
  const id = useId();
  return (
    <div className="input">
      <div className="icon">
        <img src={`src/assets/${icon}`} alt="" />
      </div>
      <label htmlFor={id} className="sr-only">
        {title}
      </label>
      <input type={type} placeholder={placeholder} id={id} />
    </div>
  );
}

export default InputComponent;
