import { css } from "styled-components";

export const mobile = (props: string) => {
  return css`
    @media only screen and (max-width: 426px) {
      ${props}
    }
  `;
};

export const tablet = (props: string) => {
  return css`
    @media only screen and (max-width: 769px) {
      ${props}
    }
  `;
};

export const desktop = (props: string) => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `;
};
