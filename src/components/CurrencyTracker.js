import React from 'react';
import styled from 'styled-components';

const CurrencyTracker = () => (
  <Container>
    Currency Tracker
  </Container>
);
export default CurrencyTracker;
const Container = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 90vh;
  width: 70%;
  background-color: white;
  border-radius: 0.5rem 0 0.5rem 0;
  font-size: 40px;
  font-family: "Fira Code Medium",monospace;
`;
