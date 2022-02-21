import React from "react";
import styled from "styled-components";
import * as BsIcons from "react-icons/bs";
import Button from "@mui/material/Button";

function Reward () {
  return (
    <RewardBox >
      <RewardAmount>
        <h3>Your Rewards</h3>
        <h2 style={text}>$0.26231428</h2>
        <InfoDiv>
          <InfoBox > $40 AVAX</InfoBox>
          <InfoBox >$10 BNB</InfoBox>
          <InfoBox >$210 BTC</InfoBox>
        </InfoDiv>

      </RewardAmount>
      <CustomLink>
          <Button size="small" variant="contained" startIcon={<BsIcons.BsBoxArrowInUpRight />}>Custom link</Button>
      </CustomLink>


    </RewardBox>

  );
}

const RewardBox = styled.div`
  height: 90%;
  margin-top: 10px;

  background-color: #2E4053;
  padding: 5px 0px 25px 30px;
  border-radius: 15px;


  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;


const RewardAmount = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const InfoBox = styled.div`
height: 90%;
margin-top: 10px;
padding: 0px 10px 0px 10px;
margin-right:10px;
border-radius: 15px;
background: #7F8C8D ;
color: white;

display: flex;
justify-content: space-between;

@media screen and (min-width: 320px) and (max-width: 1080px) {
  height: max-content;
  width: 75%;
  margin-top: 1rem;
}
`;

const InfoDiv = styled.div`
display:flex;
flex-direction: row;
padding: 0px 0px 0px 10px;

@media screen and (min-width: 320px) and (max-width: 1080px) {
  height: max-content;
  width: 75%;
  margin-top: 1rem;
}
`;

const CustomLink = styled.div`

  justify-content: flex-end;
  padding: 60px 50px 0px 0px;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const text = {
  color:" white",
  padding: "0px 0px 0px 10px"
}

export default Reward;
