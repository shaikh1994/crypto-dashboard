import React from "react";
import styled from "styled-components";
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';

function MessageBox(){
  return(
    <>
    <Inbox>
      <div style={box} >
        <h2 style={text}>asdadafsfloremasdadafsfloremasdadafsflorem</h2>
        <img style={bitcoin} src="https://imgur.com/SUAvQED.png"/>

      </div>
      <div style={boxtwo}>
        <Button style={button} variant="contained" size="small">
        Tutorial
        </Button>
        <CancelIcon style={cancel}/>


    </div>
    </Inbox>



</>

    );
}

export default MessageBox;

const Inbox = styled.div`
  height: 70%;
  margin-top: 10px;
  background-color: #CDFFFF;
  padding: 0px;
  border-radius: 15px;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const text = {
  padding: "10px 0px 0px 20px",
}
const box = {
  padding: "0px 0px 0px 20px",
  display:"flex",
  justifyContent:"space-between",
}

const boxtwo = {
  padding: "0px 0px 0px 40px",
  position:"relative",
  top:"-40px"
}

const button = {
  color: "black",
  background: "white",
  borderRadius:"10px",
}

const bitcoin = {
  height:"90px",
  width: "100px",
  position: "relative",
  right: "10px",
  top:"20px"
}

const cancel = {
  color: "white",
  position: "relative",
  left: "890px",
  top:"-60px"
}
