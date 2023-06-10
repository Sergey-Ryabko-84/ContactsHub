import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  padding: 12px;
  border-radius: 8px;
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
