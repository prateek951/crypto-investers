import React from 'react';
import styled from 'styled-components';
import {CryptoContext} from "../App/CryptoProvider";
import PriceTile from './PriceTile';

const PriceGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(5, 1fr); 
  grid-gap: 15px; 
  margin-top: 40px; 
`;

const Info = styled.div`
  position: absolute;
  background-color: white;
  top: 80%;
  font-size: 2rem;
  color: black;
  text-align: center;

`

const comparator = (prices) => {
  if(prices.length!=0) {

  let maxCoin = prices.reduce((accumulator, price) => {
    let t = Object.keys(price)[0];
    
    let coin = {
                value: Number(price[t]["USD"].PRICE),
                name: price[t]["USD"].FROMSYMBOL
                };

    if((coin.value>accumulator.value) || Object.keys(accumulator).length==0){
      return accumulator = coin;
    }
    return accumulator;
  }, {})

  return <p>{maxCoin.name} is the best coin to invest as compared to rest of your favourite coins.</p>;}
}

export default function () {
  return (
    <CryptoContext.Consumer>
      {({prices}) => (
        <PriceGrid>
          {prices.map((price, index) => (
            <PriceTile key={`priceTile-${index}`} index={index} price={price}/>
          ))}
          <Info>{comparator(prices)} </Info>
        </PriceGrid>
      )}
    </CryptoContext.Consumer>
  );
}
