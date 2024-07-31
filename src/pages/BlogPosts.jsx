import styled from "styled-components";
import Button from "../ui/Button";
import ItemsTagAndDate from "../ui/ItemsTagAndDate";

const StyledBlogPosts = styled.section`
  display: grid;
  grid-template-columns: 10% repeat(4, 1fr) 10%;
  grid-row-gap: 2rem;
  grid-column-gap: 2.4rem;

  font-size: 2rem;
  font-weight: 600;
  line-height: 0.9302;

  padding-top: 2rem;
  padding-bottom: 7.5rem;
  border-bottom: 1px solid var(--color-black-32);

  @media only screen and (max-width: 75em) {
    grid-template-columns: 10% repeat(2, 40%) 10%;
    grid-template-rows: auto;
    grid-gap: 1.5rem;
  }
  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 10% 80% 10%;
  }
  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 5% 90% 5%;
  }
`;

const BlogPostsHeader = styled.div`
  grid-column: 2 / -2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 5rem;
  margin-top: 10rem;
  margin-bottom: 0.8rem;

  @media only screen and (max-width: 75em) {
    margin-top: 4rem;
  }
`;

const PostOne = styled.div`
  grid-column: 2 / span 2;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: var(--color-white);

  padding: 3.2rem 2.4rem;

  @media only screen and (max-width: 75em) {
    grid-column: 2;
  }
`;

const PostTwo = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: var(--color-white);

  padding: 1.6rem;
`;

const PostThree = styled.div`
  grid-column: 3 / 4;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: var(--color-white);

  padding: 1.6rem;

  @media only screen and (max-width: 37.5em) {
    grid-column: 2;
  }
`;

const PostFour = styled.div`
  grid-column: 4 / span 2;
  grid-row: 2 / span 2;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: var(--color-white);

  padding: 3.2rem 2.4rem;

  @media only screen and (max-width: 75em) {
    grid-column: 3;
    grid-row: 2;

    img {
      object-fit: cover;
      object-position: top;
      aspect-ratio: 2 / 1;
    }
  }
  @media only screen and (max-width: 37.5em) {
    grid-column: 2;
  }
`;

function BlogPosts() {
  return (
    <StyledBlogPosts id="blog">
      <BlogPostsHeader>
        <h2>Blog Posts</h2>
        <Button variation="arrow">
          <a href="/blog">View all posts</a>
        </Button>
      </BlogPostsHeader>

      <PostOne>
        <img src="../../public/posts-1.png" alt="blog picture 1" />
        <ItemsTagAndDate tag="fashion" date="4 Dec 2023" />
        <a href="/blog">12 Style essentials that make it easy to get dressed</a>
      </PostOne>

      <PostTwo>
        <img src="../../public/posts-2.png" alt="blog picture 2" />
        <ItemsTagAndDate tag="fashion" date="1 Dec 2023" />
        <a href="/blog">The Key Spring/Summer 2024 Trends To Know Now</a>
      </PostTwo>

      <PostThree>
        <img src="../../public/posts-3.png" alt="blog picture 3" />
        <ItemsTagAndDate tag="lifestyle" date="26 Nov 2023" />
        <a href="/blog">A Woman&apos;s lifestyle journal</a>
      </PostThree>

      <PostFour>
        <img src="../../public/posts-4.png" alt="blog picture 4" />
        <ItemsTagAndDate tag="beauty" date="21 Nov 2023" />
        <a href="/blog">Unveiling Beauty Secrets</a>
      </PostFour>
    </StyledBlogPosts>
  );
}

export default BlogPosts;
