import styled from "styled-components";

import Button from "./Button";
import NetworksLinks from "./NetworksLinks";
import InputAndLabel from "./InputAndLabel";

const StyledSubscription = styled.div`
  grid-row: 2;
  grid-column: 2 / -2;

  display: flex;
  justify-content: space-between;
  align-items: start;

  padding-bottom: 4rem;

  @media only screen and (max-width: 56.25em) {
    grid-row: 3;
    padding-bottom: 2rem;
  }
  @media only screen and (max-width: 37.5em) {
    grid-row: 4;
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const StyledInput = styled.input`
  background-color: var(--color-black-08);
  font-size: 1.4rem;
  font-weight: 200;

  padding: 1rem 1.6rem;
  min-width: 40rem;

  border: 1px solid transparent;
  outline: none;
  border-radius: 99rem;

  &:active,
  &:focus {
    border: 1px solid var(--color-yellow);
  }

  &:focus:invalid {
    border: 1px solid var(--color-pink);
  }

  &::placeholder {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--color-black-60);
  }

  &:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-3rem);
  }

  @media only screen and (max-width: 37.5em) {
    min-width: 30rem;
  }
`;

const InputButtonGroup = styled.div`
  position: relative;
`;

const BtnPosition = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;

  @media only screen and (max-width: 37.5em) {
    top: 2.2px;
    right: 2.2px;
  }
`;

const MobileParagraph = styled.p`
  display: none;

  @media only screen and (max-width: 37.5em) {
    display: block;
    margin-top: 2.8rem;
  }
`;

function Subscription() {
  return (
    <StyledSubscription>
      <InputButtonGroup>
        <InputAndLabel>
          <StyledInput type="email" placeholder="your email" />
          <label>your email</label>
        </InputAndLabel>

        <BtnPosition>
          <Button variation="yellow">Subscribe</Button>
        </BtnPosition>
      </InputButtonGroup>

      <MobileParagraph>
        Get inspired! Receive discounts, tips and behind the scenes stories.
      </MobileParagraph>

      <NetworksLinks />
    </StyledSubscription>
  );
}

export default Subscription;
