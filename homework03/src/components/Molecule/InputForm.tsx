import { InputComponent, CommonButton } from '@/components/Atom/index';
import './InputFormCSS.css';
import { useState } from 'react';

function InputForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    // console.log('하이루: ', id, value);
    setFormData({
      ...formData,
      [id]: value,
    });

    const emailVal = Object.values(formData)[0];
    // console.log('email: ', emailVal);

    const pwVal = Object.values(formData)[1];
    // console.log('pw: ', pwVal);

    if (emailVal) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = emailRegex.test(emailVal as string);
      // console.log(isEmailValid);

      if (!isEmailValid) {
        setErrors((prev) => {
          return { ...prev, email: true };
        });
      } else {
        setErrors((prev) => {
          return { ...prev, email: false };
        });
      }
    }

    if (pwVal) {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
      const isPasswordValid = passwordRegex.test(pwVal as string);
      // console.log(isPasswordValid);

      if (!isPasswordValid) {
        setErrors((prev) => ({ ...prev, password: true }));
      } else {
        setErrors((prev) => ({ ...prev, password: false }));
      }
    }
  };

  const handleClick = () => {
    console.log('회원가입 버튼 클릭');
    location.href = '/signup';
  };

  // console.log(formData);

  return (
    <>
      <form
        action={(formData: FormData) => {
          console.log(formData);
          console.log(Object.fromEntries(formData));
        }}
      >
        <InputComponent
          type="email"
          placeholder="아이디 (이메일)"
          title="이메일"
          icon="email.svg"
          onChange={handleChange}
          error={errors.email}
        />
        <InputComponent
          type="password"
          placeholder="비밀번호"
          title="패스워드"
          icon="pw.svg"
          error={errors.password}
          onChange={handleChange}
        />

        <div className="login__info">
          <div className="auto-login__container">
            <input type="checkbox" id="auto-login" />
            <label htmlFor="auto-login" className="auto-login">
              자동 로그인
            </label>
          </div>

          <a href="" className="find-id">
            아이디(이메일)/비밀번호 찾기{' '}
            <img
              src="/src/assets/arrow-right-blue.png"
              alt="바로가기"
              className="simbol"
            />
          </a>
        </div>

        <CommonButton type="submit" disabled={false} mode="primary">
          로그인
        </CommonButton>
        <hr />
        <CommonButton
          type="button"
          func={handleClick}
          disabled={false}
          mode="secondary"
        >
          회원가입
        </CommonButton>
      </form>
    </>
  );
}

export default InputForm;
