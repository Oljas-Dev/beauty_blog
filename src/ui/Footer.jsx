import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSearchedArticles } from "../services/SearchedArticlesContext";

import Button from "./Button";
import Img from "./Img";
import Subscription from "./Subscription";
import BlogNavigation from "./BlogNavigation";
import InputAndLabel from "./InputAndLabel";
import { Underline } from "../styles/variables/Variables";

import footerLogo from "../../public/footer-logo.png";
import searchPic from "../../public/search.svg";

const StyledFooter = styled.section`
  display: grid;
  grid-template-columns: 10% repeat(3, minmax(15rem, 1fr)) 10%;
  grid-column-gap: 5%;
  grid-row-gap: 2rem;

  background-color: var(--color-white);
  padding: 4rem 0 2rem 0;

  position: relative;

  @media only screen and (max-width: 68.75em) {
    grid-column-gap: 2%;
  }
  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 10% repeat(2, minmax(15rem, 1fr)) 10%;
  }
  @media only screen and (max-width: 43.75em) {
    grid-template-columns: 5% repeat(2, minmax(15rem, 1fr)) 5%;
  }
  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 5% 1fr 5%;
  }
`;

const StyledParagraph = styled.p`
  display: block;

  @media only screen and (max-width: 37.5em) {
    display: none;
  }
`;

const StyledSubscription = styled.div`
  grid-column-start: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const BlogContainer = styled.div`
  justify-self: center;
  grid-column: 3;
  grid-row: 1;

  @media only screen and (max-width: 56.25em) {
    grid-column: 2;
    grid-row: 2;
    justify-self: left;
  }
  @media only screen and (max-width: 37.5em) {
    grid-row: 3;
  }
`;

const InputContainer = styled.div`
  grid-column: 4;
  grid-row: 1;
  justify-self: right;
  position: relative;

  @media only screen and (max-width: 56.25em) {
    grid-column: 3;
    grid-row: 1;
  }
  @media only screen and (max-width: 37.5em) {
    display: none;
  }
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  font-weight: 200;
  border: none;
  background-color: transparent;

  padding: 4px 1.6rem;
  min-width: 30rem;

  border-bottom: 1px solid var(--color-black);

  align-self: start;
  transition: all 1s;

  @media only screen and (max-width: 80em) {
    min-width: 20rem;
  }

  &:active,
  &:focus {
    border-bottom: none;
    border: 1px solid var(--color-black);
  }

  &:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-3rem);
  }
`;

const Copyrights = styled.div`
  grid-column: 2 / -3;
  grid-row-start: 3;

  display: flex;
  justify-content: space-around;

  font-size: 1.4rem;
  font-weight: 300;

  @media only screen and (max-width: 56.25em) {
    grid-row-start: 4;
    grid-column: 2 / -2;
  }
  @media only screen and (max-width: 37.5em) {
    grid-row: 5;
  }
`;

const PrivacyPolicyLinks = styled.div`
  a {
    align-self: center;
    margin-right: 2.4rem;
  }
`;

const MobileUnderline = styled.div`
  position: relative;
  grid-column: 1 / span 3;

  @media only screen and (max-width: 37.5em) {
    grid-row: 2;

    &::after {
      content: "";

      display: block;
      border-bottom: 1px solid var(--color-black);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
  }
`;

function Footer() {
  const { handleSearcheQuery } = useSearchedArticles();

  const navigate = useNavigate();

  return (
    <StyledFooter>
      <MobileUnderline />
      <StyledSubscription>
        <img src={footerLogo} alt="Logo" width="220px" />
        <StyledParagraph>
          Get inspired! Receive discounts, tips and behind the scenes stories.
        </StyledParagraph>
      </StyledSubscription>

      <BlogContainer>
        <BlogNavigation type="footer" />
      </BlogContainer>

      <InputContainer>
        <InputAndLabel>
          <StyledInput type="search" placeholder="type here" />
          <label>type here</label>
        </InputAndLabel>
        <Button
          type="search"
          onChange={(e) => {
            handleSearcheQuery(e.target.value);
            navigate("search");
          }}
        >
          <Img src={searchPic} />
        </Button>
      </InputContainer>

      <Subscription />
      <Underline />

      <Copyrights>
        &copy; thestyledlife 2024, All rights reserved
        <PrivacyPolicyLinks>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </PrivacyPolicyLinks>
      </Copyrights>
    </StyledFooter>
  );
}

export default Footer;
