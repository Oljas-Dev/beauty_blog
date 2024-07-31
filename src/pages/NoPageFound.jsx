import styled from "styled-components";

const StyledResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50dvh;

  font-size: 5rem;
  color: var(--color-black-32);

  margin-top: 9rem;
`;

function NoSearchResults() {
  return (
    <StyledResults>
      No page found. Error number 404. Try not to panic, return to a h
      <a href="/"> omepage</a>
    </StyledResults>
  );
}

export default NoSearchResults;
