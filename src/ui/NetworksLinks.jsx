import styled, { css } from "styled-components";
import Button from "./Button";
import Img from "./Img";
import PropType from "prop-types";

const FlexNets = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "mobile":
        return css`
          display: flex;
          gap: 1.6rem;
          padding-left: 1rem;

          position: relative;
        `;

      default:
        return css`
          display: flex;
          gap: 1.6rem;

          position: relative;

          @media only screen and (max-width: 56.25em) {
            display: none;
          }
        `;
    }
  }}
`;

NetworksLinks.propTypes = {
  mode: PropType.string,
};

function NetworksLinks({ mode }) {
  return (
    <FlexNets $mode={mode}>
      <Button type="image">
        <Img src="../../../public/wifi.png" alt="network" />
      </Button>
      <Button type="image">
        <Img src="../../../public/facebook.svg" alt="facebook" />
      </Button>
      <Button type="image">
        <Img src="../../../public/instagram.svg" alt="instagram" />
      </Button>
      <Button type="image">
        <Img src="../../../public/twitter.svg" alt="twitter" />
      </Button>
      <Button type="image">
        <Img src="../../../public/mail.svg" alt="email" />
      </Button>
    </FlexNets>
  );
}

export default NetworksLinks;
