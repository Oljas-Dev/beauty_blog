import { useSearchParams } from "react-router-dom";
import { useArticles } from "../services/useArticles";
import { useEffect } from "react";
import { useSearched } from "../services/useSearched";

import ItemsTagAndDate from "../ui/ItemsTagAndDate";

function Article() {
  const { articles } = useArticles();
  const { searchedArticles } = useSearched();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");

  const quantity = 3;

  const filteredArticles =
    articles?.filter((article) => article.id === Number(id)) ||
    searchedArticles?.filter((article) => article.id === Number(id));

  useEffect(
    function () {
      if (filteredArticles) window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [filteredArticles]
  );

  function handleRelatedPosts(id, tag) {
    setSearchParams({ current: tag, id: id });
  }

  return (
    <div className="article">
      {filteredArticles?.map((article) => (
        <div className="article__container" key={article.id}>
          <h2>{article.title}</h2>
          <ItemsTagAndDate tag={article.tag} date={article.created_at} />

          <div className="article__content">
            <img src={article.image} alt="Article image" />
            <h3>{article.post_slogan}</h3>
            <span>{article.post_text}</span>
          </div>
        </div>
      ))}

      <div className="article__related">
        <h3>Related posts</h3>
        {articles
          ?.filter(
            (article) =>
              article.tag === filteredArticles[0].tag &&
              article.id !== filteredArticles[0].id
          )
          .slice(0, quantity)
          .map((article) => (
            <div
              className="article__related-container"
              key={article.id}
              onClick={() => handleRelatedPosts(article.id, article.tag)}
            >
              <img src={article.image} alt="Related article image" />
              <div>{article.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Article;
