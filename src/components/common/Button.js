import styled from 'styled-components';

const Common_Btn = styled.button`
  border: none;
  border-radius: 0.4rem;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.25rem 1rem;
  color: #eeeeee;
  outline: none;
  cursor: pointer;
  background: #666666;
  transition: all 0.3s;
  &:hover {
    background: #333333;
  }
`;
const Button = (props) => <Common_Btn {...props} />;

export default Button;
