import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from "styled-components";
import { data } from "./Data";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Final (){
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <Box sx={{ width: '100%', color: 'white' }}>
     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
       <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
         <Tab sx={{ color: 'white' }} label="First Tab" {...a11yProps(0)} />
         <Tab sx={{ color: 'white' }} label="Second Tab" {...a11yProps(1)} />
       </Tabs>
     </Box>
     <HeadingTab>
       <h3>Asset</h3>
       <h3>Amount</h3>
       <h3>User Account</h3>
       <h3>Referral Earning</h3>
     </HeadingTab>

     <TabPanel className="tabPanel" value={value} index={0}>
       <div className= "datadiv">
          <div>
            <h5><img className="cryptoimg" src={data[0].img}/> &nbsp;{data[0].asset}</h5>
            <div className="cryptoBox" >
            <h6> {data[0].type} &nbsp;</h6><InfoBox> <h6><img className="cryptoimg2" src={data[0].chain.img} />{data[0].chain.name}</h6></InfoBox>
            </div>
         </div>

         <div>
           <h5> {data[0].amount} BNB</h5>
           <h6>Expired</h6>
         </div>

         <div>
         <h5> {data[0].user}</h5>
         </div>

         <div>
         <h5> {data[0].referral_earnings}</h5>
         </div>

       </div>
     </TabPanel>
     <TabPanel className="tabPanel" value={value} index={1}>
     <div className= "datadiv">
        <div>
          <h5><img className="cryptoimg" src={data[1].img}/> &nbsp;{data[1].asset}</h5>
          <div className="cryptoBox" >
          <h6> {data[1].type} &nbsp;</h6><InfoBox> <h6><img className="cryptoimg2" src={data[1].chain.img} />{data[1].chain.name}</h6></InfoBox>
          </div>
        </div>

       <div>
         <h5> {data[1].amount} BNB</h5>
         <h6>Expired</h6>
       </div>

       <div>
        <h5> {data[1].user}</h5>
       </div>

       <div>
        <h5> {data[1].referral_earnings}</h5>
       </div>
     </div>
     </TabPanel>
   </Box>
 );
}

const HeadingTab = styled.div`
  background-color: #2E4053;
  height: 20%;
  margin-top: 10px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0px 20px 0px 20px;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: max-content;
    width: 80%;
  }
`;


const InfoBox = styled.div`
padding: 0px 10px 0px 10px;
border-radius: 15px;
background: #7F8C8D ;
color: white;

@media screen and (min-width: 320px) and (max-width: 1080px) {
  height: max-content;
  width: 75%;
  margin-top: 1rem;
}
`;




export default Final;
