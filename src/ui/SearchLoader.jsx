import styled from "styled-components";
import { useState } from "react";

import { Placeholder } from "./PlaceHolder";
import { SubContainer, TagsContainer } from "../styles/variables/Variables";

const StyledSearchLoader = styled.div`
  grid-column: 2;

  &:not(:first-child) {
    margin-top: 3.2rem;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;

  background-color: var(--color-black-08);
  width: 100%;
  height: 30rem;

  padding: 1.6rem 3.2rem 1.6rem 1.6rem;
`;

function CreatePlaceholder() {
  return (
    <>
      <Container>
        <Placeholder $mode="searchWindow" />
        <SubContainer>
          <div>
            <Placeholder $mode="searchText" />
            <Placeholder $mode="searchText" />
          </div>

          <TagsContainer>
            <Placeholder $mode="searchTags" />
            <Placeholder $mode="searchTags" />
          </TagsContainer>
        </SubContainer>
      </Container>
    </>
  );
}

function SearchLoader() {
  const [loaders] = useState(() =>
    Array.from({ length: 5 }, () => CreatePlaceholder())
  );

  return loaders.map((loader, i) => (
    <StyledSearchLoader key={i}>{loader}</StyledSearchLoader>
  ));
}

export default SearchLoader;
