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
  width:15rem;
  height:2rem;
  outline: none;
  background-color:lightcyan;
  padding: 10px;
  border-radius: 10rem;
  font-family: 'Fira Code', monospace;
  font-weight: bold;

  

  
  
  
  :focus{
    border: none;
    outline: none;
    box-shadow: 5px green ;
    
  }
`;
