import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as ArrIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import Badge from "./Badge";
import DarkModeToggle from "react-dark-mode-toggle";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OutlinedInput from '@mui/material/OutlinedInput';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <nav className='nav-menu '>
          <ul  >
            <li className='navbar-toggle'>
              <h1><p className="nameIcon">N</p>Name</h1>
                <Link to='#' className='menu-bars'>
                  <ArrIcons.FiArrowLeft />
                </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}

            <div className='nav-badge'>
              <row>
                <Badge content="$0.90"><p>N</p></Badge>
              </row>
              <row>
                <Badge content="Buy $XYZ"><p>N</p></Badge>
              </row>
            </div>

            <div className='rowC'>
              <AiIcons.AiOutlineGlobal size={30}/>
              <DarkModeToggle
                  onChange={setIsDarkMode}
                  checked={isDarkMode}
                  size={70}
                />
              </div>
          </ul>
        </nav>


        <nav className= 'nav-menu-right '>
          <ul >
            <li className='navbar-toggle'>
              <div>
                <row className ="nav-badge-right">
                  <Button style = {buttonStyleOne} variant="contained" endIcon={<KeyboardArrowDownIcon />}>
                    <img className = 'img-coin' src="https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=021"/>
                      Avalanche
                    </Button>
                  </row>

                  <row className ="nav-badge-right">
                    <Button style = {buttonStyleTwo} variant="outlined"  endIcon={<KeyboardArrowDownIcon />}>
                    <BiIcons.BiWalletAlt style = {iconStyleOne} size={20}/> &nbsp;&nbsp;&nbsp; 0XF6...1353
                    </Button>
                  </row>
                </div>
            </li>

            <li className='navbar-toggle'>
              <div>
                <row className ="nav-badge-right">
                  <ArrIcons.FiArrowLeft />
                </row>
              </div>
                <h3>Custom link</h3>
            </li>

            <li className='navbar-toggle'>
              <row className ="nav-badge-right">
                <h3><a> https:/textnet.xyz/trade?ref=</a></h3>
              </row>
            </li>

            <li className='navbar-toggle'>
              <row className ="nav-badge-right">
                <OutlinedInput style={text} fullWidth placeholder="ENTER" />
              </row>
            </li>

            <li className='navbar-toggle-small'>
              <row className ="nav-badge-right">
                <Button size="small" variant="contained" startIcon={<BsIcons.BsBoxArrowInUpRight />}>Custom link</Button>
              </row>
              <row className ="nav-badge-right">
                <Button style = {textColor} size="small" variant="outlined" startIcon={<BsIcons.BsBoxArrowInRight />}>Cancel</Button>
              </row>
            </li>

          </ul>
        </nav>


    </>
  );
}

const buttonStyleOne = {
  backgroundColor: "#293B5F",
  paddingLeft: "10px",
}

const buttonStyleTwo = {
  backgroundColor: "transparent",
  borderColor: "#005b96",
  color: "white"
}

const iconStyleOne = {
  color:"#005b96"
}

const text= {
  backgroundColor: "#293B5F",
  borderRadius: "5px",
  color: "#DBE6FD",
  paddingRight: "130px"
}

const textColor ={
  color: "white"
}

export default Navbar;
