import { useArticles } from "../services/useArticles";

import BlogItems from "../ui/BlogItems";
import BlogNav from "../ui/BlogNav";

function AllPosts() {
  const { articles, isLoading } = useArticles();

  return (
    <section className="allposts">
      <div className="allposts__container">
        <BlogNav />
        <BlogItems articles={articles} load={isLoading} />
      </div>
    </section>
  );
}

export default AllPosts;
