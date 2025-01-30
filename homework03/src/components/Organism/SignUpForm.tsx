import SighUp from '../Molecule/SignUpForm';
import SignupCheck from '../Molecule/SignUpCheck';
import './SignUpForm.css';
import CommonButton from '../Atom/CommonButton';
import { useState } from 'react';

function SignUpForm() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault(); // 기본 제출 동작 방지
    const formData = new FormData(e.target); // form 요소의 데이터 가져오기
    const data = Object.fromEntries(formData.entries()); // 객체로 변환
    console.log('제출된 데이터:', data);
    setFormData(data);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1>
        <img src="/src/assets/Logo.svg" alt="coupang" />
      </h1>
      <h2 className="sr-only">회원가입</h2>
      <SighUp></SighUp>
      <SignupCheck></SignupCheck>
      <CommonButton type="submit" mode="primary">
        동의하고 가입하기
      </CommonButton>
    </form>
  );
}

export default SignUpForm;
