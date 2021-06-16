import React, { useContext } from 'react';
import styled from 'styled-components';
import { CryptoContext } from '../context/CryptoCurrencyContext';
import CurrencyCards from './CurrencyCard';

const CurrenciesList = () => {
  const { state } = useContext(CryptoContext);

  return (

    <CurrenciesContainer>
      <Categories>
        <Title size="3rem">Rank</Title>
        <Title size="5rem">Coin</Title>
        <Title size="3rem">Market Cap</Title>
        <Title size="3rem">Price</Title>
        <Title size="3rem">Volume (24h)</Title>
        <Title size="4rem">Change (24h)</Title>
        {/* <Title size="5rem">Last 7 days</Title> */}
      </Categories>
      <Currencies>
        {state ? state.map((props, index) => <CurrencyCards props={props} />) : null}
      </Currencies>

    </CurrenciesContainer>
  );
};
export default CurrenciesList;

const CurrenciesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  overflow: auto;
  background-color: #f6f8f9;
  border-radius: 1rem;
  pointer-events: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 1rem;
    border-radius: 2rem;
    height: 2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2rem;
    height: 2rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2rem;
    height: 4rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #8fd5f8;
    border-radius: 2rem;
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 3rem;
  font-size: 15px;
  padding: 0 1rem;
`;

const Title = styled.div`
  width: ${({ size }) => `${size}`};
  min-width: ${({ size }) => `${size}`};
  height: 3rem;
`;
const Currencies = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #f6f8f9;
  border-radius: 1rem;
  pointer-events: auto;
  margin-bottom: 4rem;
  /* width */
  ::-webkit-scrollbar {
    width: 1rem;
    border-radius: 2rem;
    height: 2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2rem;
    height: 2rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2rem;
    height: 4rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #8fd5f8;
    border-radius: 2rem;
  }
`;
