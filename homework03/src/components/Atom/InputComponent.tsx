import { ReactEventHandler, useId } from 'react';
import './InputCSS.css';

interface InputComponentProps {
  title: string;
  placeholder: string;
  type: string;
  icon: string;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputComponent({
  title,
  placeholder,
  type,
  icon,
  error = false,
  onChange,
}: InputComponentProps) {
  const id = useId();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
    console.log('비밀번호 보이기 클릭');
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  };

  return (
    <div>
      <div className={`input__container ${error ? 'error' : ''}`}>
        <div className="icon">
          <img src={`src/assets/${icon}`} alt="" />
        </div>
        <label htmlFor={id} className="sr-only">
          {title}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          className="input"
          onChange={onChange}
        />
        {type === 'password' ? (
          <button type="button" className="visible" onClick={handleClick}>
            <img src="/src/assets/visible.svg" alt="비밀번호 보이기" />
          </button>
        ) : null}
      </div>
      {error ? (
        <p className="error-msg">
          {type === 'email'
            ? '아이디(이메일)는 이메일 형식으로 입력해주세요.'
            : '숫자, 영어 조합 6자리 이상 입력해야 합니다.'}
        </p>
      ) : null}
    </div>
  );
}

export default InputComponent;
