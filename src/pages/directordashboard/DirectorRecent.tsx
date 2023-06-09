import react from "react"
import { IoMdPerson } from "react-icons/io";
import { TfiAngleRight } from "react-icons/tfi";
import styled from "styled-components"
import { allRequest } from "../../utils";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Recent=()=>{
  const Product=useQuery({
    queryKey:["Req"],
    queryFn:allRequest,
})
console.log("product",Product)
if(Product?.data?.loading) return <h2>Loading...</h2>

    return(
        <Two>
        <Tit>Recent Request</Tit>
         {Product?.data?.data?.map((props:any)=>(
                 <Pro>
                 <Ips>
                   <IoMdPerson/>
                 </Ips>
                 <Ad>
                   <Nam>{props.name}</Nam>
                   <Ads>{props.address}</Ads>
                 </Ad>
                 <Ij>
                   <TfiAngleRight/>
                 </Ij>
               </Pro>
          ))}
      </Two>
    )
}
export default Recent;
const Box=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left:20px;
margin-top:20px;
`
const Box1=styled.div`
  width: 30px;
  height: 30px;
  background-color: #2e53da;
  margin-right:10px;
  border-radius:8px;
`
const Lef=styled.div`
p{
  font-weight:bold;
}
`
const Num=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:0;
margin-left:20px;
margin-top:-20px;

p{
  font-size: 35px;
  /* font-weight: bold; */
}
`
const Log=styled.img`
position: absolute;
bottom: 50;
right: 0;
width: 350px;
`
const Pro=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 10px;
:nth-child(even){
  background-color:#d4d5d85e;
}
`
const Ij=styled.div``
const Ad=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Ads=styled.div``
const Ips=styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: gray;
color: white;
font-weight: bold;
font-size: 27px;
display: flex;
justify-content: center;
align-items: center;
`
const Nam=styled.div``
const Tit=styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: black;
  color: white;
  position: sticky;
  align-items: center;
  padding-left: 10px;
`
const Sec=styled.div`
display: flex;
width: 100%;
justify-content: space-around;
/* background-color: white; */

align-items: center;
`
const One=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Two=styled.div`
width: 350px;
height: 570px;
background-color: white;
border-radius: 12px;
overflow: hidden;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
@media screen and (max-width:425px){
  width: 90%;
}
`
const Pop=styled.div`
display: flex;
flex-direction: column;
h3{
  color: white;
  font-size: 30px;
}
p{
  color: white;
  font-size: 14px;
}
`
const Pip=styled.div`
img{
  width: 300px;
}
`
const Infos=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 50px;
`
const Users=styled.div`
width: 400px;
height: 200px;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
/* justify-content:left; */
align-items: flex-start;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
position: relative;
`
const Amounts=styled.div`
width: 400px;
height: 200px;
background-color: #1f0404;
border-radius: 10px;

`
const Detail=styled.div`
background-color: #14329e ;
width: 800px;
border-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;
padding:15px;
margin-bottom: 20px;
/* gap: 10px; */
`
const Bi=styled.div`
font-size: 20px;
width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    background-color: #928f8f;
    color: white;
`
const Noti=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  span{
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 45%;
    background-color: #2e53da;
    color: white;
    margin-top: -20px;
    margin-left: -15px;
  }
`
const Container = styled.div`
  width: calc(100% - 270px);
  height: 100vh;
  /* padding: 10px; */
`;
const Wrap=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
/* padding-left: 20px; */
`
const Right=styled.div`
display: flex;
width: 60%;
justify-content: space-around;
align-items: center;
/* margin-right: 20px; */
`
const Main=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`
const Left=styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
/* background-colo:red; */
`
const Hold1=styled.div`
display: flex;
width: 80px;
height: 25px;
justify-content: space-between;
align-items: center;
background-color: white;
padding: 8px 12px;
/* margin-right: 20px; */
border-radius: 10px;
p{
  width: 100%;
  color:#2e53da ;
 font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
}

`
const Hold=styled.div`
display: flex;
background-color: #2e53da;
padding: 8px 12px;
height: 35px;
justify-content: space-between;
align-items: center;
margin-right: 20px;
border-radius: 10px;
p{
  color: white;
  
}

`
const Holds=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 400px;
height: 40px;
border-radius: 6px;
/* border: 1px black solid; */
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
input{
  border: none;
  outline:0;
  width: 90%;
}
`
const Ic=styled.div`
color: white;
`
const Ip=styled.div`
font-size: 16px;
padding-left: 10px;
`
const Up=styled.div``
const Down=styled.div`
/* margin-top: -15px; */
p{

  margin: 0;

}
h1{
  margin: 0;
}
`