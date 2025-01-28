import InputComponent from '@/components/Molecule/InputForm';
import './SignInForm.css';

function SignInForm() {
  return (
    <div className="sign-in-form">
      <h1 className="logo">
        <img src="/src/assets/Logo.svg" alt="Coupang" />
      </h1>
      <h2 className="sr-only">로그인</h2>
      <InputComponent></InputComponent>
    </div>
  );
}

export default SignInForm;
