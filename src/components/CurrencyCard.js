import React from 'react';
import styled from 'styled-components';
import {AiOutlineRise, AiOutlineFall} from 'react-icons/ai';
const CurrencyCard = ({
  market_cap_rank, image, name, market_cap, current_price, total_volume, market_cap_change_percentage_24h,
}) => {

        const changeColor = market_cap_change_percentage_24h? market_cap_change_percentage_24h
            .toString()
            .startsWith('-') ? 'red' : 'green'
            : null;
    return(
        <CardContainer>
            <CurrencyRank>{market_cap_rank}</CurrencyRank>
            <CurrencyProfile>
                <CurrencyImage src={image} alt="selam"/>
                <text style={{padding: '0 5px'}}>{name}</text>
            </CurrencyProfile>
            <CurrencyPriceText gray>{market_cap}</CurrencyPriceText>
            <CurrencyPriceText nonMobile>{current_price}</CurrencyPriceText>
            <CurrencyPriceText gray>{total_volume}</CurrencyPriceText>
            <CurrencyChange color={changeColor}>
                {market_cap_change_percentage_24h}
                {changeColor==='red' ? <AiOutlineFall style={{paddingLeft:'2px'}} size={20}  />
                : <AiOutlineRise style={{paddingLeft:'2px'}} size={20} />}

            </CurrencyChange>
        </CardContainer>
    )
}
export default CurrencyCard;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 5.1% 30% 13.5% 16.5% 18.5% 19.5% ;
  @media screen and (max-width: 1359px){
    grid-template-columns: 8.1% 40% 27% 27% ;
  }
  @media screen and (max-width: 790px){
    grid-template-columns: 8.1% 40%  50% ;
  }
  @media screen and (max-width: 540px){
    grid-template-columns: 8.1% 40%  55% ;
  }
  grid-template-rows: 3rem;
  align-items: center;
  width: 90%;
  text-align: left;
  padding: 5px 10px;
`;
const CurrencyRank = styled.div`
 text-align: center;
`;
const CurrencyProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  @media screen and (max-width: 1359px){
   padding-left: 20px;
  }
  @media screen and (max-width: 362px){
    padding-left: 5px;
  }
`;

const CurrencyPriceText = styled.text`
  text-align: right;
  color: ${({ gray }) => (gray ? 'gray' : 'black')};
  @media screen and (max-width: 1359px){
    display: ${({ gray }) => (gray ? 'none' : null)};
  }

  @media screen and (max-width: 790px){
    display: ${({ nonMobile }) => (nonMobile ? 'none' : null)};
  }

`;
const CurrencyChange = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: right;
  color: ${({ color }) => `${color}`};
`;

const CurrencyImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  text-align: center;
  padding:0 5px;

  @media screen and (max-width: 400px){
    padding: 0;
    width: 1rem;
    height: 1rem;
  }

`;
