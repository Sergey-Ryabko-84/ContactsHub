import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

export const Button = styled.button`
  position: relative;
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: 1px solid #c9c9c9;
  background-color: #fff;
  text-align: start;
  transition: background-color 250ms;

  :hover,
  :focus {
    background-color: #ffe3dc;
  }

  :active {
    background-color: #ffbaa8;
  }

  :disabled {
    background-color: #dde2ec;
    color: #999da3;
  }
`;

export const ButtonLink = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 14px 10px;
`;

export const ButtonTitle = styled.span`
  display: inline-block;
  padding: 2px 44px;
`;

export const GoogleIcon = styled(FcGoogle)`
  position: absolute;
  opacity: ${props => (props.loading === 'true' ? 0.5 : 1)};
`;
