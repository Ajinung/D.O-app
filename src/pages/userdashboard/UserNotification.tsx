import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
// import { getAllAdminMsg } from "../../Api/adminApi";
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const UserNotification = () => {
  const [show, setShow] = useState<boolean>(false);
  const [shows, setShows] = useState<boolean>(false);
  const allAdminMsg = useQuery({
    queryKey: ["viewAdminMsg"],
    // queryFn: getAllAdminMsg,
  });
  const toggleShows = () => {
    setShows(!shows);
  };
  const toggleShow = () => {
    setShow(!show);
  };
   const percentage = 3;
  // console.log(`this is all client message ${allAdminMsg}`);
  return (
      <Top1>
        <Notify>
            <h1>Good Morning, <br/>Jaji</h1>
            <p>Here you can track all your request<br/> and check all your transaction and history</p>
            <button>Check</button>
        </Notify>
        <MsgHold>
            <Box>
                <Details>
                <CircularProgressbar value={percentage} maxValue={4} text={`${percentage}%`} styles={{root:{},path:{stroke:"#03b903"},text:{fill:"#03b903"}}}/>
                </Details>
                <p>Monthly Request</p>
                <span>3/4 task done</span>
            </Box>
            <ButtonHold>
          <PayOnline onClick={toggleShow}>Make Request</PayOnline>
          <Transfer onClick={toggleShows}>Custom Request</Transfer>
        </ButtonHold>
        </MsgHold>
        {show ? (<Hold>
          <Holds>
            <p>Request is Sucessfull......</p>
            <small>Make sure to end request as soon as <br/>the work is been done</small>
            <button onClick={toggleShow}>OK</button>
          </Holds>
          {/* <Ic onClick={toggleShow}>
            <GrClose/>
          </Ic> */}
        </Hold>):(null)}
        {shows ? (<Hold>
          <Holds>
           <Card>
            <small>Title</small>
            <input type="text" />
           </Card>
           <Card>
           <small>Select location</small>
            <select name="" id="">
              <option value="">Ajeromi ifelodun local govt</option>
              <option value="">Apapa</option>
              <option value="">Festac</option>
            </select>
           </Card>
           <Card>
           <small>Select Date</small>
           <input type="date" />
           </Card>
           <Card>
           <small>Select Time</small>
           <input type="time" />
           </Card>
            <button onClick={toggleShows}>Send Request</button>
          </Holds>
          <Ic onClick={toggleShows}>
            <GrClose/>
          </Ic>
        </Hold>):(null)}
      </Top1>
  );
};

export default UserNotification;
const Ic = styled.div`
font-size: 30px;
color:white;
position: absolute;
top: 5px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
border-radius: 50%;

:hover{
 
  background-color: #f03131a0;
  color: white;

}
`
const Card=styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
/* justify-content: left; */
/* text-align: left; */
/* background-color: red; */
select{
  padding: 10px;
  width: 425px;
  outline: none;

}
small{
  display: flex;
  justify-content: left;
  text-align: right;
  /* margin-top: 15px; */

}
input{
  width: 400px;
  padding: 10px;
  font-size: 17px;
  /* margin-bottom: 10px; */
  /* margin-top: 10px; */
}
`
const Holds=styled.div`
width: 500px;
height: 450px;
background-color: #f0ecec;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 10px 10px 10px 10px;
padding: 10px;
p{
  font-size: 35px;
}
small{
text-align: center;
font-size: 15px;
}
button{
  padding: 15px 15px;
  background-color: #03b903;
  color:white;
  font-size: 18px;
  margin-top: 70px;
  cursor: pointer;
  border: none;
}
/* margin-top: 25%; */
`
const Hold=styled.div`
display:flex;
width:100%;
height:100%;
justify-content: center;
align-items: center;
position: absolute;
background-color: #0000009d;
bottom:0;
top:0;
z-index: 999;
`
const Transfer = styled.button`
  padding: 10px 25px;
  /* border: 2px solid #1d1d41; */
  color: #1d1d41;
  font-weight: 600;
  border-radius: 10px;
  background-color: transparent;
box-shadow:rgba(0, 0, 0, 0.171) 0px 4px 12px;
  :hover {
    cursor: pointer;
  }
`;
const PayOnline = styled.button`
  padding: 10px 25px;
  background-color: #ff4500;
  color: #fff;
  border: 0;
  font-weight: 600;
  border-radius: 10px;
  transition: all 350ms ease;
  
  :hover {
    cursor: pointer;
    background-color: #ff4400e6;
  }
`;
const ButtonHold = styled.div`
  width: 90%;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Details = styled.div`
/* color:red; */
width: 120px;
`;
const Box = styled.div`
width:250px;
height:200px;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
/* box-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px; */
border-radius:20px;
padding:20px;
flex-direction:column;
margin-top:30px;
`;
const MsgHold = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;
const Notify = styled.div`
display:flex;
/* justify-content:center; */
/* align-items:center; */
flex-direction:column;
button{
    width:150px;
    padding:10px 13px;
    background-color:#03b903;
    color:white;
    border-radius:30px;
    border:0;
    font-size:16px;
}
`;

const Top1 = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
width:91%;
  background-color:#f2f2f8b7;
  /* background-color:white; */
  border-radius:20px;
  /* padding-left:50px; */
  padding:0 0 30px 50px;
  margin-top:17px;
  @media screen and (max-width: 768px) {
  
  }
`;
