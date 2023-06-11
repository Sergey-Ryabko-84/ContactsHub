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
  height: 34vh;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const LogoIcon = styled(TiContacts)`
  margin-top: 4vh;
`;

export const Title = styled.h1`
  padding: 26px;
  font-size: 28px;
`;

export const Text = styled.p`
  padding: 0 50px;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
`;

export const Link = styled(NavLink)`
  padding: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #ff6534;
`;
