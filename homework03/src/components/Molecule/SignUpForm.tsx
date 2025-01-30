import { InputComponent } from '@/components/Atom/index';
import './SIgnUpForm.css';

function SighUp() {
  return (
    <div className="sign-up-form">
      <b>회원정보를 입력해주세요</b>

      <InputComponent
        type="email"
        name="email"
        placeholder="아이디 (이메일)"
        title="이메일"
        icon="email.svg"
      />
      <InputComponent
        type="password"
        name="password"
        placeholder="비밀번호"
        title="패스워드"
        icon="pw.svg"
      />

      <InputComponent
        type="password"
        name="passwordCheck"
        placeholder="비밀번호 확인"
        title="패스워드 확인"
        icon="pw.svg"
      />

      <InputComponent
        type="text"
        name="name"
        placeholder="이름"
        title="이름"
        icon="user.svg"
      />

      <InputComponent
        type="tel"
        name="phone"
        placeholder="휴대폰 번호"
        title="휴대폰 번호"
        icon="phone.svg"
      />
    </div>
  );
}

export default SighUp;
