import React from 'react';
import styled from 'styled-components';

const CurrencyCard = () => (
  <CardContainer>
    <CurrencyRank> 1 </CurrencyRank>
    <CurrencyProfile>selam</CurrencyProfile>
    <CurrencyPriceText gray>Market Cap</CurrencyPriceText>
    <CurrencyPriceText gray>Price</CurrencyPriceText>
    <CurrencyPriceText>Volume 24h</CurrencyPriceText>
    <CurrencyChange>change</CurrencyChange>
    <Last7DaysGraphic>graphic</Last7DaysGraphic>
  </CardContainer>
);
export default CurrencyCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 90%;
  height: 5rem;
  min-height: 5rem;
`;
const CurrencyRank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  min-width: 3rem;
  color: gray;
`;
const CurrencyProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 5rem ;
  min-width: 5rem;
`;

const CurrencyPriceText = styled.text`
  color: ${({ gray }) => (gray ? 'gray' : 'black')};
  align-self: center;
  width: 3rem;
  min-width: 3rem;
`;
const CurrencyChange = styled.div`
  width: 5rem;
  min-width: 5rem;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

`;
const Last7DaysGraphic = styled.div`
    background-color: greenyellow;
  justify-content: center;
  align-items: center;
  text-align: center ;
  display: flex;
`;
