import styled from "styled-components";
import { Outlet } from "react-router-dom";

import MainNav from "./MainNav";
import Footer from "./Footer";
import Contacts from "../pages/Contacts";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100dvh;
  position: relative;

  @media only screen and (max-width: 145rem) {
    padding-top: 6rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <MainNav />
      <Outlet />
      <Contacts />
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
