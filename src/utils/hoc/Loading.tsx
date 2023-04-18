import React from "react";
import styled from "styled-components";
import loading from "../../assets/images/recycle.gif";

const Loading = () => {
  return (
    <Container>
      <img src={loading} />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000ac;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 20;

  img {
    height: 70px;
    width: 70px;
  }
`;
