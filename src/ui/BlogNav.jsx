import styled from "styled-components";
import { Button } from "./Button";
import { useSearchParams } from "react-router-dom";

const StyledBlogNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-column: 1 / -1;
  margin-bottom: 7rem;

  @media only screen and (max-width: 43.75em) {
    flex-direction: column;
    gap: 5rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2.4rem;

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }
`;

const MobileView = styled.div`
  display: flex;
  gap: 2.4rem;

  @media only screen and (max-width: 37.5em) {
    display: flex;
    gap: 5rem;
  }
  @media only screen and (max-width: 18.75em) {
    display: flex;
    gap: 2rem;
  }
`;

function BlogNav() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get("current");

  return (
    <StyledBlogNav>
      <h2>Blog posts</h2>
      <ButtonsContainer>
        <MobileView>
          <Button
            type="blogNav"
            hover="yellow"
            variation={currentFilter === "allposts" ? "activeYellow" : ""}
            onClick={() => setSearchParams({ current: "allposts" })}
          >
            All Posts
          </Button>

          <Button
            type="blogNav"
            hover="pink"
            variation={currentFilter === "beauty" ? "activePink" : ""}
            onClick={() => setSearchParams({ current: "beauty" })}
          >
            Beauty
          </Button>
        </MobileView>

        <MobileView>
          <Button
            type="blogNav"
            hover="yellow"
            variation={currentFilter === "fashion" ? "activeYellow" : ""}
            onClick={() => setSearchParams({ current: "fashion" })}
          >
            Fashion
          </Button>

          <Button
            type="blogNav"
            hover="blue"
            variation={currentFilter === "lifestyle" ? "activeBlue" : ""}
            onClick={() => setSearchParams({ current: "lifestyle" })}
          >
            Lifestyle
          </Button>
        </MobileView>
      </ButtonsContainer>
    </StyledBlogNav>
  );
}

export default BlogNav;
