import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { TiContacts } from 'react-icons/ti';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

export const FormSection = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoIcon = styled(TiContacts)`
  position: absolute;
  top: 40px;
`;

export const Title = styled.h1`
  padding: 26px;
  font-size: 32px;
`;

export const Text = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

export const Link = styled(NavLink)`
  padding: 4px;
  font-weight: 500;
  color: #ff6534;
`;

export const Divider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 40px;
`;

export const Span = styled.span`
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;

  ::before {
    content: '';
    position: absolute;
    top: 6px;
    display: block;
    width: 43%;
    height: 1px;
    background-color: #c9c9c9;
  }

  ::after {
    content: '';
    position: absolute;
    top: 6px;
    right: 0;
    display: block;
    width: 43%;
    height: 1px;
    background-color: #c9c9c9;
  }
`;

export const AlternateWrapper = styled.div`
  width: 100%;
  padding: 0 40px;
`;

export const Button = styled.div`
  position: relative;
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: 1px solid #c9c9c9;
  transition: background-color 250ms;

  :hover,
  :focus {
    background-color: #ffe3dc;
  }

  :active {
    background-color: #ffbaa8;
  }
`;

export const ButtonLink = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 14px;
`;

export const ButtonTitle = styled.span`
  display: inline-block;
  padding: 2px 40px;
`;

export const GoogleIcon = styled(FcGoogle)`
  position: absolute;
  left: 16px;
`;
