import styled, { css } from "styled-components";
import PropType from "prop-types";

import Button from "./Button";
import Img from "./Img";

import wifi from "../../public/wifi.png";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import twitter from "../../public/twitter.svg";
import email from "../../public/mail.svg";

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
        <Img src={wifi} alt="network" />
      </Button>
      <Button type="image">
        <Img src={facebook} alt="facebook" />
      </Button>
      <Button type="image">
        <Img src={instagram} alt="instagram" />
      </Button>
      <Button type="image">
        <Img src={twitter} alt="twitter" />
      </Button>
      <Button type="image">
        <Img src={email} alt="email" />
      </Button>
    </FlexNets>
  );
}

export default NetworksLinks;
