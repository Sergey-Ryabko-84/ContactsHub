import styled from 'styled-components';

export const MsgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 8px;
  padding: 24px;
  font-size: 18px;
  font-weight: 600;
  animation: isAppearing 3s cubic-bezier(0,-1,1,0);

  @keyframes isAppearing {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
