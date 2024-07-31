import PropType from "prop-types";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";

import ItemsTagAndDate from "./ItemsTagAndDate";
import Loader from "./Loader";

const StyledBlogItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: var(--color-white);
  padding: 1.6rem;
`;

const Img = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: top;
  width: 100%;
`;

const ArticleSubject = styled.p`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.08;
  cursor: pointer;
`;

BlogItems.propTypes = {
  articles: PropType.array,
  load: PropType.any,
};

function BlogItems({ articles, load }) {
  const [searchParams] = useSearchParams();

  const currentFilter = searchParams.get("current");

  if (load) return <Loader />;

  if (currentFilter === "beauty") {
    return articles
      ?.filter((article) => article.tag === "beauty")
      .map((article) => (
        <Link
          key={article.id}
          to={`article?current=${currentFilter}&id=${article.id}`}
        >
          <StyledBlogItem>
            <Img src={article.image} alt={`Picture number ${article.id}`} />
            <ItemsTagAndDate tag={article.tag} date={article.created_at} />
            <ArticleSubject>
              {article.post_slogan.split(" ").slice(0, 10).join(" ") + "..."}
            </ArticleSubject>
          </StyledBlogItem>
        </Link>
      ));
  }

  if (currentFilter === "fashion") {
    return articles
      ?.filter((article) => article.tag === "fashion")
      .map((article) => (
        <Link
          key={article.id}
          to={`article?current=${currentFilter}&id=${article.id}`}
        >
          <StyledBlogItem>
            <Img src={article.image} alt={`Picture number ${article.id}`} />
            <ItemsTagAndDate tag={article.tag} date={article.created_at} />
            <ArticleSubject>
              {article.post_slogan.split(" ").slice(0, 10).join(" ") + "..."}
            </ArticleSubject>
          </StyledBlogItem>
        </Link>
      ));
  }

  if (currentFilter === "lifestyle") {
    return articles
      ?.filter((article) => article.tag === "lifestyle")
      .map((article) => (
        <Link
          key={article.id}
          to={`article?current=${currentFilter}&id=${article.id}`}
        >
          <StyledBlogItem>
            <Img src={article.image} alt={`Picture number ${article.id}`} />
            <ItemsTagAndDate tag={article.tag} date={article.created_at} />
            <ArticleSubject>
              {article.post_slogan.split(" ").slice(0, 10).join(" ") + "..."}
            </ArticleSubject>
          </StyledBlogItem>
        </Link>
      ));
  }
  return (
    <>
      {articles?.map((article) => (
        <Link
          key={article.id}
          to={`article?current=${currentFilter}&id=${article.id}`}
        >
          <StyledBlogItem>
            <Img src={article.image} alt={`Picture number ${article.id}`} />
            <ItemsTagAndDate tag={article.tag} date={article.created_at} />
            <ArticleSubject>
              {article.post_slogan.split(" ").slice(0, 10).join(" ") + "..."}
            </ArticleSubject>
          </StyledBlogItem>
        </Link>
      ))}
    </>
  );
}

export default BlogItems;
