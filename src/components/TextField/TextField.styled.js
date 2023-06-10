import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 52px;
  margin-bottom: 26px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px 46px;
  border: 1px solid
    ${props => (props.color === '#e74a3b88' ? '#e74a3b88' : '#d9d9d9')};
  border-radius: 8px;
  outline-color: ${props => props.color};
`;
