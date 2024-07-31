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
