import React, { useContext } from 'react';
import styled from 'styled-components';
import { CryptoContext } from '../context/CryptoCurrencyContext';

import CurrencyCard from './CurrencyCard';
import Categories from './Categories';

const CurrenciesList = () => {
  const { currencies, currencyName } = useContext(CryptoContext);

  const filteredCurrencies = currencyName ? currencies
    .filter(({ name }) => name.toLowerCase().includes(currencyName.toLowerCase())) : currencies;

  return (
    <CurrenciesContainer>
      <Categories />
      <Currencies>
        {filteredCurrencies ? filteredCurrencies.map((currency) => (
          <CurrencyCard
            {...currency}
          />
        )) : 'loading...'}
      </Currencies>
    </CurrenciesContainer>
  );
};
export default CurrenciesList;

const CurrenciesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 80%;
  height: 80%;
  background-color: #f6f8f9;
  border-radius: 1rem;
  @media screen and (max-width: 540px){
  font-size: 13px;
    margin-top: 0;
    height: 90%;
    width: 90%;
  }
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
  @media screen and (max-width: 362px){
    font-size: 11px;
  }
`;
