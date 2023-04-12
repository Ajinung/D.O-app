import React from "react";
import styled from "styled-components";
import { UserDashboardHeader } from "../../components";
const MakePayment = () => {
  return (
    <div>
      <Container>
        <UserDashboardHeader
          title="Waller"
          amount="N2000"
          button="Make Request"
        />
      </Container>
    </div>
  );
};

export default MakePayment;

const Container = styled.div`
  width: calc(100vw - 270px);
  overflow-x: hidden;
  /* height: 100vh; */
  /* background-color: rebeccapurple; */

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;
