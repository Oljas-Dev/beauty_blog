import styled from "styled-components";
import SliderImages from "../features/SliderImages";
import SliderMobile from "../features/SliderMobile";

const StyledContacts = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 8rem;

  margin-top: 16rem;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;

  text-align: center;
`;

function Contacts() {
  return (
    <StyledContacts id="contacts">
      <CTA>
        <h2>Follow my lifestyle daily on Instagram and join 100k others.</h2>
        <p>@ thestyledlife / #thestyledlife</p>
        <SliderImages />
        <SliderMobile />
      </CTA>
    </StyledContacts>
  );
}

export default Contacts;
