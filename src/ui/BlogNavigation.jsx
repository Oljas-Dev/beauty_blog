import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import PropType from "prop-types";

import { Flex } from "./Flex";

BlogNavigation.propTypes = {
  type: PropType.string,
};

function BlogNavigation({ type }) {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const splittedPath = pathname.split("/");
  const currentFilter = searchParams.get("current");

  useEffect(
    function getCurrent() {
      if (currentFilter === null && splittedPath[1] === "blog") {
        setSearchParams({ current: "allposts" });
      }
    },
    [currentFilter, setSearchParams, splittedPath]
  );

  return (
    <Flex $mode={type}>
      <a href="/homepage#about">
        <span>About</span>
      </a>
      <a href="/blog">
        <span className={splittedPath[1] === "blog" ? "active" : ""}>Blog</span>
      </a>
      <a href="/homepage#contacts">
        <span>Contact</span>
      </a>
    </Flex>
  );
}

export default BlogNavigation;
