import React, { useContext } from 'react';
import styled from 'styled-components';
import { CryptoContext } from '../context/CryptoCurrencyContext';

const SearchingCrypto = () => {
  const { currencyName, setCurrencyName } = useContext(CryptoContext);

  return (
    <SearchedCryptoInput
      value={currencyName}
      onChange={(event) => setCurrencyName(event.target.value)}
    />
  );
};
export default SearchingCrypto;

const SearchedCryptoInput = styled.input`
    color: black;
`;
