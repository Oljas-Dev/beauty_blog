import styled, { css } from "styled-components";

export const Flex = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "footer":
        return css`
          align-self: flex-start;

          display: flex;
          align-items: center;
          gap: 4.8rem;

          a {
            position: relative;
          }

          a > span::before {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--color-black);

            position: absolute;
            top: 3rem;
            left: 0;

            transform: scale(0);
            transition: all 0.3s ease-in-out;
          }

          a > span:hover::before,
          a > span:active::before {
            transform: scale(1);
          }

          @media only screen and (max-width: 37.5em) {
            flex-direction: column;
            align-items: start;
            gap: 4rem;
          }
        `;

      default:
        return css`
          align-self: flex-start;

          display: flex;
          align-items: center;
          gap: 4.8rem;

          a {
            position: relative;
          }

          a > span::before {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--color-black);

            position: absolute;
            top: 3rem;
            left: 0;

            transform: scale(0);
            transition: all 0.3s ease-in-out;
          }

          a > span:hover::before,
          a > span:active::before {
            transform: scale(1);
          }
        `;
    }
  }}
`;
