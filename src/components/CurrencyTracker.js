import React from 'react';
import styled from 'styled-components';
import CurrenciesList from './CurrenciesList';

const CurrencyTracker = () => (
  <Container>
    <h1>Searching</h1>
    {/* <Searching /> */}
    <CurrenciesList />
  </Container>
);
export default CurrencyTracker;
const Container = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
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
