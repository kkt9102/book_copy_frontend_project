import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// style
import '../../resource/style/form.scss';

const AuthTemplateSection = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #cdcdcd;
`;
const FormSection = styled.div`
  position: absolute;
  display: flex;
  width: 50rem;
  top: calc(50% - 30rem);
  left: calc(50% - 25rem);
  background: #eeeeee;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateSection>
      <FormSection className="form_sc flex flex_dir_c">
        <div className="logo_sc flex flex_jc_c">
          <Link to="/">REACTERS</Link>
        </div>
        {children}
      </FormSection>
    </AuthTemplateSection>
  );
};

export default AuthTemplate;
