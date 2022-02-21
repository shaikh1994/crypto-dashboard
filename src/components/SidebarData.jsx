import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as TiIcons from "react-icons/ti";
import ShareIcon from '@mui/icons-material/Share';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Section 1',
    path: '/Section_1',
    icon: <MdIcons.MdAssessment />,
    cName: 'nav-text'
  },
  {
    title: 'Section 2',
    path: '/Section_2',
    icon: <RiIcons.RiStockLine />,
    cName: 'nav-text'
  },
  {
    title: 'Section 3',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Section 4',
    path: '/messages',
    icon: <RiIcons.RiExchangeDollarLine />,
    cName: 'nav-text'
  },
  {
    title: 'Section',
    path: '/support',
    icon: <FaIcons.FaCoins />,
    cName: 'nav-text'
  },
  {
    title: 'Section 6',
    path: '/support',
    icon: <AiIcons.AiOutlinePieChart />,
    cName: 'nav-text'
  },
  {
    title: 'Section 7',
    path: '/support',
    icon: <BsIcons.BsBarChart />,
    cName: 'nav-text'
  },
  {
    title: 'Section 8',
    path: '/support',
    icon: <ShareIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Documentation',
    path: '/support',
    icon: <TiIcons.TiDocumentText />,
    cName: 'nav-text'
  },

];
