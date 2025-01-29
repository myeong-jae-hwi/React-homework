import SighUp from '../Molecule/SignUpForm';
import SignupCheck from '../Molecule/SignUpCheck';
import './SignUpForm.css';
import CommonButton from '../Atom/CommonButton';

function SignUpForm() {
  return (
    <form className="signup-form">
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
