import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';

// 회원가입 또는 로그인 Form을 보여줌

const AuthFormSection = styled.div``;
const textMap = {
  login: '로그인',
  signup: '회원가입',
};
const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormSection className="login_form">
      <h3 className="form_tit flex_ai_c">{text}</h3>
      <form>
        <div className="input_box flex flex_jc_sb flex_ai_c">
          <label for="user"></label>
          <input
            type="text"
            placeholder="아이디"
            name="user"
            autoComplete="username"
          />
        </div>
        <div className="input_box flex flex_jc_sb flex_ai_c">
          <label for="password"></label>
          <input
            type="password"
            placeholder="비밀번호"
            name="password"
            autoComplete="new-password"
          />
        </div>
        {type === 'signup' && (
          <div className="input_box flex flex_jc_sb flex_ai_c">
            <label for="password"></label>
            <input
              type="password"
              placeholder="비밀번호 확인"
              name="passwordConfirm"
              autoComplete="new-password"
            />
          </div>
        )}
        <Button className="login_btn">
          {type === 'login' ? '로그인' : '회원가입'}
        </Button>
      </form>
      <div className="btn_box flex flex_jc_sb flex_dir_u">
        {type === 'login' ? (
          <>
            <Link to="/SignUp">회원가입</Link>
            <Link to="/SignUp">비밀번호 찾기</Link>
          </>
        ) : (
          <Link to="/Login">로그인</Link>
        )}
      </div>
    </AuthFormSection>
  );
};

export default AuthForm;
