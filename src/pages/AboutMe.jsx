import styled from "styled-components";

import picture1 from "../../public/picture-1.png";
import picture2 from "../../public/picture-2.png";
import picture3 from "../../public/picture-3.png";

const StyledAboutMe = styled.section`
  display: grid;
  grid-template-columns: 10% 35% 10% 35% 10%;
  padding-top: 12rem;

  @media only screen and (max-width: 68.75em) {
    grid-template-columns: 10% 38% 4% 38% 10%;
  }
  @media only screen and (max-width: 62.5em) {
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: repeat(2, 1fr);
    padding-top: 8.5rem;
  }
  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 5% 90% 5%;
    grid-template-rows: 1fr minmax(min-content, 25rem);
    padding-top: 7rem;
  }
`;

const AboutMeText = styled.div`
  grid-column-start: 2;

  h2 {
    margin-bottom: 3.2rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

const Pictures = styled.div`
  grid-column-start: 4;
  width: 70rem;
  height: stretch;

  position: relative;

  img {
    border: 1rem solid var(--color-white);
    border-radius: 60rem;
  }

  @media only screen and (max-width: 93.75em) {
    width: 60rem;
  }
  @media only screen and (max-width: 81.25em) {
    width: 50rem;
  }
  @media only screen and (max-width: 62.5em) {
    grid-column-start: 2;
    grid-row-start: 2;
    margin: 0 auto;
  }
  @media only screen and (max-width: 37.5em) {
    width: 40rem;
  }
  @media only screen and (max-width: 31.25em) {
    width: 35rem;

    img {
      border: 0.5rem solid var(--color-white);
    }
  }
`;

const ImgOne = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: 40%;

  @media only screen and (max-width: 62.5em) {
    left: 5rem;
  }
  @media only screen and (max-width: 31.25em) {
    left: 2rem;
  }
`;

const ImgTwo = styled.img`
  position: absolute;
  top: 0;
  right: 10rem;
  z-index: 20;

  width: 50%;
  aspect-ratio: 1 / 1.6;

  @media only screen and (max-width: 62.5em) {
    right: 5rem;
  }
  @media only screen and (max-width: 31.5em) {
    right: 3.5rem;
  }
`;
const ImgThree = styled.img`
  position: absolute;
  top: 30rem;
  left: 0;
  z-index: 30;

  width: 38%;
  aspect-ratio: 1 / 1;

  @media only screen and (max-width: 81.25em) {
    top: 21rem;
  }
  @media only screen and (max-width: 62.5em) {
    left: 5rem;
  }
  @media only screen and (max-width: 37.5rem) {
    top: 18rem;
  }
  @media only screen and (max-width: 31.25em) {
    left: 2rem;
    top: 15rem;
  }
`;

function AboutMe() {
  return (
    <StyledAboutMe id="about">
      <AboutMeText>
        <h2>Welcome, I&apos;m Caroline</h2>
        <p>
          My name is Carolina, and I&apos;m delighted to invite you into the
          captivating chapters of my lifestyle journey. Here, within the pages
          of my blog, you&apos;ll discover a harmonious blend of beauty,
          fashion, wellness, and the art of mindful living. Join me as we
          navigate the vibrant realms of curated fashion, where personal style
          meets expression.
        </p>
        <p>
          Unveil the secrets of my wellness rituals, each designed to embrace a
          holistic approach to beauty from the inside out. Together, let&apos;s
          explore the soulful art of mindful living, where every moment becomes
          an opportunity to dance with style, embrace grace, and uncover the
          enchantment in the ordinary.
        </p>
        <p>
          These pages are not just a blog but a sanctuary for those seeking
          inspiration for a life well-lived, adorned with beauty, curated
          fashion, and the essence of mindful elegance. I&apos;m thrilled to
          share this journey with you.
        </p>
      </AboutMeText>

      <Pictures>
        <ImgOne src={picture1} alt="Blogger's photo one" />
        <ImgTwo src={picture3} alt="Blogger's photo two" />
        <ImgThree src={picture2} alt="Blogger's photo three" />
      </Pictures>
    </StyledAboutMe>
  );
}

export default AboutMe;
