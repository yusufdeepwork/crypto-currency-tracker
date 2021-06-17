import React from 'react';
import styled from 'styled-components';
import CryptoCurrencyTracker from './components/CurrencyTracker';

const App = () => (
  <AppContainer>
    <BottomCorner />
    <CryptoCurrencyTracker />
    <TopCorner />
  </AppContainer>

);

export default App;

const AppContainer = styled.div`
  justify-content: center;
  align-items: flex-end;
  display: flex;
  height: 100vh;
  background-color: #f6f8f9;
  
`;
const BottomCorner = styled.div`
  position: absolute;
  right:0;
  bottom: 0;
  width: 30vw;
  height: 25vw;
  border-radius: 100% 0 0 0;
  background: #8fd5f8;
  z-index: 3;
`;
const TopCorner = styled.div`
  position: absolute;
  left:0;
  top: 0;
  width: 30vw;
  height: 25vw;
  border-radius: 0 0 100% 0;
  background: #8fd5f8;
  z-index: 3;
`;
