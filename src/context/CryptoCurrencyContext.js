import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
export const CryptoContext = createContext(undefined, undefined);
const CryptoTrackerApp = ({ children }) => {
  const [currencyName, setCurrencyName] = useState();
  const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  const { isLoading, data: currencies } = useQuery('fetchLuke',
    () => axios(apiUrl)
      .then((response) => response.data)
      .catch((err) => console.log(err)));

  return (
    <CryptoContext.Provider value={{
      currencies, currencyName, setCurrencyName, isLoading,
    }}
    >
      {children}
    </CryptoContext.Provider>

  );
};
export default CryptoTrackerApp;
