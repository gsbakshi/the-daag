import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? '380px' : '240px')};
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #010203;
  border-radius: 4px;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
      background-color: #724223;
      border: 1px solid #2e2e2e;
      
      & .title {
        opacity: 1;
        color: #010203;
      }
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 12vh;
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #010203;
  opacity: 0.8;
  position: absolute;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #ebebeb;
  opacity: 0.7;
`;

export const ContentSubtitle = styled.span`
  padding-top: 4px;
  color: #ebebeb;
  opacity: 0.5;
  font-size: 16px;
  font-weight: 300;
`;