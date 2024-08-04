import styled, { css } from "styled-components";

export const StyledSearchInput = styled.input`
  ${(props) => {
    switch (props.$mode) {
      case "mobile":
        return css`
          background-color: transparent;
          padding: 0.5rem 0.5rem;
          width: 100%;

          border-bottom: 1px solid var(--color-black-32);

          z-index: 999;

          &:focus,
          &:active {
            outline: none;
          }

          &:focus + label::after {
            transform: rotate(135deg);
          }

          &:focus + label::before {
            transform: rotate(-135deg);
          }
        `;

      case "footer":
        return css`
          font-size: 1.5rem;
          font-weight: 200;
          border: none;
          background-color: transparent;
          position: relative;

          padding: 4px 1.6rem;
          min-width: 30rem;

          border-bottom: 1px solid var(--color-black);

          align-self: start;
          transition: all 1s;

          @media only screen and (max-width: 80em) {
            min-width: 20rem;
          }

          &:active,
          &:focus {
            border-bottom: none;
            border: 1px solid var(--color-black);
          }

          &:placeholder-shown + label {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-3rem);
          }
        `;

      default:
        return css`
          background-color: transparent;
          padding: 0.5rem 0.5rem;
          width: 75%;
          position: absolute;
          top: 2rem;
          left: 12.5%;

          border-bottom: 1px solid var(--color-black-32);

          z-index: 999;

          &:focus,
          &:active {
            outline: none;
          }

          &:focus + label::after {
            transform: rotate(135deg);
          }

          &:focus + label::before {
            transform: rotate(-135deg);
          }
        `;
    }
  }}
`;
