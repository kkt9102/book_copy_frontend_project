import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import auth, { changeField, initializeForm } from '../../modules/auth';
import AuthForm from './AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  // 컴포넌트가 처음 렌더링 될 때 form울 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);
  return (
    <>
      <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default LoginForm;
