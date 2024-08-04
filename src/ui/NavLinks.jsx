import styled from "styled-components";
import PropType from "prop-types";

import { Button } from "./Button";
import Img from "./Img";
import BlogNavigation from "./BlogNavigation";
import NetworksLinks from "./NetworksLinks";

import magnifier from "../../public/search.svg";

const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  @media only screen and (max-width: 37.5em) {
    display: none;
  }
`;

const Divider = styled.div`
  height: 1.6rem;
  width: 1px;
  background-color: var(--color-black);

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`;

NavLinks.propTypes = {
  onShowSearch: PropType.func,
};

function NavLinks({ onShowSearch }) {
  return (
    <FlexBlock>
      <BlogNavigation />

      <Divider />

      <NetworksLinks />

      <Divider />

      <Button type="image" onClick={onShowSearch}>
        <Img src={magnifier} />
      </Button>
    </FlexBlock>
  );
}

export default NavLinks;
