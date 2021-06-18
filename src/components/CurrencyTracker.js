import React from 'react';
import styled from 'styled-components';
import CurrenciesList from './CurrenciesList';
import SearchingCrypto from './SearchingCrypto';

const CurrencyTracker = () => (
  <Container>
    <SearchingCrypto />
    <CurrenciesList />
  </Container>
);
export default CurrencyTracker;
const Container = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  z-index: 4;
  display: flex;
  align-items: center;
  text-align: center;
  height: 90vh;
  width: 70%;
  background-color: white;
  border-radius: 0.5rem 0 0.5rem 0;
  font-family: 'Fira Code', monospace;
  font-weight: bold;
  @media screen and (max-width: 790px){
    width: 80%;
  }
  @media screen and (max-width: 540px){
    height: 97vh;
    width: 85%;
  }
  @media screen and (max-width: 400px){
    height: 93vh;
    width: 85%;
    margin-bottom: 10px;
  }
`;
