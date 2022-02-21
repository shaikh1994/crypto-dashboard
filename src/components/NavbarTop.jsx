import React from 'react';
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as BiIcons from "react-icons/bi";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


function NavbarTop (){

  return (


    <NavbarContainer>
      <div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={0} aria-label="basic tabs example">
              <Tab label="Section" />
            </Tabs>
          </Box>
        </Box>
      </div>

      <div>
        <Button style = {buttonStyleTwo} variant="outlined"  endIcon={<KeyboardArrowDownIcon />}>
          <BiIcons.BiWalletAlt style = {iconStyleOne} size={20}/> &nbsp;&nbsp;&nbsp; 0XF6...1353
        </Button>
      </div>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0px 0px 0px;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const buttonStyleTwo = {
  backgroundColor: "#293B5F",
  color: "white",
  paddingLeft: "10px"
}

const iconStyleOne = {
  color:"#005b96"
}

export default NavbarTop;
