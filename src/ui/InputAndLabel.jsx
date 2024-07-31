import styled from "styled-components";

const InputAndLabel = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: -3rem;

  label {
    margin-left: 1.6rem;
    font-size: 1.55rem;
    font-weight: 300;
    color: var(--color-black-60);

    transition: all 0.2s ease-in-out;
  }
`;

export default InputAndLabel;
