import styled from "styled-components";

import AboutMe from "./AboutMe";
import BlogPosts from "./BlogPosts";
import Intro from "./Intro";

const StyledHomepage = styled.main`
  width: 100%;
`;

function Homepage() {
  return (
    <StyledHomepage>
      <Intro />
      <BlogPosts />
      <AboutMe />
    </StyledHomepage>
  );
}

export default Homepage;
