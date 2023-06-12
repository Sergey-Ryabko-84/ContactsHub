import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TiContacts } from 'react-icons/ti';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

export const Section = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 36vh;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const LogoIcon = styled(TiContacts)`
  margin-top: 4vh;
`;

export const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3.5px solid #ff6534;
  border-radius: 50%;
`;

export const Title = styled.h1`
  padding: 20px 12px 12px;
  font-size: 24px;
  font-weight: 500;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  padding: 0 50px;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  padding: 4px 40px;
  display: flex;
  justify-content: center;
`;

export const Anchor = styled.a`
  padding: 4px;
  color: #ff6534;
`;

export const Link = styled(NavLink)`
  margin-top: 12px;
  padding: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #ff6534;
`;
