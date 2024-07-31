import { useState } from "react";
import styled from "styled-components";

import { Placeholder } from "./PlaceHolder";

const StyledContainer = styled.div`
  grid-column: 1 / -1;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  padding: 1.6rem;

  @media only screen and (max-width: 68.75em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }
`;

const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: var(--color-black-08);
  padding: 1.6rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function CreateLoader() {
  return (
    <>
      <Placeholder $mode="window" />
      <FlexContainer>
        <Placeholder $mode="tags" />
        <Placeholder $mode="tags" />
      </FlexContainer>
      <Placeholder $mode="text" />
    </>
  );
}

function Loader() {
  const [loaders] = useState(() =>
    Array.from({ length: 8 }, () => CreateLoader())
  );

  return (
    <StyledContainer className="allposts__container">
      {loaders.map((loader, i) => (
        <StyledLoader key={i}>{loader}</StyledLoader>
      ))}
    </StyledContainer>
  );
}

export default Loader;
