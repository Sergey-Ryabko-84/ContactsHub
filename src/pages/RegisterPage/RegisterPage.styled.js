import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 23vh;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const LogoIcon = styled(TiContacts)`
  margin-top: 4vh;
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
  font-size: 14px;
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
  margin-bottom: 12px;
`;
