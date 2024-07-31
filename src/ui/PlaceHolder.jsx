import styled, { css, keyframes } from "styled-components";

const runner = keyframes`
  to {
    transform: translateX(35rem);
  }
`;

const searchRunner = keyframes`
  to {
    transform: translateX(72rem);
  }
`;

export const Placeholder = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "searchWindow":
        return css`
          width: 50%;
          background-color: var(--color-black-08);
          overflow: hidden;
          position: relative;

          &::before {
            content: "";
            display: block;
            height: 100%;
            width: 12rem;
            position: absolute;
            top: 0;
            left: -4rem;

            background-image: linear-gradient(
              to right,
              transparent,
              var(--color-white-60),
              transparent
            );
            animation: ${searchRunner} 1s infinite;
          }
        `;

      case "searchText":
        return css`
          width: 100%;
          height: 3rem;
          border-radius: 10rem;
          background-color: var(--color-black-08);
          overflow: hidden;
          position: relative;

          margin-top: 2rem;

          &::before {
            content: "";
            display: block;
            height: 100%;
            width: 5rem;
            position: absolute;
            top: 0;
            left: -3rem;

            background-image: linear-gradient(
              to right,
              transparent,
              var(--color-white-60),
              transparent
            );
            animation: ${searchRunner} 1s infinite;
          }
        `;

      case "searchTags":
        return css`
          width: 10%;
          height: 3rem;
          border-radius: 10rem;
          background-color: var(--color-black-08);
          overflow: hidden;
          position: relative;

          &::before {
            content: "";
            display: block;
            height: 100%;
            width: 3rem;
            position: absolute;
            top: 0;
            left: -2rem;

            background-image: linear-gradient(
              to right,
              transparent,
              var(--color-white-60),
              transparent
            );
            animation: ${runner} 1s infinite;
          }
        `;

      case "window":
        return css`
          width: 100%;
          aspect-ratio: 1 / 1;
          background-color: var(--color-black-08);
          overflow: hidden;
          position: relative;

          &::before {
            content: "";
            display: block;
            height: 100%;
            width: 8rem;
            position: absolute;
            top: 0;
            left: -4rem;

            background-image: linear-gradient(
              to right,
              transparent,
              var(--color-white-60),
              transparent
            );
            animation: ${runner} 1s infinite;
          }
        `;

      case "tags":
        return css`
          width: 20%;
          height: 3rem;
          border-radius: 10rem;
          background-color: var(--color-black-08);
          overflow: hidden;
          position: relative;

          &::before {
            content: "";
            display: block;
            height: 100%;
            width: 3rem;
            position: absolute;
            top: 0;
            left: -2rem;

            background-image: linear-gradient(
              to right,
              transparent,
              var(--color-white-60),
              transparent
            );
            animation: ${runner} 1s infinite;
          }
        `;

      case "text":
        return css`
          width: 100%;
          height: 3rem;
          border-radius: 10rem;
          background-color: var(--color-black-08);
          overflow: hidden;
          position: relative;

          &::before {
            content: "";
            display: block;
            height: 100%;
            width: 5rem;
            position: absolute;
            top: 0;
            left: -3rem;

            background-image: linear-gradient(
              to right,
              transparent,
              var(--color-white-60),
              transparent
            );
            animation: ${runner} 1s infinite;
          }
        `;

      default:
        return css`
          background-color: var(--color-black-08);
          overflow: hidden;
          position: relative;
        `;
    }
  }}
`;
