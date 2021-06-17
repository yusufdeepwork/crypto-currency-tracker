import React from 'react';
import styled from "styled-components";

const Categories = () => {
 return <CategoriesContainer>
        <Title >Rank</Title>
        <Title left>Coin</Title>
        <Title nonTablet>Market Cap</Title>
        <Title nonMobile >Price</Title>
        <Title nonTablet>Volume (24h)</Title>
        <Title >Change (24h)</Title>
        {/* <Title size="5rem">Last 7 days</Title> */}
    </CategoriesContainer>
}
export default Categories;
const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 5.1% 30% 12.5% 16.5% 18.5% 19.5% ;
  grid-template-rows: 2rem;
  align-items: center;
  width: 90%;
  font-size: 1rem;
  padding: 5px 10px;
  @media screen and (max-width: 1359px){
    grid-template-columns: 8.1% 40% 25% 28% ;
  }
  @media screen and (max-width: 790px){
    grid-template-columns: 8.1% 50%  40% ;
  }
  
  
`;

const Title = styled.div`
  text-align: ${({left}) => left ? `left` : 'right'};;
  padding-left: ${({left}) => left ? `3rem` : null};

  @media screen and (max-width: 1359px){
    display: ${({nonTablet}) => (nonTablet ? 'none' : null)};
  }

  @media screen and (max-width: 790px){
    display: ${({nonMobile}) => (nonMobile ? 'none' : null)};
  }
  @media screen and (max-width: 540px){
   font-size: 14px;
  }
  
`;
