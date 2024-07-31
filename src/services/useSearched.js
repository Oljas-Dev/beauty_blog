import { useQuery } from "@tanstack/react-query";
import { searchArticles } from "./apiStorage";
import { useSearchedArticles } from "./SearchedArticlesContext";

export function useSearched() {
  const { searchQuery: text } = useSearchedArticles();
  const {
    data: searchedArticles,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["beauty-posts", text],
    queryFn: () => searchArticles(text),
  });

  return { searchedArticles, error, isLoading };
}
