import { useQuery } from "@tanstack/react-query";
import { getArticles } from "./apiStorage";

export function useArticles() {
  const {
    isLoading,
    data: articles,
    error,
  } = useQuery({
    queryKey: ["beauty-posts"],
    queryFn: getArticles,
  });

  return { isLoading, articles, error };
}
