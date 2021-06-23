import styled, {css} from 'styled-components';

const buttonStyles = css`
  background-color: #010203;
  color: white;
  border: none;

  &:hover {
    background-color: #724223;
    color: black;
    border: 1px solid #0D0E0E;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  color: black;
  background-color: #724223;
  border: none;
  ${'' /* background-color: #4285f4; */}

  @media screen and (max-width: 1200px) {
    padding: 0 35px;
  }

  &:hover {
    color: white;
    background-color: #357ae8;
    ${'' /* background-color: #984223; */}
    ${'' /* background-color: #010203; */}
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  ${'' /* margin: 10px 0px; */}
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
