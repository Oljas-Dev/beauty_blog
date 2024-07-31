import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchedArticlesProvider } from "./services/SearchedArticlesContext";

import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import AllPosts from "./pages/AllPosts";
import Article from "./pages/Article";
import SearchResults from "./pages/SearchResults";
import NoPageFound from "./pages/NoPageFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchedArticlesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="homepage" />} />
              <Route path="homepage" element={<Homepage />} />
              <Route path="blog" element={<AllPosts />} />
              <Route path="blog/article" element={<Article />} />
              <Route path="search" element={<SearchResults />} />
              <Route path="search/article" element={<Article />} />
              <Route path="*" element={<NoPageFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchedArticlesProvider>
    </QueryClientProvider>
  );
}

export default App;
