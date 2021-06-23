import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSVG } from '../../assets/logo/vector/default-monochrome.svg';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #724223;
  padding: 16px 40px;
  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
    padding: 12px 20px;
  }
`;

export const LogoContainer = styled(Link)`
  align-self: center;
  align-items: center;
  width: 10%;
  justify-content: flex-start;

  @media screen and (max-width: 1200px) {
    width: 16%;
  }
  @media screen and (max-width: 800px) {
    width: 24%;
  }
`;

export const Logo = styled(LogoSVG)``;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${'' /* width: 50%; */}
`;

export const OptionLink = styled(Link)`
  color: whitesmoke;
  padding: 0px 15px;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    font-size: 12px;
    font-weight: 500;
  }
  @media screen and (max-width: 800px) {
    font-size: 10px;
    font-weight: 600;
  }
`;
