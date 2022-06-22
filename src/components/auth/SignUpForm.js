import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from './AuthForm';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.signup,
  }));

  // input change event
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signup',
        key: name,
        value,
      })
    );
  };

  // form insert event
  const onSubmit = (e) => {
    e.preventDefault();
  };

  // 컴포넌트가 처음 렌더링 될 때 form울 초기화함
  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);
  return (
    <>
      <AuthForm
        type="signup"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default SignUpForm;
