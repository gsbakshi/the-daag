import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { ReactComponent as FooterLogoSVG } from '../../assets/logo/vector/default-monochrome-white.svg';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #010203; 
  padding: 40px 40px 10px 40px;
  ${'' /* min-height: 30vh; */}
`;

export const QuicklinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${'' /* align-items: center; */}


  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled(Link)`
  justify-content: flex-start;
`;

export const FooterLogo = styled(FooterLogoSVG)`
  width: 10vw;

  @media screen and (max-width: 1200px) {
    width: 16vw;
  }

  @media screen and (max-width: 800px) {
    width: 32vw;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const OptionLink = styled(Link)`
  padding: 0px 15px;
  font-size: 16px;
  color: whitesmoke;
`;