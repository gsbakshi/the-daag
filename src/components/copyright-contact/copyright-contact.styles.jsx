import styled from 'styled-components';

export const CopyrightContactContainer = styled.div`
  margin-top: 60px;
  color: whitesmoke;
  font-size: 0.8rem;
`;

export const IconContainer = styled.div`
  width: 5vw;
  display: inline-grid;
  align-items: start;
  justify-items: start;
  grid-auto-flow: column;
  grid-gap: 4px 16px;

  .icon {
    fill: whitesmoke;
  }

  @media screen and (max-width: 1200px) {
    width: 8vw;
  }

  @media screen and (max-width: 800px) {
    width: 14vw;
  }
`;

export const DisclaimerContainer = styled.p`
  font-size: 0.5rem;
  word-spacing: 0.11rem;
  letter-spacing: 0.04rem;
`;
