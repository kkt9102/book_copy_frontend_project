// components
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';

const SignUp = () => {
  return (
    <>
      <AuthTemplate>
        <AuthForm type="signup" />
      </AuthTemplate>
    </>
  );
};

export default SignUp;
