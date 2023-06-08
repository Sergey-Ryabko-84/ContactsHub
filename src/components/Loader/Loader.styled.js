import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  position: ${props => props.position};
  left: ${props => props.left};
  top: ${props => props.top};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #c1c9d9;
`;
