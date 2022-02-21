import React from "react";
import styled from "styled-components";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonIcon from '@mui/icons-material/Person';

function Referral () {
  return (
    <ReferralContainer>
      <ReferralBox>

        <h2 > <PersonIcon className="personIcon"/>12.5% of fee</h2>
        <h3 >Your Referral Link for xyz</h3>
      </ReferralBox>
      <PriceContainer>
        <Price>https:/htmlcolorcodes.com/</Price>
        <a href=''><ContentCopyIcon /></a>
      </PriceContainer>
    </ReferralContainer>
  );
}

const ReferralContainer = styled.div`
  height: 90%;
  width: 50rem;
  background-color: #2E4053;
  padding: 10px 10px 25px 30px;
  border-radius: 15px;
  color: white;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const ReferralBox = styled.div`
  background-color: #2E4053;
  padding: 10px 0px 25px 10px;
  border-radius: 15px;


  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;

    gap: 0.4rem;
  }
`;

const Price = styled.div``;

export default Referral;
