import styled, { css } from "styled-components";

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  width: 50%;
  height: 100%;

  h3 {
    font-family: "Mukta", sans-serif;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Underline = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "mobiNav":
        return css`
          &::after {
            content: "";
            display: block;
            border-bottom: 1px solid var(--color-black);
            position: absolute;
            left: 0;
            right: 0;
          }
        `;

      default:
        return css`
          &::after {
            content: "";
            display: block;
            border-bottom: 1px solid var(--color-black);
            position: absolute;
            bottom: 6.5rem;
            left: 0;
            right: 0;
          }
        `;
    }
  }}
`;

export { SubContainer, TagsContainer, Underline };
