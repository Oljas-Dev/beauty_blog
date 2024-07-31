import styled from "styled-components";
import PropTypes from "prop-types";
import { useSearched } from "../services/useSearched";

import SearchLoader from "../ui/SearchLoader";
import { SubContainer } from "../styles/variables/Variables";
import NoSearchResults from "./NoSearchResults";
import { Link } from "react-router-dom";
import ItemsTagAndDate from "../ui/ItemsTagAndDate";

const StyledSearchResults = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;

  margin-top: 17rem;
`;

const Container = styled.div`
  grid-column: 2;

  div {
    margin-bottom: 3.2rem;
  }
`;

const SearchResult = styled.div`
  display: flex;
  gap: 2rem;

  background-color: var(--color-white);
  width: 100%;
  height: 30rem;

  padding: 1.6rem 3.2rem 1.6rem 1.6rem;
`;

const ImageContainer = styled.img`
  width: 50%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
`;

SearchResults.propTypes = {
  searchedArticles: PropTypes.array,
  isLoading: PropTypes.any,
};

function SearchResults() {
  const { searchedArticles, isLoading } = useSearched();

  if (isLoading)
    return (
      <StyledSearchResults>
        <SearchLoader />
      </StyledSearchResults>
    );

  if (searchedArticles.length <= 0) return <NoSearchResults />;

  return (
    <StyledSearchResults>
      <Container>
        {searchedArticles?.map((article) => (
          <Link
            key={article.id}
            to={`article?current=${article.tag}&id=${article.id}`}
          >
            <SearchResult>
              <ImageContainer
                src={article.image}
                alt={`Article image number ${article.id}`}
              />
              <SubContainer>
                <h3>{article.post_slogan}</h3>
                <ItemsTagAndDate tag={article.tag} date={article.created_at} />
              </SubContainer>
            </SearchResult>
          </Link>
        ))}
      </Container>
    </StyledSearchResults>
  );
}

export default SearchResults;
