import styled from "styled-components";

const StyledResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50dvh;

  font-size: 5rem;
  color: var(--color-black-32);

  margin-top: 9rem;
  padding: 3rem 0;
`;

function NoSearchResults() {
  return (
    <StyledResults>
      There are no results, please try to change your request
    </StyledResults>
  );
}

export default NoSearchResults;
