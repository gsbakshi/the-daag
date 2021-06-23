import styled, { css } from 'styled-components';

const subColor =  'grey';
const mainColor = 'whitesmoke';

const shrinkLabelStyles = css`
  top: -20px;
  font-size: 12px;
  color: ${mainColor};
  padding-left: 0px;
  opacity: 0.5;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3rem;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: ${mainColor};
  color: ${subColor};
  font-size: 18px;
  padding: 10px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 4px;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    $(shrinkLabelStyles);
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  font-variant-caps: small-caps;
  padding-left: 10px;

  &.shrink {
    ${shrinkLabelStyles};
  }
`;