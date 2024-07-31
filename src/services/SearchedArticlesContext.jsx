import { createContext, useContext, useState } from "react";
import { useArticles } from "./useArticles";
import PropType from "prop-types";

const SearchedArticlesContext = createContext();

SearchedArticlesProvider.propTypes = {
  children: PropType.any,
};

function SearchedArticlesProvider({ children }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { articles, isLoading } = useArticles();

  const searchedArticles =
    searchQuery.length > 0 &&
    articles?.filter((article) =>
      `${article.title} ${article.tag} ${article.post_text} ${article.post_slogan}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

  function handleInput() {
    setShowSearch((show) => !show);
  }

  function handleSearchQuery(value) {
    setSearchQuery(value);
  }

  return (
    <SearchedArticlesContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchedArticles,
        isLoading,
        handleInput,
        handleSearchQuery,
        showSearch,
        setShowSearch,
      }}
    >
      {children}
    </SearchedArticlesContext.Provider>
  );
}

function useSearchedArticles() {
  const context = useContext(SearchedArticlesContext);

  if (context === undefined)
    throw new Error("Cannot use context outside ArticlesContext");
  return context;
}

export { SearchedArticlesProvider, useSearchedArticles };
