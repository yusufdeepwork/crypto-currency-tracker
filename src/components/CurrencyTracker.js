import React from 'react';
import styled from 'styled-components';
import CurrenciesList from './CurrenciesList';
import SearchingCrypto from './SearchingCrypto';

const CurrencyTracker = () => (
  <Container>
    {/* <h1 style={{ marginTop: '8rem' }}>Searching</h1> */}
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
  font-family: "Fira Code Medium",monospace;
`;
