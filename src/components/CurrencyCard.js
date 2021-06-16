import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const CurrencyCard = ({ props }) =>
  // eslint-disable-next-line no-console
  (
    <CardContainer>
      <CurrencyRank>
        {props.market_cap_rank}
      </CurrencyRank>
      <CurrencyProfile>
        <CurrencyImage src={props.image} alt="selam" />
        <text>{props.name}</text>
      </CurrencyProfile>
      <CurrencyPriceText gray>{props.market_cap}</CurrencyPriceText>
      <CurrencyPriceText gray>{props.current_price}</CurrencyPriceText>
      <CurrencyPriceText>{props.total_volume}</CurrencyPriceText>
      <CurrencyChange>{props.market_cap_change_percentage_24h}</CurrencyChange>
      {/* <Last7DaysGraphic>graphic</Last7DaysGraphic> */}
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
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 5rem ;
  min-width: 5rem;
  font-size: 15px;
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
const CurrencyImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding-right: 15px;
`;
