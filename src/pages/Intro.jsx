import styled from "styled-components";

import { Button } from "../ui/Button";

const Intorduction = styled.div`
  grid-column-start: 2;

  display: flex;
  flex-direction: column;
  justify-content: left;

  font-size: 2.4rem;
  font-weight: 600;

  p {
    margin-top: 2.4rem;

    @media only screen and (max-width: 43.75em) {
      font-size: 2rem;
      margin-top: 1.6rem;
    }
  }
  button {
    font-size: 1.8rem;
    line-height: 1.7777;
    margin-top: 3.2rem;

    @media only screen and (max-width: 43.75em) {
      margin-top: 1.6rem;
    }
  }
`;

function Intro() {
  return (
    <div className="intro">
      <Intorduction>
        <h1>Elevate Life with Style.</h1>
        <p>
          Explore a curated blend of style and purpose at THE LIFESTYLED, where
          every post is a step towards a more inspired and elevated life.
        </p>
        <Button variation="yellow">
          <a href="/blog">Read Blog</a>
        </Button>
      </Intorduction>
    </div>
  );
}

export default Intro;
