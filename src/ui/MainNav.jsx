import styled from "styled-components";
import { useEffect, useRef } from "react";

import { useSearchedArticles } from "../services/SearchedArticlesContext";
import { useNavigate } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import { StyledSearchInput } from "./InputSearch";

const NavPanel = styled.nav`
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
  width: 100%;
  padding: 2.5rem 0;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.16);
  transition: all 1s;
`;

const InputInteraction = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
`;

const StyledLabel = styled.label`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  display: block;

  position: absolute;
  top: 2.5rem;
  left: 11%;

  z-index: 998;

  cursor: pointer;

  &::after,
  &::before {
    content: "";
    display: inline-block;
    background-color: var(--color-black);
    width: 2px;
    height: 2rem;

    transition: all 0.3s ease-in-out 0.3s;

    position: absolute;
  }

  &::after {
    transform: rotate(90deg);
  }
  &::before {
    transform: rotate(-90deg);
  }
`;

const StyledInputBackdrop = styled.span`
  background-color: var(--color-white-87);

  display: block;
  height: 6rem;
  width: 100%;
`;

function MainNav() {
  const { showSearch, setShowSearch, handleInput, handleSearchQuery } =
    useSearchedArticles();

  const inputSearch = useRef(null);
  const inputControl = useRef(null);
  const navigate = useNavigate();

  useEffect(
    function () {
      function DOMManipulations() {
        inputControl.current.style.transform = "translateY(7.5rem)";
        inputSearch.current.focus();
      }

      function callback(e) {
        if (e.code === "Enter") {
          DOMManipulations();
          setShowSearch(true);
        }
      }

      if (showSearch === true) {
        DOMManipulations();
      } else {
        inputControl.current.style.transform = "translateY(-7.5rem)";
      }

      document.addEventListener("keydown", callback);
      return document.addEventListener("keydown", callback);
    },
    [showSearch, setShowSearch]
  );

  return (
    <>
      <NavPanel className="main_nav">
        <MobileNavigation />
      </NavPanel>

      <InputInteraction ref={inputControl}>
        <StyledSearchInput
          type="search"
          placeholder="type here..."
          ref={inputSearch}
          name="input-search"
          onChange={(e) => {
            handleSearchQuery(e.target.value);
            navigate("search");
          }}
        />
        <StyledLabel htmlFor="input-search" onClick={handleInput} />
        <StyledInputBackdrop />
      </InputInteraction>
    </>
  );
}

export default MainNav;
