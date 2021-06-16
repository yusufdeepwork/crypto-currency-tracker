import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const CryptoContext = createContext(undefined, undefined);

// eslint-disable-next-line react/prop-types
const CryptoTrackerApp = ({ children }) => {
  const [state, setState] = useState();
  const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setState(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <CryptoContext.Provider value={{ state }}>
      {children}
    </CryptoContext.Provider>
  );
};
export default CryptoTrackerApp;
