import styled from 'styled-components';

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
  justify-content: center;
`;

export const Title = styled.h1`
  margin-top: 12px;
  padding: 12px;
  font-size: 18px;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const LinkWrapper = styled.nav`
  width: 100%;
  padding: 24px 40px;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 64px;
`;