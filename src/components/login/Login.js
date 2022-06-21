// components
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';

const Login = () => {
  return (
    <>
      <AuthTemplate>
        <AuthForm type="login" />
      </AuthTemplate>
    </>
  );
};

export default Login;
