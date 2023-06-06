import styled from 'styled-components';

export const Submit = styled.button`
  width: 100%;
  height: 52px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #ff6534;
  color: #fff;
  transition: background-color 250ms;

  :hover,
  :focus {
    background-color: #dd5626;
  }

  :active {
    background-color: #ab300b;
  }
`;
