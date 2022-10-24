import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 375px) {
      ${props}
    }
    @media only screen and (max-width: 414px) {
      ${props}
    }
    @media only screen and (max-width: 390px) {
      ${props}
    }
    @media only screen and (max-width: 393px) {
      ${props}
    }
    @media only screen and (max-width: 360px) {
      ${props}
    }
  `;
};
