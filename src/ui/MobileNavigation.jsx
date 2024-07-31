import styled, { css } from "styled-components";
import { useSearchedArticles } from "../services/SearchedArticlesContext";
import { useNavigate } from "react-router-dom";

import NavLinks from "./NavLinks";
import BlogNavigation from "./BlogNavigation";
import { useEffect, useRef, useState } from "react";
import { StyledSearchInput } from "./InputSearch";
import { Underline } from "../styles/variables/Variables";
import NetworksLinks from "./NetworksLinks";

const StyledMobiNav = styled.div`
  display: none;

  @media only screen and (max-width: 37.5em) {
    display: block;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;

  @media only screen and (max-width: 37.5em) {
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledMobileMenu = styled.div`
  display: none;
  width: 80%;

  @media only screen and (max-width: 37.5em) {
    display: flex;
    flex-direction: column;
    align-self: start;
    gap: 7rem;
    overflow: hidden;
    height: 0;
    opacity: 0;
    transition: height 0.5s, opacity 0s;
  }
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

const StyledToggle = styled.span`
  ${(props) => {
    switch (props.$mode) {
      default:
        return css`
          display: block;
          background-color: var(--color-black);
          width: 2.5rem;
          height: 3px;
          position: relative;
          transition: all 0.5s;

          &::before,
          &::after {
            display: inline-block;
            content: "";
            background-color: var(--color-black);
            width: 2.5rem;
            height: 3px;
            transition: all 0.5s;
          }

          &::before {
            position: absolute;
            top: 0.8rem;
            right: 0;
            
          }

          &::after {
            position: absolute;
            top: -0.7rem;
            right: 0;
            
          }

          @media only screen and (max-width: 25em) {
            &::after {
              top: -0.8rem;
            }
          }

          ${CheckBox}:checked + && {
            & {
              background-color: transparent;
            },
            &::after,
            &::before {
              top: 0;
              transition: all 0.5s;
            },
            &::before {
              transform: rotate(-135deg);
            },
            &::after {
              transform: rotate(135deg);
            },
          }
        `;
    }
  }}
`;

function MobileNavigation() {
  const [menuToggle, setMenuToggle] = useState(false);
  const { handleInput, handleSearchQuery } = useSearchedArticles();

  const inputCheckbox = useRef(null);
  const menu = useRef(null);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (menuToggle) {
        menu.current.style.opacity = "1";
        menu.current.style.height = "45rem";
        menu.current.style.margin = "5rem 0 0";
      } else {
        menu.current.style.opacity = "0";
        menu.current.style.height = "0";
        menu.current.style.margin = "0";
      }
    },
    [menuToggle]
  );

  return (
    <Content>
      <Container>
        <a href="/homepage">
          <img src="../../public/logo.png" alt="logo" height={16} width={228} />
        </a>
        <NavLinks onShowSearch={handleInput} />

        <StyledMobiNav>
          <CheckboxLabel htmlFor="mobile_menu">
            <CheckBox
              onChange={() => setMenuToggle((show) => !show)}
              id="mobile_menu"
              ref={inputCheckbox}
              placeholder="checkbox"
              checked={menuToggle}
            />
            <StyledToggle className="toggle" />
          </CheckboxLabel>
        </StyledMobiNav>
      </Container>
      <StyledMobileMenu className="dropdown" ref={menu}>
        <StyledSearchInput
          $mode="mobile"
          placeholder="type here..."
          type="search"
          onChange={(e) => {
            handleSearchQuery(e.target.value);
            navigate("search");
          }}
        />
        <BlogNavigation type="footer" />

        <Underline $mode="mobiNav" />

        <NetworksLinks mode="mobile" />
      </StyledMobileMenu>
    </Content>
  );
}

export default MobileNavigation;
