import { InputComponent, CommonButton } from '@/components/Atom/index';
import './InputFormCSS.css';

function InputForm() {
  const handleClick = () => {
    console.log('회원가입 버튼 클릭');
    location.href = '/signup';
  };
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
        />
        <InputComponent
          type="password"
          placeholder="비밀번호"
          title="패스워드"
          icon="pw.svg"
        />

        <CommonButton type="submit">로그인</CommonButton>
        <CommonButton type="button" func={handleClick}>
          회원가입
        </CommonButton>
      </form>
    </>
  );
}

export default InputForm;
