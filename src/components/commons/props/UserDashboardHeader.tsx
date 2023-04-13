import React, { FC, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styled from "styled-components";
import { userHeader } from "../../../types";

const UserDashboardHeader: FC<userHeader> = ({ title, button, amount }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Container>
        <Head>
          <Message>
            <h1>{title}</h1>
          </Message>
          <SeeBalance>
            <BalanceDetails>
              <Viewer>
                <div style={{ marginBottom: "5px" }}>Available balance</div>
                <div
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? (
                    <AiFillEye
                      style={{
                        marginTop: "5px",
                        fontSize: "30px",
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      style={{
                        marginTop: "5px",
                        fontSize: "30px",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </div>
              </Viewer>
              {show ? (
                <Info>
                  {/* ₦{user?.Balance}.00</Info> */}
                  {amount}
                </Info>
              ) : (
                <Info>*******</Info>
              )}
            </BalanceDetails>
            <WithdrawButton>{button}</WithdrawButton>
          </SeeBalance>
        </Head>
      </Container>
    </div>
  );
};

export default UserDashboardHeader;

const Head = styled.div`
  width: 94%;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  z-index: 1;
`;

const Message = styled.div`
  font-size: 18px;
  display: flex;

  h1 {
    margin: 0;
    color: #333333;
    font-weight: 500;
  }

  @media screen and (max-width: 799px) {
    /* margin-top: 10px; */
  }
`;
const SeeBalance = styled.div`
  color: blue;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Viewer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  font-size: 18px;
  margin-top: 10px;
`;
const Info = styled.div`
  font-size: 25px;
`;
const BalanceDetails = styled.div``;
const WithdrawButton = styled.button`
  border-radius: 10px;

  color: white;
  background-color: #03b903;
  padding: 15px 60px;
  border: none;
  outline: none;
  font-size: 17px;
  margin-top: 30px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    background-color: #01a001;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 24vh;
  background-color: #f9f4ff;
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgb(130, 130, 130);
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  position: sticky;
  top: 0px;
  z-index: 5;
`;