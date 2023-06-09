import React from "react";
import styled from "styled-components";
import { iBars } from "../../../types";

const NavBars: React.FC<iBars> = ({ pic, routeName, cl, bd, hov }) => {
  return (
    <Container hov={hov} cl={cl} bd={bd}>
      <Pic>{pic}</Pic>
      <Name>{routeName}</Name>
    </Container>
  );
};
export default NavBars;

const Container = styled.div<{ cl: string; bd: string; hov: string }>`
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  gap: 25px;
  padding-left: 30px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    padding-left: 17px;
  }
  color: ${(props) => props.cl};
  border-left: ${(props) => props.bd};
  transition: all 350ms;
  :hover {
    background-color: ${(props) => props.hov};
  }
  cursor: pointer;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
`;
const Pic = styled.div`
  font-size: 23px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    margin-right: 20px;
  }
`;
const Name = styled.div`
  margin-bottom: 2px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;
