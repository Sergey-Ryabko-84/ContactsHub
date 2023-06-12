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
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.bordercolor};
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  transition: background-color 250ms;

  :hover,
  :focus {
    background-color: ${props => props.bghovcolor};
  }

  :active {
    background-color: ${props => props.bgactvcolor};
  }
`;
