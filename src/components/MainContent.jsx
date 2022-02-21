import React from 'react';
import styled from "styled-components";
import NavbarTop from "./NavbarTop";
import MessageBox from "./MessageBox";
import Reward from "./Reward";
import Referral from "./Referral";
import Final from './Final'

function MainContent () {
  return (
    <>
    <Container>
      <Section>
      <SectionZero>
        <NavbarTop />
      </SectionZero>

      <SectionOne>
        <MessageBox />
      </SectionOne>

      <SectionTwo>
        <Reward />
      </SectionTwo>

      <SectionThree>
        <Referral />
        <Referral />
      </SectionThree>

      <SectionFour>
        <Final />
      </SectionFour>
      </Section>

    </Container>
    </>
  );
}

const Container = styled.div`
  width: 60%;
  background: #111111;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const Section = styled.div`
  width: 90%;
  height:100%;
  margin: auto;
  background: #111111;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SectionZero = styled.div`
  height: 10%;
  background: #111111;
  gap: 5rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SectionOne = styled.div`
  height: 15%;
  padding: 10px 0px 0px 0px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SectionTwo = styled.div`
  padding: 5px 0px 0px 0px;
  height: 20%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SectionThree = styled.div`
  height: 30%;
  padding: 10px 0px 0px 0px;

  display: flex;
  gap: 1rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const ColumnOne = styled.div`
  justify-content: flex-start;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const ColumnTwo = styled.div`
  justify-content: flex-end;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SectionFour = styled.div`
  height: 25%;
  padding: 10px 0px 0px 0px;
  display: flex;
  gap: 1rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

export default MainContent ;
