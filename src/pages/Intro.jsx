import styled from "styled-components";

import Button from "../ui/Button";

// const StyledIntro = styled.div`
//   height: 100dvh;
//   background-image: url(../../public/intro.png);
//   background-size: cover;
//   background-repeat: no-repeat;

//   display: grid;
//   grid-template-columns: 10% 60% 30%;
//   justify-content: center;
//   align-items: center;

//   @media only screen and (max-width: 50em) {
//     background-position: bottom;
//   }
//   @media only screen and (max-width: 37.5em) {
//     grid-template-columns: 5% 65% 30%;
//   }
//   @media only screen and (max-width: 31.25em) {
//     grid-template-columns: 5% 80% 15%;
//   }
// `;

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
