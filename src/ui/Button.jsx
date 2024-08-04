import styled, { css } from "styled-components";

const types = {
  image: css`
    background-color: inherit;
    width: 1.6rem;
    height: 1.6rem;

    &::before {
      content: "";
      display: block;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: var(--color-black-08);

      position: absolute;
      top: -0.7rem;
      left: -0.7rem;
      visibility: hidden;
      transition: all 0.2s ease-in-out;
      transform: scale(0);
    }

    &:hover::before {
      visibility: visible;
      transform: scale(1);
    }
  `,

  search: css`
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    background-color: inherit;
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
  `,

  searchClose: css`
    width: 2rem;
    height: 2rem;

    position: absolute;
    top: 7.3rem;
    left: 0;
  `,
  blogNav: css`
    background-color: var(--color-black-08);
    color: var(--color-black-60);

    font-size: 1.8rem;
    line-height: 1.4444;
    font-weight: 600;

    padding: 1.2rem 3.2rem;
    border-radius: 6px;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 37.5em) {
      width: 15rem;
    }
  `,
};

const hovers = {
  yellow: css`
    &:hover {
      background-color: var(--color-yellow);
      color: var(--color-white);
    }
  `,
  pink: css`
    &:hover {
      background-color: var(--color-pink);
      color: var(--color-white);
    }
  `,
  blue: css`
    &:hover {
      background-color: var(--color-blue);
      color: var(--color-white);
    }
  `,
};

const variations = {
  yellow: css`
    background-color: var(--color-yellow);
    color: var(--color-white);
    border-radius: 10rem;
    padding: 0.75rem 3.1rem;
    align-self: self-start;
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-yellow-light);
    }

    @media only screen and (max-width: 37.5em) {
      padding: 0.75rem 1rem;
      font-size: 1.6rem;
    }
  `,
  arrow: css`
    background-image: url(../../public/arrow.svg);
    background-repeat: no-repeat;
    background-position: right;
    background-color: transparent;

    font-size: 1.8rem;
    line-height: 1.4444;

    display: flex;
    justify-content: space-between;
    align-items: center;

    max-height: 3rem;
    padding-right: 3.8rem;

    @media only screen and (max-width: 62.5em) {
      padding-right: 4.5rem;
    }
  `,
  activeYellow: css`
    background-color: var(--color-yellow);
    color: var(--color-white);
  `,
  activePink: css`
    background-color: var(--color-pink);
    color: var(--color-white);
  `,
  activeBlue: css`
    background-color: var(--color-blue);
    color: var(--color-white);
  `,
};

const Button = styled.button`
  border: none;
  outline: none;
  position: relative;

  ${(props) => types[props.type]}
  ${(props) => variations[props.variation]}
  ${(props) => hovers[props.hover]}
`;

export { Button };
