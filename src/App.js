import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import MainContent from "./components/MainContent";
import styled from "styled-components";

function App() {
  return (
    <>
        <Container>
          <Router >
            <Navbar />
          </Router>
          <MainContent />
        </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  background-color:	#111111;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
