import React, { useContext } from 'react';
import styled from 'styled-components';
import { CryptoContext } from '../context/CryptoCurrencyContext';

const SearchingCrypto = () => {
  const { currencyName, setCurrencyName } = useContext(CryptoContext);

  return (
    <SearchedCryptoInput
      value={currencyName}
      onChange={(event) => setCurrencyName(event.target.value)}
      placeholder="Search Crypto by name"
    />
  );
};
export default SearchingCrypto;

const SearchedCryptoInput = styled.input`
  border: none;
  color: black;
  width:12rem;
  height:2.5rem;
  outline: none;
  background-color:lightcyan;
  border-radius: 10rem;
  font-family: 'Fira Code', monospace;
  font-weight: bold;
  padding-left:1rem;
  margin-bottom: 0.5rem;

  
  
  
  :focus{
    border: none;
    outline: none;
  }
`;
