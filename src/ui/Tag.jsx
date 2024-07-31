import styled, { css } from "styled-components";

const types = {
  orange: css`
    background-color: var(--color-orange);
  `,
  blue: css`
    background-color: var(--color-blue);
  `,
  pink: css`
    background-color: var(--color-pink);
  `,
};

const Tag = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.6428;
  color: var(--color-white);

  border-radius: 10rem;
  padding: 2px 6px;

  cursor: pointer;

  ${(props) => types[props.type]}
`;

export default Tag;
